import React, { memo } from 'react';
import { NextPage } from 'next';
import { Box, Flex, Spinner } from '@chakra-ui/react';

import { Card } from 'components/Card';
import { AddButton } from 'components/organisms/AddButton';
import { useGetArrangedWords } from './api/useGetArrangedWords';
import { Item } from './components/Item';

export const WordForm: NextPage = memo(() => {
  const { loading, items, nextId, fetchItems } = useGetArrangedWords();

  const handleSubmit = () => {
    fetchItems();
  };

  return (
    <Card darkMode centerText>
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        gap={4}
      >
        {items.map((item, index) => (
          <Box key={item.word_id}>
            <Item index={index + 1} defaultWordItem={item} />
          </Box>
        ))}
        <AddButton nextId={nextId} onSubmit={handleSubmit} />
      </Flex>
      {loading && <Spinner />}
    </Card>
  );
});
