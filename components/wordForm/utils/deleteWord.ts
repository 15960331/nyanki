import { supabase } from 'utils/supabaseClient';

export const deleteWord = async (id: number) => {
  const { error } = await supabase
    .from('word')
    .delete()
    .eq('id', id);

  // TODO: consider how to handle, show errors
  if (error) {
    console.error(error.message);
  }
};
