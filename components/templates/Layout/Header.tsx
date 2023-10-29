import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Flex, Menu, Text, Spacer, Spinner } from '@chakra-ui/react';

import { Button } from 'components/atoms';
import { LinkButton } from 'components/molecules';
import { useUser } from 'providers/userProvider';
import { LogoutButton } from 'features/LogoutButton';

// TODO: put box-shadow
export const Header: NextPage = () => {
  const router = useRouter();
  const { user, loadingUser } = useUser();

  return (
    <Flex
      flexDirection="row"
      h="100%"
      alignItems="center"
      px={4}
    >
      <Link
        href="/"
        passHref
      >
        <Text
          fontSize="3xl"
          color="white"
          mr={4}
        >
          Nyanki
        </Text>
      </Link>
      <Menu>
        <LinkButton
          href="/word/list"
          isActive={router.pathname.startsWith('/word')}
          isDisabled={loadingUser ? true : !user}
        >
          Word
        </LinkButton>

        <Spacer />

        {loadingUser && <Spinner />}
        {!loadingUser && user ? (
          <LogoutButton />
        ) : (
          <Link
            href="/login_register"
            passHref
          >
            <Button isActive={router.pathname === '/login_register'}>Login / Register</Button>
          </Link>
        )}
      </Menu>
    </Flex>
  );
};
