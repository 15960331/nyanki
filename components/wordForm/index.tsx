import React, { useCallback, useEffect, useState } from 'react';
import { NextPage } from 'next';
import { Box } from '@chakra-ui/react';

import { FormItem } from './types';
import { arrangeOrders, getMaxOrder, getWords } from './utils';
import { Item } from './item';
import { AddButton } from './addButton';

export const WordForm: NextPage = () => {
  const [items, setItems] = useState<FormItem[]>([]);
  const [maxOrder, setMaxOrder] = useState(0);

  const getWordsThenSet = useCallback(async () => {
    const data = await getWords();
    setItems(data);
  }, [setItems]);

  useEffect(() => {
    getWordsThenSet();
  }, [getWordsThenSet]);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setItems((prev) => arrangeOrders(prev));
    setMaxOrder(getMaxOrder(items));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(items)]);

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
      <AddButton
        maxOrder={maxOrder}
        getWordsThenSet={getWordsThenSet}
      />
    </>
  );
};
