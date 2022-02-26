import React from 'react';
import type { NextPage } from 'next/types';
import { Spinner, Box } from '@chakra-ui/react';

import { Card } from 'components/Card';
import { LinkButton } from 'components/LinkButton';
import { useProtectPage } from 'hooks/useProtectPage';
import { WordReviewCard } from 'features/WordReviewCard';

const Page: NextPage = () => {
  const { isLogined } = useProtectPage();

  return isLogined
    ? (
      <>
        <Card title="Word - Review" centerText>
          Review if you remembered them!
        </Card>

        <Box p={4} />

        <LinkButton href="/word/list">
          Back to List
        </LinkButton>

        <Box p={4} />

        <WordReviewCard />
      </>
    )
    : <Spinner />;
};

export default Page;
