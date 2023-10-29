import React, { useRef } from 'react';
import { NextPage } from 'next';
import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  useOutsideClick,
} from '@chakra-ui/react';

import { Button } from 'components/atoms';
import { useDisclosure } from 'hooks/useDisclosure';
import { AddForm } from './AddForm';

type Props = {
  nextId: number;
  onSubmit: () => void;
};

export const AddButton: NextPage<Props> = ({ nextId, onSubmit }) => {
  const initialFocusRef = useRef<HTMLInputElement>(null);
  const { isOpen, open, close } = useDisclosure();

  const popoverRef = useRef<HTMLElement>(null);
  useOutsideClick({
    ref: popoverRef,
    handler: close,
  });

  const handleSubmit = async () => {
    close();
    onSubmit();
  };

  return (
    <Popover
      isOpen={isOpen}
      initialFocusRef={initialFocusRef}
    >
      <PopoverTrigger>
        <Button onClick={open}>Add</Button>
      </PopoverTrigger>
      <PopoverContent
        ref={popoverRef}
        color="gray.700"
      >
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
