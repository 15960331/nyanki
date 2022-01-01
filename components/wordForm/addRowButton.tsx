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
      const id = prev.length !== 0
        ? Math.max(...prev.map((el) => el.id)) + 1
        : 1;

      return ([
        ...prev,
        { id, word: '', meaning: '' },
      ]);
    });
  };

  return (
    <Button onClick={onClickAddRow}>
      Add Row
    </Button>
  );
};
