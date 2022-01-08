import { useCallback, useState } from 'react';
import { useToast } from '@chakra-ui/react';

import { supabase } from 'utils/supabaseClient';
import { useUser } from 'providers';
import { FormItem } from 'components/wordForm/types';

export const useInsert = () => {
  const { user } = useUser();
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const insert = useCallback(async <T extends FormItem>(tableName: string, data: T[]) => {
    if (!user?.id) {
      toast({
        status: 'error',
        description: 'You are not logged in',
        isClosable: true,
      });
      return;
    }

    setLoading(true);

    const { error } = await supabase
      .from(tableName)
      .insert(data);

    if (error) {
      toast({
        status: 'error',
        description: `${error.code} ${error.message}`,
        isClosable: true,
      });
    }

    setLoading(false);
  }, [toast, user?.id]);

  return { loading, insert } as const;
};
