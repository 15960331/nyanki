import React, { useRef, useState } from 'react';
import { NextPage } from 'next';
import {
  Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger, useOutsideClick,
} from '@chakra-ui/react';

import { Button } from 'components/Button';
import { AddForm } from './AddForm';

type Props = {
  nextId: number;
  onSubmit: () => void;
};

export const AddButton: NextPage<Props> = ({ nextId, onSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const initialFocusRef = useRef<HTMLInputElement>(null);

  const popoverRef = useRef<HTMLElement>(null);
  useOutsideClick({
    ref: popoverRef,
    handler: () => setIsOpen(false),
  })

  const handleClickAdd = () => {
    setIsOpen(true);
  };

  const handleSubmit = async () => {
    setIsOpen(false);
    onSubmit();
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
          <AddForm
            id={nextId}
            firstInputRef={initialFocusRef}
            onSubmit={handleSubmit}
          />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
