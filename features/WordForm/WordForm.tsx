import React from 'react';
import { NextPage } from 'next';
import { Box, Spinner } from '@chakra-ui/react';

import { useGetArrangedWords } from './hooks/useGetArrangedWords';
import { AddButton } from './components/AddButton';
import { Item } from './components/Item';

export const WordForm: NextPage = () => {
  const {
    loading, items, setItems, nextId,
  } = useGetArrangedWords();

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
      <AddButton nextId={nextId} />
      {loading && <Spinner />}
    </>
  );
};
