import React, { memo, useRef } from 'react';
import { NextPage } from 'next';
import { DeleteIcon } from '@chakra-ui/icons';
import {
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverFooter,
  PopoverTrigger,
  useOutsideClick,
} from '@chakra-ui/react';

import { Button } from 'components/atoms';
import { useDisclosure } from 'hooks/useDisclosure';

type Props = {
  isLoading: boolean;
  onConfirm: () => void;
};

export const DeleteButton: NextPage<Props> = memo(({ isLoading, onConfirm }) => {
  const popoverRef = useRef<HTMLElement>(null);
  const { isOpen, open, close } = useDisclosure();

  useOutsideClick({
    ref: popoverRef,
    handler: close,
  });

  const handleConfirm = () => {
    onConfirm();
    close();
  };

  return (
    <Popover isOpen={isOpen}>
      <PopoverTrigger>
        <IconButton
          colorScheme="red"
          aria-label="delete item"
          icon={<DeleteIcon />}
          roundedLeft={0}
          onClick={open}
        />
      </PopoverTrigger>
      <PopoverContent
        ref={popoverRef}
        color="gray.700"
      >
        <PopoverArrow />
        <PopoverBody>Are you sure you want to delete?</PopoverBody>
        <PopoverFooter>
          <Button
            colorScheme="red"
            size="sm"
            width="100%"
            isLoading={isLoading}
            onClick={handleConfirm}
          >
            I am sure!!
          </Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
});
