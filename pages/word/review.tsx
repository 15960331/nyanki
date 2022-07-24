import React, { useState, useCallback } from 'react';
import type { NextPage } from 'next/types';
import { Spinner, Flex } from '@chakra-ui/react';

import { Button } from 'components/Button';
import { Card } from 'components/Card';
import { LinkButton } from 'components/LinkButton';
import { useProtectPage } from 'hooks/useProtectPage';
import { WordReviewCard } from 'features/WordReviewCard';

const Page: NextPage = () => {
  const [isReverseMode, setIsReverseMode] = useState(false);
  const { isLogined } = useProtectPage();

  const onClickSwitchMode = useCallback(() => {
    setIsReverseMode((prev) => !prev);
  }, []);

  if (!isLogined) return <Spinner />;

  return (
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

      <Flex
        gap={4}
        justifyContent="center"
        alignItems="center"
      >
        <LinkButton href="/word/list">
          List
        </LinkButton>
        <Button onClick={onClickSwitchMode}>
          {isReverseMode
            ? 'Meaning -> Word'
            : 'Word -> Meaning'}
        </Button>
      </Flex>

      <WordReviewCard isReverseMode={isReverseMode} />
    </Flex>
  );
};

export default Page;
