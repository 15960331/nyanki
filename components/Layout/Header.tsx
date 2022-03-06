import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  Flex, Menu, Text, Spacer, Spinner,
} from '@chakra-ui/react';

import { useUser } from 'providers/userProvider';
import { LogoutButton } from 'features/LogoutButton';
import { Button } from '../Button';

export const Header: NextPage = () => {
  const router = useRouter();
  const { user, loadingUser } = useUser();

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
        <Link href="/word/list" passHref>
          <Button
            mr={2}
            isActive={router.pathname.startsWith('/word')}
            disabled={loadingUser ? true : !user}
          >
            Word
          </Button>
        </Link>
        <Link href="/difference" passHref>
          <Button
            isActive={router.pathname.startsWith('/difference')}
            disabled={loadingUser ? true : !user}
          >
            Difference
          </Button>
        </Link>

        <Spacer />

        {loadingUser && <Spinner />}
        {!loadingUser && user
          ? <LogoutButton />
          : (
            <Link href="/login_register" passHref>
              <Button
                isActive={router.pathname === '/login_register'}
              >
                Login / Register
              </Button>
            </Link>
          )}
      </Menu>
    </Flex>
  );
};
