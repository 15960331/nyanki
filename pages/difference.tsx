import React from 'react';
import type { NextPage } from 'next/types';
import { Text, Spinner } from '@chakra-ui/react';

import { useProtectPage } from '../hooks/useProtectPage';

const Page: NextPage = () => {
  const { user } = useProtectPage();

  return !user
    ? <Spinner />
    : <Text fontSize="6xl">Difference page</Text>;
};

export default Page;
