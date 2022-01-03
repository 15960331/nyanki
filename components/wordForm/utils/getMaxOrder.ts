import { FormItem } from '../types/formItem';

export const getMaxOrder = (items: FormItem[]) => Math.max(...items.map((el) => el.id));
