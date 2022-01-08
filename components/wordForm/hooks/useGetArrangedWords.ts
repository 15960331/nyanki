import { useState, useEffect, useCallback } from 'react';

import { supabase } from 'utils/supabaseClient';
import { FormItem } from '../types';
import { getMaxId } from '../utils';
import { useGetWords } from './useGetWords';

export const useGetArrangedWords = () => {
  const [items, setItems] = useState<FormItem[]>([]);
  const [nextId, setNextId] = useState(1);
  const { loading: getLoading, getWords } = useGetWords();

  const getWordsThenSet = useCallback(async () => {
    const data = await getWords();

    // if (!areIdsValid(data)) {
    //   updateWord(arrangeIds(data));
    //   return;
    // }

    setItems(data);
  // }, [getWords, updateWord]);
  }, [getWords]);

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
    loading: getLoading,
  } as const;
};
