import React from 'react';
import styles from './ModalOverlay.module.scss';

function ModalOverlay({onClose}) {
  return (
    <div onClick={onClose} className={styles.modalOverlay}></div>
  )
}

export default ModalOverlay