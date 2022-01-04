import React, { useRef } from 'react';
import { NextPage } from 'next';
import {
  Flex, IconButton,
  Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverFooter, PopoverTrigger,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

import { Button } from 'components/Button';
import { FormItem } from './types';
import { useUpdateWord, useDeleteWord } from './hooks';
import { Input } from '../Input';

type Props = {
  formItem: FormItem;
  setItems: React.Dispatch<React.SetStateAction<FormItem[]>>;
  getWordsThenSet: () => Promise<void>;
};

export const Item: NextPage<Props> = ({ formItem, setItems, getWordsThenSet }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { updateWord } = useUpdateWord();
  const { loading: deleteLoading, deleteWord } = useDeleteWord();

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

  const onBlur = async () => {
    await updateWord(formItem);
    getWordsThenSet();
  };

  const onClickDelete = async () => {
    await deleteWord(formItem.id);
    getWordsThenSet();

    // this is necessary to close popover unless it is the lastone
    buttonRef.current?.blur();
  };

  // TODO: make this draggable
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
        onBlur={onBlur}
      />
      <Input
        placeholder="meaning"
        rounded={0}
        value={formItem.meaning}
        onChange={onChangeMeaning}
        onBlur={onBlur}
      />
      <Popover>
        <PopoverTrigger>
          <IconButton
            colorScheme="red"
            aria-label="delete item"
            icon={<DeleteIcon />}
            roundedLeft={0}
          />
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverBody>
            Are you sure you want to delete?
          </PopoverBody>
          <PopoverFooter>
            <Button
              colorScheme="red"
              size="sm"
              isFullWidth
              onClick={onClickDelete}
              isLoading={deleteLoading}
              ref={buttonRef}
            >
              I am sure!!
            </Button>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    </Flex>
  );
};
