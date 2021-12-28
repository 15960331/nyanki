import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Box, Menu, Text } from '@chakra-ui/react';

import Button from '../atoms/Button';

const Main: NextPage = () => {
  const router = useRouter();

  return (
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
            <Button isActive={router.pathname === '/word'}>Word</Button>
          </Link>
        </Box>
        <Box mr={2}>
          <Link href="/idiom" passHref>
            <Button isActive={router.pathname === '/idiom'}>Idiom</Button>
          </Link>
        </Box>
        <Link href="/difference" passHref>
          <Button isActive={router.pathname === '/difference'}>Difference</Button>
        </Link>
      </Menu>
    </Box>
  );
};

export default Main;
