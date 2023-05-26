import React from 'react';
import styles from './StartPage.module.scss';
import { format } from 'fecha';

function StartPage({toggleView, checkListState, createCheckList, checkListData}) {
  const createdDate = (checkListData && checkListData.createdAt) ? format(new Date(checkListData.createdAt), 'DD.MM.YYYY').toString() : '';
  const status = (checkListData && checkListData.status) ? checkListData.status : 0;
  const scoresRemove = (checkListData && checkListData.valueRemove) ? checkListData.valueRemove : 0;
  const scoresSum = (checkListData && checkListData.value) ? checkListData.value : 0; 
  const getStatus = () => (status === 1) ? 'На согласовании' : ((status === 2) ? 'Утвержден' : 'Черновик');

  return (
    <div className={styles.startPage}>
        { checkListState !== 'not_exist' ? (
            <div className={`${styles.startPageBlock} ${styles.startPageBlockCreated}`}>
              <div className={styles.startPageBlockContent}>
                <h2 className={`${styles.startPageBlockTitle} status${status}`}>Чек-лист оценки качества</h2>
                <div className={styles.startPageBlockState}>
                  <span>Создан: {createdDate}</span>
                  <span>Статус: {getStatus()}</span>
                </div>
                <div className={styles.startPageBlockScores}>
                  <span>Снято баллов: {scoresRemove}</span>
                  <strong>Сумма баллов: {scoresSum}</strong>
                </div>
              </div>
              <button className='btn btn_round' onClick={toggleView}></button>
            </div>
        ) : (
            <div className={styles.startPageBlock}>
              <h2 className={styles.startPageBlockTitle}>Чек-лист оценки качества не создан</h2>
              <button className={`${styles.startPageBlockBtn} btn btn_primary`} onClick={createCheckList}>Создать чек-лист</button>
            </div>
        ) }
    </div>
  )
}

export default StartPage