import React, { useState } from 'react';
import { useRouter } from 'next/router';
import {
  Flex, Text, FormLabel, Alert, AlertIcon,
} from '@chakra-ui/react';

import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { useUser } from 'providers/userProvider';

// TODO: refactor to refer to the same JSX with login.tsx
const Register = () => {
  const router = useRouter();
  const { signUp } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await signUp({
      email,
      password,
    });

    if (error) {
      setErrorMsg(error.message);
      return;
    }

    router.push('/login');
  };

  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Text fontSize="3xl">
        Create new account
      </Text>

      <form onSubmit={onSubmit}>
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
          Register
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

export default Register;
