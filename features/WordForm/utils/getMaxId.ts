import { WordItem } from 'types';

export const getMaxId = (items: WordItem[]) => {
  if (items.length === 0) {
    return 0;
  }

  return Math.max(...items.map((el) => el.id));
};
