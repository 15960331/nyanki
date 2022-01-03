import { supabase } from 'utils/supabaseClient';

export const deleteWord = async (id: number, word: string, meaning: string) => {
  const { error } = await supabase
    .from('word')
    .delete()
    .match({
      id, word, meaning, // should match every column just in case
    });

  // TODO: consider how to handle, show errors
  if (error) {
    console.error(error.message);
  }
};
