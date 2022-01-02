import React, { useRef } from 'react';
import { NextPage } from 'next';
import {
  Flex, IconButton,
  Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverFooter, PopoverTrigger,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

import { Button } from 'components/Button';
import { FormItem } from './types';
import { Input } from '../Input';

type Props = {
  formItem: FormItem;
  setItems: React.Dispatch<React.SetStateAction<FormItem[]>>
};

export const Item: NextPage<Props> = ({ formItem, setItems }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const onChangeWord = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItems((prev) => prev.map((el) => {
      if (el.order === formItem.order) {
        return {
          order: el.order,
          word: e.target.value,
          meaning: el.meaning,
        };
      }
      return el;
    }));
  };

  const onChangeMeaning = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItems((prev) => prev.map((el) => {
      if (el.order === formItem.order) {
        return {
          order: el.order,
          word: el.word,
          meaning: e.target.value,
        };
      }
      return el;
    }));
  };

  const onClickDelete = () => {
    setItems((prev) => prev.filter((el) => el.order !== formItem.order));
    // this is necessary to close popover unless it is the lastone
    buttonRef.current?.blur();
  };

  // TODO: make this sortable
  return (
    <Flex>
      <Input
        maxW="50px"
        textAlign="center"
        roundedRight={0}
        value={formItem.order}
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
