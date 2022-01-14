import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { useUser } from 'providers/userProvider';

// TODO: add logic that goes back to a page you were at after logged in
export const useProtectPage = () => {
  const router = useRouter();
  const { user, loadedUser } = useUser();
  const [isLogined, setIsLogined] = useState(false);

  useEffect(() => {
    if (!loadedUser) {
      return;
    }

    if (!user) {
      router.push('/login_register');
    }

    setIsLogined(true);
  }, [user, router, loadedUser]);

  return { isLogined } as const;
};
