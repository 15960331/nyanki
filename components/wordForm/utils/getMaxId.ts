import { FormItem } from '../types/formItem';

export const getMaxId = (items: FormItem[]) => Math.max(...items.map((el) => el.id));
