import React from 'react';
import type { NextPage } from 'next/types';
import { Stack } from '@chakra-ui/react';

import { Card } from 'components/atoms';
import { LoginRegisterForm } from 'features/LoginRegisterForm';

const Page: NextPage = () => (
  <Stack
    gap={10}
    width="30%"
  >
    <Card
      title="Login"
      centerText
      darkMode
    >
      <LoginRegisterForm type="login" />
    </Card>

    <Card
      title="Register"
      centerText
    >
      <LoginRegisterForm type="register" />
    </Card>
  </Stack>
);

export default Page;
