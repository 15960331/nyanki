import React, { memo, useState } from 'react';
import { NextPage } from 'next';
import { Flex } from '@chakra-ui/react';

import { Input } from 'components/atoms';
import { useUpdate } from 'api/useUpdate';
import { useDelete } from 'api/useDelete';
import { WordItem } from 'types';

import { DeleteButton } from './DeleteButton';

type Props = {
  index: number;
  defaultWordItem: WordItem;
  onUpdate: () => void;
  onDelete: () => void;
};

export const Item: NextPage<Props> = memo(({ index, defaultWordItem, onUpdate, onDelete }) => {
  const { update } = useUpdate();
  const { loading: isDeleting, deleteRows } = useDelete();
  const [word, setWord] = useState(defaultWordItem.word);
  const [meaning, setMeaning] = useState(defaultWordItem.meaning);

  const onChangeWord = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value);
  };

  const onChangeMeaning = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMeaning(e.target.value);
  };

  const onBlurWord = async () => {
    const trimmedWord = word.trim();
    if (trimmedWord === '' || trimmedWord === defaultWordItem.word) {
      setWord(defaultWordItem.word);
      return;
    }

    await update(
      'word',
      { ...defaultWordItem, word: trimmedWord },
      'word_id',
      defaultWordItem.word_id,
    );
    onUpdate();
  };

  const onBlurMeaning = async () => {
    const trimmedMeaning = meaning.trim();
    if (trimmedMeaning === '' || trimmedMeaning === defaultWordItem.meaning) {
      setMeaning(defaultWordItem.meaning);
      return;
    }

    await update(
      'word',
      { ...defaultWordItem, meaning: trimmedMeaning },
      'word_id',
      defaultWordItem.word_id,
    );
    onUpdate();
  };

  const handleConfirmDelete = async () => {
    const result = await deleteRows('word', 'word_id', defaultWordItem.word_id);
    if (!result) return;
    onDelete();
  };

  // TODO: make this draggable
  return (
    <Flex>
      <Input
        w="100px"
        textAlign="center"
        roundedRight={0}
        value={index}
        isDisabled
      />
      <Input
        placeholder="word"
        rounded={0}
        value={word}
        onChange={onChangeWord}
        onBlur={onBlurWord}
      />
      <Input
        placeholder="meaning"
        rounded={0}
        value={meaning}
        onChange={onChangeMeaning}
        onBlur={onBlurMeaning}
      />
      <DeleteButton
        onConfirm={handleConfirmDelete}
        isLoading={isDeleting}
      />
    </Flex>
  );
});
