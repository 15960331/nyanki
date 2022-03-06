import { WordItem } from 'types';

export const areItemsValid = (items: WordItem[]) => {
  if (items.length === 0) {
    return true;
  }

  let prevId = 0;
  let error = false;

  // eslint-disable-next-line consistent-return
  items.forEach((el) => {
    if (prevId - el.id !== -1) {
      error = true;
    }

    prevId = el.id;
  });

  return !error;
};
