import React, { memo } from 'react';
import { Button } from 'components/Button';

type Props = {
  showNextButton: boolean;
  disabled: boolean;
  onClickOpen: () => void;
  onClickNext: () => void;
};

export const OpenNextButton: React.VFC<Props> = memo(({
  showNextButton, disabled, onClickOpen, onClickNext,
}) => (showNextButton
  ? (
    <Button onClick={onClickNext} disabled={disabled}>
      Next
    </Button>
  )
  : (
    <Button onClick={onClickOpen} disabled={disabled}>
      Open
    </Button>
  )));
