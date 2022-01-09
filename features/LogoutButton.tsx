import React, { MouseEventHandler } from 'react';
import { NextPage } from 'next/types';
import { useRouter } from 'next/router';
import { useToast } from '@chakra-ui/react';

import { useUser } from 'providers/userProvider';
import { Button } from 'components/Button';

export const LogoutButton: NextPage = () => {
  const router = useRouter();
  const { signOut } = useUser();
  const toast = useToast();

  const onClick: MouseEventHandler = async (e) => {
    e.preventDefault();

    const { error } = await signOut();

    if (error) {
      toast({
        title: 'Logout failed',
        description: error.message,
        status: 'error',
      });
      return;
    }

    router.push('/login');
  };

  return (
    <Button
      colorScheme="red"
      onClick={onClick}
    >
      Logout
    </Button>
  );
};
