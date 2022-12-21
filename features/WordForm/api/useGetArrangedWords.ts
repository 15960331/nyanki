import { useState, useEffect, useCallback } from 'react';

import { useSelect } from 'api/useSelect';
import { WordItem } from 'types';

import { getMaxId } from '../utils/getMaxId';

export const useGetArrangedWords = () => {
  const [items, setItems] = useState<WordItem[]>([]);
  const [nextId, setNextId] = useState(1);
  const { loading, select } = useSelect();

  const fetchItems = useCallback(async () => {
    const data: WordItem[] = await select('word', 'id');
    setItems(data);
  }, [select]);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  useEffect(() => {
    setNextId(getMaxId(items) + 1);
  }, [items]);

  return {
    items,
    nextId,
    loading,
    fetchItems,
  } as const;
};
