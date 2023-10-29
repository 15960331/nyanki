import React, { memo, useCallback } from 'react';
import { NextPage } from 'next';
import { Box, Flex, Spinner } from '@chakra-ui/react';

import { Card, Button } from 'components/atoms';
import { useDisclosure } from 'hooks/useDisclosure';

import { useGetRandomWord } from './api/useGetRandomWord';
import { OpenNextButton } from './components/OpenNextButton';

type Props = {
  isReverseMode: boolean;
};

export const WordReviewCard: NextPage<Props> = memo(({ isReverseMode }) => {
  const { isOpen, open, close } = useDisclosure();
  const { loading, currentWord, getNextWord, reset, remaining } = useGetRandomWord();

  const handleNextClick = useCallback(() => {
    close();
    getNextWord();
  }, [close, getNextWord]);

  const handleResetClick = useCallback(() => {
    close();
    reset();
  }, [close, reset]);

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
            onClickOpen={open}
            onClickNext={handleNextClick}
          />
          <span>{`remaining: ${remaining}`}</span>
          <Button
            onClick={handleResetClick}
            colorScheme="green"
          >
            Reset
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
});
