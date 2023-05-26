import React from 'react';
import ReactDOM from "react-dom";
import styles from './Modal.module.scss';
import ModalOverlay from './ModalOverlay/ModalOverlay';

function Modal({onClose}) {
    const modalRoot = document.getElementById("react-modals");

    const ECK_KEYCODE = 27;
    React.useEffect(() => {
        const close = (e) => {
          if (e.keyCode === ECK_KEYCODE){
            onClose();
          }
        };
        window.addEventListener('keydown', close);
        return () => window.removeEventListener('keydown', close);
    }, [onClose]);

    return ReactDOM.createPortal(
        (
            <>
                <div className={styles.modal}>
                    <div className={styles.modalHeader}>
                        <strong className={styles.modalTitle}>Выбрать шифр</strong>
                        <button className={styles.modalCLoseBtn} onClick={onClose}></button>
                    </div>
                </div>
                <ModalOverlay onClose={onClose}/>
            </>
        ), 
        modalRoot
    );
}

export default Modal