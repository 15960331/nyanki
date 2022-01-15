import { useState, useEffect, useCallback } from 'react';

import { useSelect } from 'api/useSelect';
import { useDelete } from 'api/useDelete';
import { useInsert } from 'api/useInsert';

import { supabase } from 'utils/supabaseClient';
import { FormItem } from '../types';
import { areItemsValid } from '../utils/areItemsValid';
import { arrangeItems } from '../utils/arrangeItems';
import { getMaxId } from '../utils/getMaxId';

export const useGetArrangedWords = () => {
  const [items, setItems] = useState<FormItem[]>([]);
  const [nextId, setNextId] = useState(1);
  const { loading: selectLoading, select } = useSelect();
  const { loading: deleteLoading, deleteAll } = useDelete();
  const { loading: insertLoading, insert } = useInsert();

  const getWordsThenSet = useCallback(async () => {
    const data: FormItem[] = await select('word', 'id');

    if (!areItemsValid(data)) {
      await deleteAll('word');
      await insert('word', arrangeItems(data));
      return;
    }

    setItems(data);
  }, [select, deleteAll, insert]);

  useEffect(() => {
    getWordsThenSet();
  }, [getWordsThenSet]);

  useEffect(() => {
    const autoSelect = supabase
      .from('word')
      .on('*', () => {
        getWordsThenSet();
      })
      .subscribe();

    return () => {
      supabase.removeSubscription(autoSelect);
    };
  }, [getWordsThenSet]);

  useEffect(() => {
    setNextId(getMaxId(items) + 1);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(items)]);

  return {
    items,
    setItems,
    nextId,
    loading: selectLoading || deleteLoading || insertLoading,
  } as const;
};
