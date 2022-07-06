import React, { memo, useCallback, useState } from 'react';
import { NextPage } from 'next';
import { Box, Flex, Spinner } from '@chakra-ui/react';

import { Card } from 'components/Card';
import { Button } from 'components/Button';
import { useGetRandomWord } from './api/useGetRandomWord';

export const WordReviewCard: NextPage = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    loading, currentWord, getNextWord, reset, remaining,
  } = useGetRandomWord();

  const onClickOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onClickNext = useCallback(() => {
    setIsOpen(false);
    getNextWord();
  }, [getNextWord]);

  const onClickReset = useCallback(() => {
    setIsOpen(false);
    reset();
  }, [reset]);

  const meaning = () => {
    if (remaining === 0) {
      return <Box>🎊🐈🎊</Box>;
    }
    if (isOpen) {
      return <Box>{currentWord?.meaning}</Box>;
    }
    return <Box>❔</Box>;
  };

  if (loading) return <Spinner />;

  return (
    <Card
      title={remaining === 0
        ? '🎉You are done, good job!🎉'
        : currentWord?.word}
      centerText
      darkMode
      width="80%"
    >
      <Flex direction="column" gap={4}>
        {meaning()}
        <Flex justifyContent="space-between" alignItems="center" gap={4}>
          {isOpen
            ? (
              <Button
                onClick={onClickNext}
                disabled={remaining === 0}
              >
                Next
              </Button>
            )
            : (
              <Button
                onClick={onClickOpen}
                disabled={remaining === 0}
              >
                Open
              </Button>
            )}
          {`remaining: ${remaining}`}
          <Button
            onClick={onClickReset}
            colorScheme="green"
          >
            Reset
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
});
