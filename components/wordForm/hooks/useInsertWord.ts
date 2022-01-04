import { useCallback, useState } from 'react';
import { useToast } from '@chakra-ui/react';

import { supabase } from 'utils/supabaseClient';
import { useUser } from 'providers';

export const useInsertWord = () => {
  const { user } = useUser();
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const insertWord = useCallback(async (word: string, meaning: string) => {
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
      .from('word')
      .insert({
        user_id: user.id,
        word,
        meaning,
      });

    if (error) {
      toast({
        status: 'error',
        description: `${error.code} ${error.message}`,
        isClosable: true,
      });
    }

    setLoading(false);
  }, [toast, user?.id]);

  return { loading, insertWord } as const;
};
