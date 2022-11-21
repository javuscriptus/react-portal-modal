import cn from 'classnames';
import { createPortal } from 'react-dom';
import { IoClose } from 'react-icons/io5';

import styles from './Modal.module.scss';

export interface ModalProps {
  children?: React.ReactElement | string;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export function Modal({ children, isOpen, onClose, className = '' }: ModalProps) {
  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div>
      <div role="presentation" className={styles.overlay} onMouseUp={onClose}></div>
      <div className={cn(styles.modal, { [className]: className })}>
        <div>
          <IoClose className={styles['close-button']} onClick={onClose} />
          <div className={styles['modal-content']}>{children}</div>
        </div>
      </div>
    </div>,
    document.getElementById('modal')!,
  );
}
