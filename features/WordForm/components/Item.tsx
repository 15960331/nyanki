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
import { WordItem } from 'types';

type Props = {
  wordItem: WordItem;
  setItems: React.Dispatch<React.SetStateAction<WordItem[]>>;
};

export const Item: NextPage<Props> = memo(({ wordItem, setItems }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { update } = useUpdate();
  const { loading: isDeleting, deleteRows } = useDelete();

  const onChangeWord = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItems((prev) => prev.map((el) => {
      if (el.id === wordItem.id) {
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
      if (el.id === wordItem.id) {
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
    update('word', wordItem, 'id', wordItem.id);
  };

  const onClickDelete = async () => {
    await deleteRows('word', 'id', wordItem.id);

    // this is necessary to close popover unless it is the lastone
    buttonRef.current?.blur();
  };

  // TODO: make this draggable
  return (
    <Flex>
      <Input
        w="100px"
        textAlign="center"
        roundedRight={0}
        value={wordItem.id}
        isDisabled
      />
      <Input
        placeholder="word"
        rounded={0}
        value={wordItem.word}
        onChange={onChangeWord}
        onBlur={onBlur}
      />
      <Input
        placeholder="meaning"
        rounded={0}
        value={wordItem.meaning}
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
        <PopoverContent color="gray.700">
          <PopoverArrow />
          <PopoverBody>
            Are you sure you want to delete?
          </PopoverBody>
          <PopoverFooter>
            <Button
              colorScheme="red"
              size="sm"
              width="100%"
              onClick={onClickDelete}
              isLoading={isDeleting}
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
