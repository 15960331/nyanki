import { supabase } from 'utils/supabaseClient';

export const getWords = async () => {
  const { data, error } = await supabase
    .from('word')
    .select('*')
    .order('id');

  if (error || !data) {
    return [];
  }

  return data;
};
