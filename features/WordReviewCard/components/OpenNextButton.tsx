import React, { memo } from 'react';
import { NextPage } from 'next';
import { Button } from 'components/atoms';

type Props = {
  showNextButton: boolean;
  disabled: boolean;
  onClickOpen: () => void;
  onClickNext: () => void;
};

export const OpenNextButton: NextPage<Props> = memo(
  ({ showNextButton, disabled, onClickOpen, onClickNext }) =>
    showNextButton ? (
      <Button
        onClick={onClickNext}
        isDisabled={disabled}
      >
        Next
      </Button>
    ) : (
      <Button
        onClick={onClickOpen}
        isDisabled={disabled}
      >
        Open
      </Button>
    ),
);
