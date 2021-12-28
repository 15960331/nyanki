import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Box, Menu, Text } from '@chakra-ui/react';

import { Button } from '../Button';

export const Header: NextPage = () => {
  const router = useRouter();

  return (
    <Box
      display="flex"
      flexDirection="row"
      h="100%"
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
