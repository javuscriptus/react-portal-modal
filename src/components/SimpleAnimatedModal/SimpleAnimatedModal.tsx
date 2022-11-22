import { memo } from 'react';

import useMount from '@/hooks/useMount';

import { Modal } from '..';

export interface SimpleAnimatedModalProps {
  isOpened: boolean;
  children: React.ReactElement | string;
  onClose: () => void;
}

export const SimpleAnimatedModal = memo(
  ({ children, isOpened = false, onClose }: SimpleAnimatedModalProps) => {
    const { isMounted } = useMount({ isOpened });

    if (!isMounted) {
      return null;
    }

    return (
      <Modal onClose={onClose} isOpened={isOpened}>
        {children}
      </Modal>
    );
  },
);

SimpleAnimatedModal.displayName = 'SimpleAnimatedModal';
