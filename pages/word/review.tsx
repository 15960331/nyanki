import React, { useState, useCallback } from 'react';
import type { NextPage } from 'next/types';
import { Spinner, Flex } from '@chakra-ui/react';

import { Button, Card } from 'components/atoms';
import { LinkButton } from 'components/molecules';
import { useProtectPage } from 'hooks/useProtectPage';
import { WordReviewCard } from 'features/WordReviewCard';

const Page: NextPage = () => {
  const [isReverseMode, setIsReverseMode] = useState(false);
  const { isLoggedIn } = useProtectPage();

  const handleClick = useCallback(() => {
    setIsReverseMode((prev) => !prev);
  }, []);

  if (!isLoggedIn) return <Spinner />;

  return (
    <Flex
      direction="column"
      gap={4}
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <Card
        title="Word - Review"
        centerText
      >
        Review if you remembered them!
      </Card>

      <Flex
        gap={4}
        justifyContent="center"
        alignItems="center"
      >
        <LinkButton href="/word/list">List</LinkButton>
        <Button onClick={handleClick}>
          {isReverseMode ? 'Meaning -> Word' : 'Word -> Meaning'}
        </Button>
      </Flex>

      <WordReviewCard isReverseMode={isReverseMode} />
    </Flex>
  );
};

export default Page;
