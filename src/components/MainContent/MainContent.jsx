import React, { useEffect, useState } from 'react';
import styles from './MainContent.module.css';
import axios from 'axios';
import MainContentFooter from './MainContentFooter/MainContentFooter';
import CheckListItem from './CheckListItem/CheckListItem';

function MainContent() {

  const [indicatorTemplate, setIndicatorTemplate] = useState([]);
 /*  const [error, setError] = useState(''); */

  useEffect(() => {
    const apiUrl = 'http://192.168.1.29:8080/indicatorTemplate';
    axios.get(apiUrl).then((resp) => {
      setIndicatorTemplate(resp.data);
    });
  }, []);

  return (
    <div className={styles.mainContent}>
      {
        indicatorTemplate.map(item => <CheckListItem data={item} />)
      }
      <MainContentFooter />
    </div>
  )
}

export default MainContent;