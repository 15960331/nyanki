import { useCallback, useState } from 'react';
import { useToast } from '@chakra-ui/react';

import { supabase } from 'utils/supabaseClient';

export const useUpdate = () => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const update = useCallback(async (
    tableName: string,
    updateData: Object,
    filterKeyName: string,
    filterKeyValue: string | number,
  ) => {
    setLoading(true);

    const { error } = await supabase
      .from(tableName)
      .update(updateData)
      .eq(filterKeyName, filterKeyValue);

    if (error) {
      toast({
        status: 'error',
        description: `${error.code} ${error.message}`,
        isClosable: true,
      });
    }

    setLoading(false);
  }, [toast]);

  return { loading, update } as const;
};
