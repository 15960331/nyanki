import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
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
    <Link href="/" passHref>
      <Text as="a" fontSize="3xl" color="white" marginX={6}>Nyanki</Text>
    </Link>
    <Menu>
      <Box mr={2}>
        <Link href="/word" passHref>
          <Button>Word</Button>
        </Link>
      </Box>
      <Box mr={2}>
        <Link href="/idiom" passHref>
          <Button>Idiom</Button>
        </Link>
      </Box>
      <Link href="/difference" passHref>
        <Button>Difference</Button>
      </Link>
    </Menu>
  </Box>
);

export default Main;
