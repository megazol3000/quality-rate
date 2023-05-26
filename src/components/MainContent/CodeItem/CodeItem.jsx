import React from 'react';
import styles from './CodeItem.module.scss';

function CodeItem({ classifierId, subText }) {
  return (
    <div className={styles.codeItem}>
        <strong className={styles.codeItem__title}>Шифр ТРС, КРС согласно классификатора ремонтных работ на скважинах:</strong>
        <button className={styles.codeItem__btn}>
            {
                classifierId ? classifierId : 'Выбрать'
            }
        </button>
        <span  className={styles.codeItem__subtitle}>{subText}</span>
    </div>
  )
}

export default CodeItem