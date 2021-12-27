import React from 'react';
import { NextPage } from 'next';
import { Box, Menu, Text } from '@chakra-ui/react';

import Button from '../atoms/Button';

const Main: NextPage = () => (
  <Box
    p={1}
    minH="5vh" // Header 5 + Main 95
    bg="gray.700"
    display="flex"
    alignItems="center"
  >
    <Text as="span" fontSize="3xl" color="white" paddingX={6}>Nyanki</Text>
    <Menu>
      <Box mr={2}>
        <Button>Word</Button>
      </Box>
      <Box mr={2}>
        <Button>Idiom</Button>
      </Box>
      <Button>Difference</Button>
    </Menu>
  </Box>
);

export default Main;
