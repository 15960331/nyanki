import React, { useRef, memo } from 'react';
import { NextPage } from 'next';
import {
  Flex, IconButton,
  Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverFooter, PopoverTrigger,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { useUpdate } from 'api/useUpdate';
import { useDelete } from 'api/useDelete';
import { FormItem } from '../types';

type Props = {
  formItem: FormItem;
  setItems: React.Dispatch<React.SetStateAction<FormItem[]>>;
};

export const Item: NextPage<Props> = memo(({ formItem, setItems }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { update } = useUpdate();
  const { loading: deleteLoading, deleteRows } = useDelete();

  const onChangeWord = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItems((prev) => prev.map((el) => {
      if (el.id === formItem.id) {
        return {
          ...el,
          word: e.target.value,
        };
      }
      return el;
    }));
  };

  const onChangeMeaning = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItems((prev) => prev.map((el) => {
      if (el.id === formItem.id) {
        return {
          ...el,
          meaning: e.target.value,
        };
      }
      return el;
    }));
  };

  const onBlur = () => {
    // TODO: calls only when "word" or "meaning" are changed
    update('word', formItem, 'id', formItem.id);
  };

  const onClickDelete = async () => {
    await deleteRows('word', 'id', formItem.id);

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
});
