import { FormItem } from '../types';

export const arrangeIds = (formItems: FormItem[]) => formItems.map((el, i) => {
  const temp = el;
  temp.id = i + 1;
  return temp;
});
