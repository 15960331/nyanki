import { WordItem } from 'types';

export const arrangeItems = (formItems: WordItem[]) => formItems.map((el, i) => {
  const temp = el;
  temp.id = i + 1;
  return temp;
});
