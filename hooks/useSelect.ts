import { useCallback, useState } from 'react';
import { useToast } from '@chakra-ui/react';

import { supabase } from 'utils/supabaseClient';

export const useSelect = () => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const select = useCallback(async (tableName: string, orderBy: string) => {
    setLoading(true);

    const { data, error } = await supabase
      .from(tableName)
      .select('*')
      .order(orderBy);

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

  return { loading, select } as const;
};
