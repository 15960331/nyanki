import React from 'react';
import { NextPage } from 'next';

import { Button } from '../Button';
import { FormItem } from './types';

type Props = {
  setItems: React.Dispatch<React.SetStateAction<FormItem[]>>
};

export const AddRowButton: NextPage<Props> = ({ setItems }) => {
  const onClickAddRow = () => {
    setItems((prev) => {
      const order = prev.length !== 0
        ? Math.max(...prev.map((el) => el.order)) + 1
        : 1;

      return ([
        ...prev,
        { order, word: '', meaning: '' },
      ]);
    });
  };

  return (
    <Button onClick={onClickAddRow}>
      Add Row
    </Button>
  );
};
