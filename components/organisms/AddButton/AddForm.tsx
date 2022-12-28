import React, { FormEvent, memo, useEffect, useState } from 'react';
import { NextPage } from 'next';
import { Divider, FormLabel, Stack } from '@chakra-ui/react';

import { useInsert } from 'api/useInsert';
import { Button, Input } from 'components/atoms';

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
        {/* TODO: implement molecules/InputWithLabel  */}
        <div>
          <FormLabel
            color={LABEL_COLOR}
            htmlFor="id"
          >
            id
          </FormLabel>
          <Input
            id="id"
            value={id}
            isDisabled
          />
        </div>
        <div>
          <FormLabel
            color={LABEL_COLOR}
            htmlFor="word"
          >
            word
          </FormLabel>
          <Input
            id="word"
            value={word}
            ref={firstInputRef}
            onChange={handleChangeWord}
          />
        </div>
        <div>
          <FormLabel
            color={LABEL_COLOR}
            htmlFor="meaning"
          >
            meaning
          </FormLabel>
          <Input
            id="meaning"
            value={meaning}
            onChange={handleChangeMeaning}
          />
        </div>
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
