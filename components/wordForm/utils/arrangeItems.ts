import { FormItem } from '../types';

export const arrangeItems = (formItems: FormItem[]) => formItems.map((el, i) => {
  const temp = el;
  temp.id = i + 1;
  return temp;
});
