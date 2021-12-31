import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { User } from '@supabase/supabase-js';

import { supabase } from '../utils/supabaseClient';

// TODO: add logic that goes back to a page you were at after logged in
export const useProtectPage = () => {
  const router = useRouter();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const profile = supabase.auth.user();

    if (!profile) {
      router.push('/login');
      return;
    }

    setUser(profile);
  }, [router]);

  return { user } as const;
};
