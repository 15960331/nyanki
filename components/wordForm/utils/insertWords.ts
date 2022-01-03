import { supabase } from 'utils/supabaseClient';

export const insertWords = async (
  user_id: string,
  id: number,
  word: string,
  meaning: string,
) => {
  await supabase
    .from('word')
    .insert({
      user_id,
      id,
      word,
      meaning,
    });
};
