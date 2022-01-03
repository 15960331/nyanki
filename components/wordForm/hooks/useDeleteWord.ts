import { useCallback, useState } from 'react';
import { useToast } from '@chakra-ui/react';
import { supabase } from 'utils/supabaseClient';

export const useDeleteWord = () => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const deleteWord = useCallback(async (id: number) => {
    setLoading(true);

    const { error } = await supabase
      .from('word')
      .delete()
      .eq('id', id);

    if (error) {
      toast({
        status: 'error',
        description: `${error.code} ${error.message}`,
        isClosable: true,
      });
    }

    setLoading(false);
  }, [toast]);

  return { loading, deleteWord } as const;
};
