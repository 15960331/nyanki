import React, { FormEvent, memo, useEffect, useState } from 'react';
import { NextPage } from 'next';
import { Divider, FormLabel, Stack } from '@chakra-ui/react';

import { useInsert } from 'api/useInsert';
import { Button, Input } from 'components/atoms';
import { InputWithLabel } from 'components/molecules';

type Props = {
  id: number;
  firstInputRef: React.RefObject<HTMLInputElement>;
  onSubmit: () => void;
};

export const AddForm: NextPage<Props> = memo(({ id, firstInputRef, onSubmit }) => {
  const LABEL_COLOR = 'gray.700';

  const [word, setWord] = useState('');
  const [meaning, setMeaning] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const { loading, insert } = useInsert();

  useEffect(() => {
    if (word.length === 0 || meaning.length === 0) {
      setIsButtonDisabled(true);
      return;
    }

    setIsButtonDisabled(false);
  }, [word, meaning]);

  const handleChangeWord = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value);
  };

  const handleChangeMeaning = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMeaning(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO: make all functions in api hooks return boolean
    await insert('word', [{ id, word: word.trim(), meaning: meaning.trim() }]);

    // TODO: make below lines get executed only if api request succeeded
    setWord('');
    setMeaning('');
    onSubmit();
  };

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <Stack>
        <InputWithLabel
          id="id"
          value={id}
          isDisabled
          labelProps={{
            text: 'id',
            color: LABEL_COLOR,
          }}
        />
        <InputWithLabel
          id="word"
          value={word}
          onChange={handleChangeWord}
          labelProps={{
            text: 'word',
            color: LABEL_COLOR,
          }}
          ref={firstInputRef}
        />
        <InputWithLabel
          id="meaning"
          value={meaning}
          onChange={handleChangeMeaning}
          labelProps={{
            text: 'meaning',
            color: LABEL_COLOR,
          }}
        />
        <Divider />
        <Button
          colorScheme="green"
          size="sm"
          width="100%"
          type="submit"
          isDisabled={isButtonDisabled}
          isLoading={loading}
        >
          OK
        </Button>
      </Stack>
    </form>
  );
});
