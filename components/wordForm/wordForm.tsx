import React from 'react';
import { NextPage } from 'next';
import { Box, Spinner } from '@chakra-ui/react';

import { useGetArrangedWords } from './hooks';
import { Item, AddButton } from './components';

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
