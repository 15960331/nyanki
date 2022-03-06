import React from 'react';
import type { NextPage } from 'next/types';
import { Text, Spinner } from '@chakra-ui/react';

import { useProtectPage } from 'hooks/useProtectPage';

const Page: NextPage = () => {
  const { isLogined } = useProtectPage();

  return isLogined
    ? <Text fontSize="6xl">Difference page</Text>
    : <Spinner />;
};

export default Page;
