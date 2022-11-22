import cn from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { IoClose } from 'react-icons/io5';
import { CSSTransition } from 'react-transition-group';

import { ANIMATION_TIME } from '@/consts';

import styles from './Modal.module.scss';

export interface ModalProps {
  children?: React.ReactElement | string;
  onClose: () => void;
  className?: string;
  isOpened: boolean;
}

export function Modal({ children, onClose, className = '', isOpened }: ModalProps) {
  const overlayRef = useRef<any>();
  const contentRef = useRef<any>();

  const [animationIn, setAnimationIn] = useState(false);

  useEffect(() => {
    setAnimationIn(true);
  }, [isOpened]);

  const overlayAnimationClassNames = {
    enter: styles.overlayEnter,
    enterActive: styles.overlayEnterActive,
    exit: styles.overlayExit,
    exitActive: styles.overlayExitActive,
  };

  const contentAnimationClassNames = {
    enter: styles.contentEnter,
    enterActive: styles.contentEnterActive,
    exit: styles.contentExit,
    exitActive: styles.contentExitActive,
  };

  return createPortal(
    <div className={styles.container}>
      <CSSTransition
        in={animationIn}
        nodeRef={overlayRef}
        timeout={ANIMATION_TIME}
        classNames={overlayAnimationClassNames}
        mountOnEnter
        unmountOnExit
      >
        <div
          ref={overlayRef}
          role="presentation"
          className={styles.overlay}
          onMouseUp={onClose}
        ></div>
      </CSSTransition>
      <CSSTransition
        in={animationIn}
        nodeRef={contentRef}
        timeout={ANIMATION_TIME}
        classNames={contentAnimationClassNames}
        mountOnEnter
        unmountOnExit
      >
        <div ref={contentRef} className={cn(styles.content, { [className]: className })}>
          <div>
            <IoClose className={styles['close-button']} onClick={onClose} />
            <div className={styles['modal-content']}>{children}</div>
          </div>
        </div>
      </CSSTransition>
    </div>,
    document.getElementById('modal')!,
  );
}
