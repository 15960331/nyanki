import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  Flex, Box, Menu, Text, Spacer,
} from '@chakra-ui/react';

import { Button } from '../Button';

export const Header: NextPage = () => {
  const router = useRouter();

  return (
    <Flex
      flexDirection="row"
      h="100%"
      alignItems="center"
      mx={4}
    >
      <Link href="/" passHref>
        <Text as="a" fontSize="3xl" color="white" mr={4}>Nyanki</Text>
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
        <Spacer />
        <Box mr={2}>
          <Link href="/login" passHref>
            <Button isActive={router.pathname === '/login'}>Login</Button>
          </Link>
        </Box>
        <Link href="/register" passHref>
          <Button isActive={router.pathname === '/register'}>Register</Button>
        </Link>
      </Menu>
    </Flex>
  );
};
