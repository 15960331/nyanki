import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  Flex, Menu, Text, Spacer,
} from '@chakra-ui/react';

import { useUser } from 'providers/userProvider';
import { LogoutButton } from 'features/LogoutButton';
import { Button } from '../Button';

export const Header: NextPage = () => {
  const router = useRouter();
  const { user } = useUser();

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
        <Link href="/word" passHref>
          <Button
            mr={2}
            isActive={router.pathname === '/word'}
            disabled={!user}
          >
            Word
          </Button>
        </Link>
        <Link href="/difference" passHref>
          <Button
            isActive={router.pathname === '/difference'}
            disabled={!user}
          >
            Difference
          </Button>
        </Link>

        <Spacer />

        {user
          ? <LogoutButton />
          : (
            <>
              <Link href="/login" passHref>
                <Button
                  mr={2}
                  isActive={router.pathname === '/login'}
                >
                  Login
                </Button>
              </Link>
              <Link href="/register" passHref>
                <Button
                  isActive={router.pathname === '/register'}
                >
                  Register
                </Button>
              </Link>
            </>
          )}
      </Menu>
    </Flex>
  );
};
