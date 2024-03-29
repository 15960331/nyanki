import React, { memo } from 'react';
import { NextPage } from 'next';
import { Box, Flex, Spinner } from '@chakra-ui/react';

import { Card } from 'components/atoms';

import { useGetItems } from './api/useGetItems';
import { Item } from './components/Item';
import { AddButton } from './components/AddButton';

export const WordForm: NextPage = memo(() => {
  const { loading, items, nextId, fetchItems } = useGetItems();

  return (
    <Card
      darkMode
      centerText
    >
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        gap={4}
      >
        {items.map((item, index) => (
          <Box key={item.word_id}>
            <Item
              index={index + 1}
              defaultWordItem={item}
              onUpdate={fetchItems}
              onDelete={fetchItems}
            />
          </Box>
        ))}
        <AddButton
          nextId={nextId}
          onSubmit={fetchItems}
        />
      </Flex>
      {loading && <Spinner />}
    </Card>
  );
});
