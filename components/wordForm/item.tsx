import React from 'react';
import { NextPage } from 'next';
import { Flex, IconButton } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

import { FormItem } from './types';
import { Input } from '../Input';

type Props = {
  formItem: FormItem;
  setItems: React.Dispatch<React.SetStateAction<FormItem[]>>
};

export const Item: NextPage<Props> = ({ formItem, setItems }) => {
  const onChangeWord = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItems((prev) => prev.map((el) => {
      if (el.id === formItem.id) {
        return {
          id: el.id,
          word: e.target.value,
          meaning: el.meaning,
        };
      }
      return el;
    }));
  };

  const onChangeMeaning = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItems((prev) => prev.map((el) => {
      if (el.id === formItem.id) {
        return {
          id: el.id,
          word: el.word,
          meaning: e.target.value,
        };
      }
      return el;
    }));
  };

  const onClickDelete = () => {
    setItems((prev) => prev.filter((el) => el.id !== formItem.id));
  };

  // TODO: make this sortable
  return (
    <Flex>
      <Input
        maxW="50px"
        textAlign="center"
        roundedRight={0}
        value={formItem.id}
        isDisabled
      />
      <Input
        placeholder="word"
        rounded={0}
        value={formItem.word}
        onChange={onChangeWord}
      />
      <Input
        placeholder="meaning"
        rounded={0}
        value={formItem.meaning}
        onChange={onChangeMeaning}
      />
      <IconButton
        colorScheme="red"
        aria-label="delete item"
        icon={<DeleteIcon />}
        roundedLeft={0}
        onClick={onClickDelete}
      />
    </Flex>
  );
};
