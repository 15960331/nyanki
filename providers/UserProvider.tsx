import React, {
  createContext, useContext, useEffect, useMemo, useState,
} from 'react';
import { NextPage } from 'next';
import { User, UserCredentials } from '@supabase/supabase-js';

import { supabase } from '../utils/supabaseClient';

const defaultValue = {
  signUp: (data: UserCredentials) => supabase.auth.signUp(data),
  signIn: (data: UserCredentials) => supabase.auth.signIn(data),
  signOut: () => supabase.auth.signOut(),
  user: undefined as User | undefined,
};

const userContext = createContext(defaultValue);

type Props = {
  children: React.ReactNode;
};

export const UserProvider: NextPage<Props> = ({ children }) => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const session = supabase.auth.session();

    setUser(session?.user ?? undefined);

    const { data: listener } = supabase.auth.onAuthStateChange(
      async (e, _session) => {
        setUser(_session?.user ?? undefined);
      },
    );

    return () => {
      listener?.unsubscribe();
    };
  }, []);

  const value = useMemo(() => ({
    signUp: (data: UserCredentials) => supabase.auth.signUp(data),
    signIn: (data: UserCredentials) => supabase.auth.signIn(data),
    signOut: () => supabase.auth.signOut(),
    user,
  }), [user]);

  return (
    <userContext.Provider value={value}>
      {children}
    </userContext.Provider>
  );
};

export const useUser = () => useContext(userContext);
