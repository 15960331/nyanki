import React from 'react';
import type { NextPage } from 'next/types';
import { Stack } from '@chakra-ui/react';

import { Card } from 'components/Card';
import { LoginRegisterForm } from 'features/LoginRegisterForm';

const Page: NextPage = () => (
  <Stack spacing={10}>
    <Card title="Login" centerText darkMode>
      <LoginRegisterForm type="login" />
    </Card>

    <Card title="Register" centerText>
      <LoginRegisterForm type="register" />
    </Card>
  </Stack>
);

export default Page;
