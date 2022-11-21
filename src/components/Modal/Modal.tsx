import { createPortal } from 'react-dom';
import { IoClose } from 'react-icons/io5';

import styles from './Modal.module.scss';

export interface ModalProps {
  children?: React.ReactElement | string;
  isOpen: boolean;
  onClose: () => void;
}

export function Modal({ children, isOpen, onClose }: ModalProps) {
  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div>
      <div className={styles.overlay}></div>
      <div className={styles.modal}>
        <div>
          <IoClose className={styles['close-button']} onClick={onClose} />
          <div className={styles['modal-content']}>{children}</div>
        </div>
      </div>
    </div>,
    document.getElementById('modal')!,
  );
}
