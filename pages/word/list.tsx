import React from 'react';
import type { NextPage } from 'next/types';
import { Spinner, Box } from '@chakra-ui/react';

import { Card } from 'components/Card';
import { useProtectPage } from 'hooks/useProtectPage';
import { WordForm } from 'features/WordForm';

const Page: NextPage = () => {
  const { isLogined } = useProtectPage();

  return isLogined
    ? (
      <>
        <Card title="Word - List" centerText>
          Edit your flash cards
        </Card>

        <Box py={4} />

        <WordForm />
      </>
    )
    : <Spinner />
};

export default Page;
