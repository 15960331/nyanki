import React, { useEffect, useRef, useState } from 'react';
import { NextPage } from 'next';
import {
  Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverFooter, PopoverTrigger, useOutsideClick,
} from '@chakra-ui/react';

import { Button } from 'components/Button';
import { useInsert } from 'api/useInsert';
import { Form } from './Form';

type Props = {
  nextId: number;
};

export const AddButton: NextPage<Props> = ({ nextId }) => {
  const { loading, insert } = useInsert();

  const [isOpen, setIsOpen] = useState(false);
  const [word, setWord] = useState('');
  const [meaning, setMeaning] = useState('');
  const [isOKButtonEnabled, setIsOKButtonDisabled] = useState(true);
  const initialFocusRef = useRef<HTMLInputElement>(null);

  const popoverRef = useRef<HTMLElement>(null);
  useOutsideClick({
    ref: popoverRef,
    handler: () => setIsOpen(false),
  })

  useEffect(() => {
    if (word.length === 0 || meaning.length === 0) {
      setIsOKButtonDisabled(true);
      return;
    }

    setIsOKButtonDisabled(false);
  }, [word, meaning])

  const handleClickAdd = () => {
    setIsOpen(true);
  };

  const handleClickOk = async () => {
    await insert('word', [{ id: nextId, word, meaning }]);
    setIsOpen(false);
    setWord('');
    setMeaning('');
  };

  return (
    <Popover
      isOpen={isOpen}
      initialFocusRef={initialFocusRef}
    >
      <PopoverTrigger>
        <Button onClick={handleClickAdd}>
          Add
        </Button>
      </PopoverTrigger>
      <PopoverContent ref={popoverRef} color="gray.700">
        <PopoverArrow />
        <PopoverBody>
          <Form
            id={nextId}
            word={word}
            meaning={meaning}
            setWord={setWord}
            setMeaning={setMeaning}
            firstInputRef={initialFocusRef}
          />
        </PopoverBody>
        <PopoverFooter>
          <Button
            colorScheme="green"
            size="sm"
            width="100%"
            disabled={isOKButtonEnabled}
            onClick={handleClickOk}
            isLoading={loading}
          >
            OK
          </Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};
