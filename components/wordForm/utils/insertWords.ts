import { supabase } from 'utils/supabaseClient';

export const insertWords = async (
  user_id: string,
  order: number,
  word: string,
  meaning: string,
) => {
  await supabase
    .from('word')
    .insert({
      user_id, order, word, meaning,
    });
};
