import React, { memo, useRef, useState } from 'react';
import { NextPage } from 'next';
import { Button } from 'components/atoms';
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
import { DeleteIcon } from '@chakra-ui/icons';

type Props = {
  isLoading: boolean;
  onConfirm: () => void;
};

export const DeleteButton: NextPage<Props> = memo(({ isLoading, onConfirm }) => {
  const popoverRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  useOutsideClick({
    ref: popoverRef,
    handler: () => setIsOpen(false),
  });

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleConfirm = () => {
    onConfirm();
    setIsOpen(false);
  };

  return (
    <Popover isOpen={isOpen}>
      <PopoverTrigger>
        <IconButton
          colorScheme="red"
          aria-label="delete item"
          icon={<DeleteIcon />}
          roundedLeft={0}
          onClick={handleClick}
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
