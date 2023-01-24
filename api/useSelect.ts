import { useCallback, useState } from 'react';
import { useToast } from '@chakra-ui/react';

import { supabase } from 'utils/supabaseClient';
import { WordItem } from 'types';

export const useSelect = () => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const select = useCallback(
    async (tableName: string, orderBy: keyof WordItem) => {
      setLoading(true);

      const { data, error } = await supabase.from<WordItem>(tableName).select('*').order(orderBy);

      if (error || !data) {
        toast({
          status: 'error',
          description: `${error.code} ${error.message}`,
          isClosable: true,
        });

        setLoading(false);
        return undefined;
      }

      setLoading(false);
      return data;
    },
    [toast],
  );

  return { loading, select } as const;
};
