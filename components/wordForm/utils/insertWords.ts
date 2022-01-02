import { supabase } from 'utils/supabaseClient';

export const insertWords = async (user_id: string, word: string, meaning: string) => {
  await supabase
    .from('word')
    .insert({ user_id, word, meaning });
};
