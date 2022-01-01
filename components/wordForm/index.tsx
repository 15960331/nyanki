import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { Box } from '@chakra-ui/react';

import { FormItem } from './types';
import { arrangeIds } from './utils/arrangeIds';
import { Item } from './item';
import { AddRowButton } from './addRowButton';

export const WordForm: NextPage = () => {
  const [items, setItems] = useState<FormItem[]>([]);

  useEffect(() => {
    setItems((prev) => arrangeIds(prev));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(items)]);

  return (
    <>
      {items.map((el, i) => (
        <Box mb={4} key={i.toString()}>
          <Item formItem={el} setItems={setItems} />
        </Box>
      ))}
      <AddRowButton setItems={setItems} />
    </>
  );
};
