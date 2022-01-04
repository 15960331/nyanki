import { useCallback, useState } from 'react';
import { useToast } from '@chakra-ui/react';

import { supabase } from 'utils/supabaseClient';
import { FormItem } from '../types';

export const useUpdateWord = () => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const updateWord = useCallback(async ({ id, word, meaning }: FormItem) => {
    setLoading(true);

    const { error } = await supabase
      .from('word')
      .update({
        word,
        meaning,
      })
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

  return { loading, updateWord } as const;
};
