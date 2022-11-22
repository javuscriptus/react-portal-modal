import { useEffect, useState } from 'react';

import { ANIMATION_TIME } from '@/consts';

const useMount = ({ isOpened }: { isOpened: boolean }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isOpened && !isMounted) {
      setIsMounted(true);
    } else if (!isOpened && isMounted) {
      setTimeout(() => {
        setIsMounted(false);
      }, ANIMATION_TIME);
    }
  }, [isOpened]);

  return { isMounted };
};

export default useMount;
