import { useCallback, useState } from 'react';
import { useToast } from '@chakra-ui/react';

import { supabase } from 'utils/supabaseClient';
import { useUser } from 'providers/userProvider';
import { WordItem } from 'types';

export const useInsert = () => {
  // TODO: don't mount useUser in this hook
  // but on components that use this hook
  const { user } = useUser();

  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const insert = useCallback(
    async <T extends Omit<WordItem, 'word_id' | 'user_id'>>(tableName: string, data: T[]) => {
      if (!user) {
        toast({
          status: 'error',
          description: 'You are not logged in',
          isClosable: true,
        });
        return false;
      }

      setLoading(true);

      const addedUserId = data.map((el) => ({
        ...el,
        user_id: user.id,
      }));

      const { error } = await supabase.from(tableName).insert(addedUserId);

      if (error) {
        toast({
          status: 'error',
          description: `${error.code} ${error.message}`,
          isClosable: true,
        });
        setLoading(false);
        return false;
      }

      setLoading(false);
      return true;
    },
    [toast, user],
  );

  return { loading, insert } as const;
};
