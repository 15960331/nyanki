import { FormItem } from '../types';

export const arrangeOrders = (formItems: FormItem[]) => formItems.map((el, i) => {
  const temp = el;
  temp.order = i + 1;
  return temp;
});
