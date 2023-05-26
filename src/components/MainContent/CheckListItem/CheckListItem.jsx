import React from 'react';
import styles from './CheckListItem.module.scss';
import parse from 'html-react-parser';

function CheckListItem({ data }) {
  return (
    <div className={styles.checkListItem}>
      <strong className={styles.checkListItem__title}>{data.position}. {data.name}</strong>
      <div className={styles.checkListItemContentWrap}>
        <div className={styles.checkListItemContentLeft}>
          <div className={styles.checkListItem__desc}>
            { data.guidelines.text && parse(`${data.guidelines.text}`) } 
          </div>
          <a href={data.guidelines.link} target='_blank'>Методические указания</a>
        </div>
        <div className={styles.checkListItemContentRight}>
          <span>Комментарий</span>
          <input type="textarea" />
        </div>
      </div>
    </div>
  )
}

export default CheckListItem;