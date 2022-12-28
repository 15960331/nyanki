import React, { memo, useCallback, useState } from 'react';
import { NextPage } from 'next';
import { Box, Flex, Spinner } from '@chakra-ui/react';

import { Card } from 'components/atoms';
import { Button } from 'components/Button';

import { useGetRandomWord } from './api/useGetRandomWord';
import { OpenNextButton } from './components/OpenNextButton';

type Props = {
  isReverseMode: boolean;
};

export const WordReviewCard: NextPage<Props> = memo(({ isReverseMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { loading, currentWord, getNextWord, reset, remaining } = useGetRandomWord();

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

  const word = useCallback(() => {
    if (remaining === 0) return '🎉You are done, good job!🎉';
    if (isReverseMode) return currentWord?.meaning;
    return currentWord?.word;
  }, [currentWord, isReverseMode, remaining]);

  const meaning = useCallback(() => {
    if (remaining === 0) return '🎊🐈🎊';
    if (!isOpen) return '❔';
    if (isReverseMode) return currentWord?.word;
    return currentWord?.meaning;
  }, [currentWord, isOpen, remaining, isReverseMode]);

  if (loading) return <Spinner />;

  return (
    <Card
      title={word()}
      centerText
      darkMode
      width="80%"
    >
      <Flex
        direction="column"
        gap={4}
      >
        <Box>{meaning()}</Box>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          gap={4}
        >
          <OpenNextButton
            showNextButton={isOpen}
            disabled={remaining === 0}
            onClickOpen={onClickOpen}
            onClickNext={onClickNext}
          />
          <span>{`remaining: ${remaining}`}</span>
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
