import React, { useRef, useState } from 'react';
import { NextPage } from 'next';
import {
  Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverFooter, PopoverTrigger,
} from '@chakra-ui/react';

import { Button } from 'components/Button';
import { useInsert } from 'api/useInsert';
import { Form } from './Form';

type Props = {
  nextId: number;
};

export const AddButton: NextPage<Props> = ({ nextId }) => {
  const { loading, insert } = useInsert();
  const [word, setWord] = useState('');
  const [meaning, setMeaning] = useState('');
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  const onClickOk = async () => {
    await insert('word', [{ id: nextId, word, meaning }]);

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
            id={nextId}
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
            isLoading={loading}
          >
            OK
          </Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};
