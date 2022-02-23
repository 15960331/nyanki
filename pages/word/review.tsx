import React from 'react';
import type { NextPage } from 'next/types';
import { Spinner, Box } from '@chakra-ui/react';

import { Card } from 'components/Card';
import { useProtectPage } from 'hooks/useProtectPage';
import { WordReview } from 'features/WordReview';

const Page: NextPage = () => {
  const { isLogined } = useProtectPage();

  return (
    <>
      <Card title="Word" centerText />

      <Box p={4} />

      {!isLogined
        ? <Spinner />
        : <WordReview />}
    </>
  );
};

export default Page;
