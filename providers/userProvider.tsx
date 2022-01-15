import React, {
  createContext, useContext, useEffect, useMemo, useState,
} from 'react';
import { NextPage } from 'next';
import {
  ApiError, Provider, Session, User, UserCredentials,
} from '@supabase/supabase-js';

import { supabase } from 'utils/supabaseClient';

type UserProviderValue = {
  signUp: (data: UserCredentials) => Promise<{
    user: User | null;
    session: Session | null;
    error: ApiError | null;
  }>
  signIn: (data: UserCredentials) => Promise<{
    session: Session | null;
    user: User | null;
    provider?: Provider;
    url?: string | null;
    error: ApiError | null;
  }>
  signOut: () => Promise<{
    error: ApiError | null;
  }>
  user?: User;
  loadingUser: boolean;
};

const userContext = createContext({} as UserProviderValue);

type Props = {
  children: React.ReactNode;
};

export const UserProvider: NextPage<Props> = ({ children }) => {
  const [loadingUser, setLoadingUser] = useState(true);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const session = supabase.auth.session();

    setUser(session?.user ?? undefined);
    setLoadingUser(false);

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
    loadingUser,
  }), [user, loadingUser]);

  return (
    <userContext.Provider value={value}>
      {children}
    </userContext.Provider>
  );
};

export const useUser = () => useContext(userContext);
