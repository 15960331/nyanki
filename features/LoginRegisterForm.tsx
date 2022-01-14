import React, { memo, useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import {
  Flex, FormLabel, Alert, AlertIcon, Box,
} from '@chakra-ui/react';

import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { useUser } from 'providers/userProvider';

type Props = {
  type: 'login' | 'register';
};

export const LoginRegisterForm: NextPage<Props> = memo(({ type }) => {
  const router = useRouter();
  const { signIn, signUp } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successEmail, setSuccessEmail] = useState('');

  const onClickLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // TODO: add logic that redicets to a page specified in url query.
    // query is added by useProtectPage().
    // https://supabase.com/docs/reference/javascript/auth-signin#sign-in-with-redirect
    const { error } = await signIn({
      email,
      password,
    });

    if (error) {
      setErrorMsg(error.message);
      return;
    }

    // TODO: delete
    router.push('/');
  };

  const onClickRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessEmail('');
    setErrorMsg('');

    const { error } = await signUp({
      email,
      password,
    });

    if (error) {
      setErrorMsg(error.message);
      return;
    }

    setSuccessEmail(email);
    setEmail('');
    setPassword('');
  };

  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <form onSubmit={type === 'login' ? onClickLogin : onClickRegister}>
        <FormLabel htmlFor="email">
          Email
        </FormLabel>
        <Input
          isRequired
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <FormLabel htmlFor="password" mt={4}>
          Password
        </FormLabel>
        <Input
          isRequired
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          type="submit"
          mt={4}
          isFullWidth
        >
          {type === 'login' ? 'Login' : 'Register'}
        </Button>
      </form>

      {errorMsg
        && (
          <Alert mt={8} status="error" textColor="blackAlpha.800">
            <AlertIcon />
            {errorMsg}
          </Alert>
        )}
      {successEmail
        && (
          <Alert mt={8} status="success" textColor="blackAlpha.800">
            <AlertIcon />
            <span>We sent an email👉</span>
            <Box textColor="purple.500">{successEmail}</Box>
          </Alert>
        )}
    </Flex>
  );
});
