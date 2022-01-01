import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { useUser } from 'providers';

// TODO: add logic that goes back to a page you were at after logged in
export const useProtectPage = () => {
  const router = useRouter();
  const { user } = useUser();
  const [isLogined, setIsLogined] = useState(false);

  useEffect(() => {
    if (!user) {
      router.push('/login');
      setIsLogined(false);
      return;
    }

    setIsLogined(true);
  }, [user, router]);

  return { isLogined } as const;
};
