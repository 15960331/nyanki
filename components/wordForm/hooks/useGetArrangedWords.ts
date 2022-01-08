import { useState, useEffect, useCallback } from 'react';
import { useDeleteAll } from 'hooks/useDeleteAll';
import { useInsert } from 'hooks/useInsert';

import { supabase } from 'utils/supabaseClient';
import { FormItem } from '../types';
import { getMaxId, areItemsValid, arrangeItems } from '../utils';
import { useGetWords } from './useGetWords';

export const useGetArrangedWords = () => {
  const [items, setItems] = useState<FormItem[]>([]);
  const [nextId, setNextId] = useState(1);
  const { loading: getLoading, getWords } = useGetWords();
  const { loading: deleteLoading, deleteAll } = useDeleteAll();
  const { loading: insertLoading, insert } = useInsert();

  const getWordsThenSet = useCallback(async () => {
    const data = await getWords();

    if (!areItemsValid(data)) {
      await deleteAll('word');
      await insert('word', arrangeItems(data));
      return;
    }

    setItems(data);
  }, [deleteAll, getWords, insert]);

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
    loading: getLoading || deleteLoading || insertLoading,
  } as const;
};
