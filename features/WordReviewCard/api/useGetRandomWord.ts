import { useState, useEffect, useCallback, useMemo } from 'react';

import { WordItem } from 'types';
import { getRandomIndex } from 'utils/getRandomIndex';
import { useSelect } from 'api/useSelect';

export const useGetRandomWord = () => {
  const [words, setWords] = useState<WordItem[]>([]);
  const randomIndex = useMemo(() => getRandomIndex(words), [words]);
  const { loading, select } = useSelect();

  const fetchThenSetWords = useCallback(async () => {
    const data = await select('word', 'id');
    if (!data) return;
    setWords(data);
  }, [select]);

  useEffect(() => {
    fetchThenSetWords();
  }, [fetchThenSetWords]);

  const getNextWord = useCallback(() => {
    if (loading || words.length === 0) return;

    setWords((prev) => prev.filter((el) => el.id !== prev[randomIndex].id));
  }, [loading, words, randomIndex]);

  const reset = useCallback(() => {
    fetchThenSetWords();
  }, [fetchThenSetWords]);

  return {
    // TODO: fix currentWord provides undefined when this hook is mounted
    currentWord: words[randomIndex],
    getNextWord,
    reset,
    loading,
    remaining: words.length,
  } as const;
};
