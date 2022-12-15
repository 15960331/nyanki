import { useCallback, useState } from 'react';
import { useToast } from '@chakra-ui/react';

import { useUser } from 'providers/userProvider';
import { supabase } from 'utils/supabaseClient';

export const useDelete = () => {
  const toast = useToast();
  const { user } = useUser();
  const [loading, setLoading] = useState(false);

  const deleteRows = useCallback(async (
    tableName: string,
    filterKeyName: string,
    filterKeyValue: string | number,
  ) => {
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
      .match({
        user_id: user.id,
        [filterKeyName]: filterKeyValue,
      });

    if (error) {
      toast({
        status: 'error',
        description: `${error.code} ${error.message}`,
        isClosable: true,
      });
    }

    setLoading(false);
  }, [user?.id, toast]);

  return { loading, deleteRows } as const;
};
