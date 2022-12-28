import React from 'react';
import type { NextPage } from 'next/types';
import { Spinner, Flex } from '@chakra-ui/react';

import { Card } from 'components/atoms';
import { LinkButton } from 'components/LinkButton';
import { useProtectPage } from 'hooks/useProtectPage';
import { WordForm } from 'features/WordForm';

const Page: NextPage = () => {
  const { isLogined } = useProtectPage();

  return isLogined ? (
    <Flex
      direction="column"
      gap={4}
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <Card
        title="Word - List"
        centerText
      >
        Edit your flash cards
      </Card>

      <LinkButton href="/word/review">Review</LinkButton>

      <WordForm />
    </Flex>
  ) : (
    <Spinner />
  );
};

export default Page;
