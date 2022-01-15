import { useCallback, useState } from 'react';
import { useToast } from '@chakra-ui/react';

import { supabase } from 'utils/supabaseClient';
import { useUser } from 'providers/userProvider';
import { FormItem } from 'features/WordForm/types';

export const useInsert = () => {
  const { user } = useUser();
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const insert = useCallback(async <T extends Omit<FormItem, 'user_id'>>(tableName: string, data: T[]) => {
    if (!user?.id) {
      toast({
        status: 'error',
        description: 'You are not logged in',
        isClosable: true,
      });
      return;
    }

    if (data.length === 0) {
      return;
    }

    setLoading(true);

    const addedUserId = data.map((el) => ({
      ...el,
      user_id: user.id,
    }));

    const { error } = await supabase
      .from(tableName)
      .insert(addedUserId);

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
