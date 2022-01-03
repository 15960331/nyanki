import React, { useCallback, useEffect, useState } from 'react';
import { NextPage } from 'next';
import { Box } from '@chakra-ui/react';

import { FormItem } from './types';
import { arrangeOrders, getWords } from './utils';
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

  useEffect(() => {
    setItems((prev) => arrangeOrders(prev));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(items)]);

  return (
    <>
      {items.map((el, i) => (
        <Box mb={4} key={i.toString()}>
          <Item formItem={el} setItems={setItems} />
        </Box>
      ))}
      <AddButton getWordsThenSet={getWordsThenSet} />
    </>
  );
};
