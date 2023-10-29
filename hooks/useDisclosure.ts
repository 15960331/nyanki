import { useCallback, useState } from 'react';

export const useDisclosure = (defaultOpen?: boolean) => {
  const [isOpen, setIsOpen] = useState(defaultOpen ?? false);

  const open = useCallback(() => setIsOpen(true), []);

  const close = useCallback(() => setIsOpen(false), []);

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return {
    isOpen,
    open,
    close,
    toggle,
  };
};
