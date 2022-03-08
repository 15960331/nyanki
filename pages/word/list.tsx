import React from 'react';
import type { NextPage } from 'next/types';
import { Spinner, Box } from '@chakra-ui/react';

import { Card } from 'components/Card';
import { LinkButton } from 'components/LinkButton';
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

        <Box p={4} />

        <LinkButton href="/word/review">
          Go to Review
        </LinkButton>

        <Box p={4} />

        <Card darkMode centerText>
          <WordForm />
        </Card>
      </>
    )
    : <Spinner />;
};

export default Page;
