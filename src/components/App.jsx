import React, { useState } from 'react';
import axios from 'axios';
import MainContent from './MainContent/MainContent';
import Sidebar from './Sidebar/Sidebar';
import styles from "./App.module.css";
import { useInitRequest } from '../hooks/useInitRequest';
import StartPage from './StartPage/StartPage';

function App() {
  const [dataFromOld, setDataFromOld] = useState(null);
  const [commonView, setCommonView] = useState('');
  const [checkListState, setCheckListState] = useState();
  const [checkListData, setCheckListData] = useState([]);
  const apiUrl = 'http://192.168.1.29:8080/checkList';

  const getData = (repId) => {
    axios.get(apiUrl + repId).then((resp) => {
      setCheckListData(resp.data);
      setCheckListState('exist');
    }).catch((err) => {
      if (err.response.data.code == 404) {
        setCheckListState('not_exist');
      }
    });
  };

  const toggleView = () => {
    setCommonView(true);
  };

  const createCheckList = () => {
    axios.post(apiUrl, {repairId: dataFromOld}).then((resp) => {
      setCheckListData(resp.data);
      setCheckListState('exist');
      setCommonView(true);
    });
  };

  useInitRequest(setDataFromOld, getData);  ``

  return (
    <div className={styles.app}>
      {!commonView ? (
        <StartPage 
          toggleView={toggleView} 
          checkListState={checkListState} 
          createCheckList={createCheckList} 
          checkListData={checkListData} 
        />
      ) : (
        <>
          <MainContent checkListData={checkListData}/>
          <Sidebar/>
          <div id='react-modals'></div>
        </>
      )}
    </div>
  )
}

export default App;