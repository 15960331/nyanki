import { useCallback, useState } from 'react';
import { useToast } from '@chakra-ui/react';

import { supabase } from 'utils/supabaseClient';

export const useGetWords = () => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const getWords = useCallback(async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from('word')
      .select('*')
      .order('id');

    if (error || !data) {
      toast({
        status: 'error',
        description: `${error?.code} ${error?.message}`,
        isClosable: true,
      });

      return [];
    }

    setLoading(false);

    return data;
  }, [toast]);

  return { loading, getWords } as const;
};
