import React from 'react';
import type { NextPage } from 'next/types';
import { Spinner } from '@chakra-ui/react';

import { useProtectPage } from '../hooks/useProtectPage';
import { WordForm } from '../components/WordForm';

const Page: NextPage = () => {
  const { isLogined } = useProtectPage();

  return !isLogined
    ? <Spinner />
    : <WordForm />;
};

export default Page;
