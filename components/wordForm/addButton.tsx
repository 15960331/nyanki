import React, { useRef, useState } from 'react';
import { NextPage } from 'next';
import {
  Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverFooter, PopoverTrigger,
} from '@chakra-ui/react';

import { useUser } from 'providers';
import { Button } from 'components/Button';
import { Form } from './form';
import { insertWords } from './utils';

type Props = {
  maxOrder: number;
  getWordsThenSet: () => void;
};

export const AddButton: NextPage<Props> = ({ maxOrder, getWordsThenSet }) => {
  const { user } = useUser();
  const [word, setWord] = useState('');
  const [meaning, setMeaning] = useState('');
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  const onClickOk = async () => {
    if (!user) {
      return;
    }

    await insertWords(user.id, maxOrder + 1, word, meaning);
    getWordsThenSet();

    // this is necessary to close popover
    buttonRef.current?.blur();
  };

  const onClose = () => {
    setWord('');
    setMeaning('');
  };

  return (
    <Popover onClose={onClose} initialFocusRef={firstInputRef}>
      <PopoverTrigger>
        <Button>
          Add
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody>
          <Form
            word={word}
            meaning={meaning}
            setWord={setWord}
            setMeaning={setMeaning}
            firstInputRef={firstInputRef}
          />
        </PopoverBody>
        <PopoverFooter>
          <Button
            colorScheme="green"
            size="sm"
            isFullWidth
            onClick={onClickOk}
            ref={buttonRef}
          >
            OK
          </Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};
