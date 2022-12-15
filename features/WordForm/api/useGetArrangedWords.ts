import { useState, useEffect, useCallback } from 'react';

import { useSelect } from 'api/useSelect';

import { supabase } from 'utils/supabaseClient';
import { WordItem } from 'types';
import { getMaxId } from '../utils/getMaxId';

export const useGetArrangedWords = () => {
  const [items, setItems] = useState<WordItem[]>([]);
  const [nextId, setNextId] = useState(1);
  const { loading, select } = useSelect();

  const fetchWord = useCallback(async () => {
    const data: WordItem[] = await select('word', 'id');
    setItems(data);
  }, [select]);

  useEffect(() => {
    fetchWord();
  }, [fetchWord]);

  useEffect(() => {
    const autoSelect = supabase
      .from('word')
      .on('*', () => {
        fetchWord();
      })
      .subscribe();

    return () => {
      supabase.removeSubscription(autoSelect);
    };
  }, [fetchWord]);

  useEffect(() => {
    setNextId(getMaxId(items) + 1);
  }, [items]);

  return {
    items,
    nextId,
    loading,
  } as const;
};
