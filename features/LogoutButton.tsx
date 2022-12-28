import React, { MouseEvent } from 'react';
import { NextPage } from 'next/types';
import { useRouter } from 'next/router';
import { useToast } from '@chakra-ui/react';

import { Button } from 'components/atoms';
import { useUser } from 'providers/userProvider';

export const LogoutButton: NextPage = () => {
  const router = useRouter();
  const { signOut } = useUser();
  const toast = useToast();

  const handleClick = async (e: MouseEvent) => {
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

    router.push('/');
  };

  return (
    <Button
      colorScheme="red"
      onClick={handleClick}
    >
      Logout
    </Button>
  );
};
