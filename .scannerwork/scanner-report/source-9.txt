import { useRef, useEffect } from 'react';

export function useFocus() {
  const ref = useRef(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return ref;
}
