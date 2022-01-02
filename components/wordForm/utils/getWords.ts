import { supabase } from 'utils/supabaseClient';

export const getWords = async () => {
  const { data, error } = await supabase
    .from('word')
    .select('*');
    // TODO: .order('order');

  if (error || !data) {
    return [];
  }

  return data;
};
