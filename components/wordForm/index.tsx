import React, { useCallback, useEffect, useState } from 'react';
import { NextPage } from 'next';
import { Box, Spinner } from '@chakra-ui/react';

import { supabase } from 'utils/supabaseClient';
import { FormItem } from './types';
import { useGetWords } from './hooks';
import { Item } from './item';
import { AddButton } from './addButton';

export const WordForm: NextPage = () => {
  const [items, setItems] = useState<FormItem[]>([]);
  const { loading, getWords } = useGetWords();

  const getWordsThenSet = useCallback(async () => {
    const data = await getWords();
    setItems(data);
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

  return (
    <>
      {items.map((el, i) => (
        <Box mb={4} key={i.toString()}>
          <Item
            formItem={el}
            setItems={setItems}
          />
        </Box>
      ))}
      <AddButton />
      {loading && <Spinner />}
    </>
  );
};
