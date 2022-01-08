import { useCallback, useState } from 'react';
import { useToast } from '@chakra-ui/react';

import { useUser } from 'providers/userProvider';
import { supabase } from 'utils/supabaseClient';

export const useDeleteAll = () => {
  const toast = useToast();
  const { user } = useUser();
  const [loading, setLoading] = useState(false);

  const deleteAll = useCallback(async (tableName: string) => {
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
      .delete()
      .eq('user_id', user.id);

    if (error) {
      toast({
        status: 'error',
        description: `${error.code} ${error.message}`,
        isClosable: true,
      });
    }

    setLoading(false);
  }, [user?.id, toast]);

  return { loading, deleteAll } as const;
};
