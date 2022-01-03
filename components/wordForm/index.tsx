import React, { useCallback, useEffect, useState } from 'react';
import { NextPage } from 'next';
import { Box } from '@chakra-ui/react';

import { FormItem } from './types';
import { getWords } from './utils';
import { Item } from './item';
import { AddButton } from './addButton';

export const WordForm: NextPage = () => {
  const [items, setItems] = useState<FormItem[]>([]);

  const getWordsThenSet = useCallback(async () => {
    const data = await getWords();
    setItems(data);
  }, [setItems]);

  useEffect(() => {
    getWordsThenSet();
  }, [getWordsThenSet]);

  return (
    <>
      {items.map((el, i) => (
        <Box mb={4} key={i.toString()}>
          <Item
            formItem={el}
            setItems={setItems}
            getWordsThenSet={getWordsThenSet}
          />
        </Box>
      ))}
      <AddButton getWordsThenSet={getWordsThenSet} />
    </>
  );
};
