import React, { ChangeEvent, memo, useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Flex, Alert, AlertIcon, Box } from '@chakra-ui/react';

import { Button } from 'components/atoms';
import { InputWithLabel } from 'components/molecules';
import { useUser } from 'providers/userProvider';

type Props = {
  type: 'login' | 'register';
};

export const LoginRegisterForm: NextPage<Props> = memo(({ type }) => {
  // TODO: move states, functions, flexbox login_register.tsx
  const router = useRouter();
  const { signIn, signUp } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successEmail, setSuccessEmail] = useState('');

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleClickLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // TODO: add logic that redirects to a page specified in url query.
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

  const handleClickRegister = async (e: React.FormEvent) => {
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
      <form
        style={{ width: '100%' }}
        onSubmit={type === 'login' ? handleClickLogin : handleClickRegister}
      >
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          gap={4}
        >
          <InputWithLabel
            id="email"
            type="email"
            value={email}
            width="100%"
            isRequired
            labelProps={{ text: 'Email' }}
            onChange={handleChangeEmail}
          />
          <InputWithLabel
            id="password"
            type="password"
            value={password}
            width="100%"
            isRequired
            labelProps={{ text: 'Password' }}
            onChange={handleChangePassword}
          />
          <Button
            type="submit"
            marginTop={4}
            width="100%"
          >
            {type === 'login' ? 'Login' : 'Register'}
          </Button>
        </Flex>
      </form>

      {errorMsg && (
        <Alert
          mt={8}
          status="error"
          textColor="blackAlpha.800"
        >
          <AlertIcon />
          {errorMsg}
        </Alert>
      )}
      {successEmail && (
        <Alert
          mt={8}
          status="success"
          textColor="blackAlpha.800"
        >
          <AlertIcon />
          <span>We sent an email👉</span>
          <Box textColor="purple.500">{successEmail}</Box>
        </Alert>
      )}
    </Flex>
  );
});
