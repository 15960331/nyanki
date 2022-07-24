import React from 'react';
import type { NextPage } from 'next/types';
import { Spinner, Flex } from '@chakra-ui/react';

import { Card } from 'components/Card';
import { LinkButton } from 'components/LinkButton';
import { useProtectPage } from 'hooks/useProtectPage';
import { WordReviewCard } from 'features/WordReviewCard';

const Page: NextPage = () => {
  const { isLogined } = useProtectPage();

  return isLogined
    ? (
      <Flex
        direction="column"
        gap={4}
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        <Card title="Word - Review" centerText>
          Review if you remembered them!
        </Card>

        <LinkButton href="/word/list">
          List
        </LinkButton>

        <WordReviewCard />
      </Flex>
    )
    : <Spinner />;
};

export default Page;
