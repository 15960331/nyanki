import { WordItem } from 'types';

export const arrangeItems = (wordItems: WordItem[]) => wordItems.map((el, i) => {
  const temp = el;
  temp.id = i + 1;
  return temp;
});
