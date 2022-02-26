import React, { memo, useCallback } from 'react';
import { NextPage } from 'next';
import { Box, Flex, Spinner } from '@chakra-ui/react';

import { Card } from 'components/Card';
import { Button } from 'components/Button';
import { useGetRandomWord } from './api/useGetRandomWord';

export const WordReviewCard: NextPage = memo(() => {
  const {
    loading, currentWord, getNextWord, reset, remaining,
  } = useGetRandomWord();

  const onClickNext = useCallback(() => {
    getNextWord();
  }, [getNextWord]);

  const onClickReset = useCallback(() => {
    reset();
  }, [reset]);

  // TODO: components/Card will have styling props
  return loading
    ? <Spinner />
    : (
      <Box minWidth="80%">
        <Card
          title={currentWord?.word}
          centerText
          darkMode
        >
          <Flex direction="column" gap={4}>
            {remaining === 0
              ? <Box>You are done, good job!</Box>
              : <Box>{currentWord?.meaning}</Box>}

            <Flex justifyContent="space-between" gap={4}>
              <Button
                onClick={onClickNext}
                disabled={remaining === 0}
              >
                Next
              </Button>
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
      </Box>
    );
});
