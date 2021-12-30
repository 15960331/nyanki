import React, { useState } from 'react';
import { useRouter } from 'next/router';
import {
  Flex, Text, FormLabel, Alert, AlertIcon,
} from '@chakra-ui/react';

import { supabase } from '../utils/supabaseClient';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

// TODO: refactor to refer to the same JSX with register.tsx
const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.auth.signIn({
      email,
      password,
    });

    if (error) {
      setErrorMsg(error.message);
      return;
    }

    router.push('/');
  };

  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Text fontSize="3xl">
        Login to your account
      </Text>

      <form onSubmit={onSubmit}>
        <FormLabel htmlFor="email">
          Email
        </FormLabel>
        <Input
          required
          className="py-2 px-4 rounded-md focus:outline-none focus:ring-2"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <FormLabel htmlFor="password" mt={4}>
          Password
        </FormLabel>
        <Input
          required
          className="py-2 px-4 rounded-md focus:outline-none focus:ring-2"
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
          Login
        </Button>
      </form>

      {errorMsg
        && (
          <Alert mt={8} status="error">
            <AlertIcon />
            {errorMsg}
          </Alert>
        )}
    </Flex>
  );
};

export default Login;
