import React from 'react';
import styles from './CodeItem.module.scss';
import Modal from '../../Modal/Modal';
import { TreeSelect } from 'antd';
import axios from 'axios';

/* const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: 'leaf1',
          },
          {
            value: 'leaf2',
            title: 'leaf2',
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        children: [
          {
            value: 'leaf3',
            title: (
              <b
                style={{
                  color: '#08c',
                }}
              >
                leaf3
              </b>
            ),
          },
        ],
      },
    ],
  },
]; */

function CodeItem({ classifierId, subText }) {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [value, setValue] = React.useState();
  const [treeData, setTreeData] = React.useState([]);
  const onChange = (newValue) => {
    setValue(newValue);
  };
  /* const openCipherModal = () => {
    setModalVisible(!modalVisible);
  }; */

  axios.get('http://192.168.0.23:8083/tmrsEvolve/API/getClassifierWork?login=com2@intas-company.com&password=6TEtkYq4zp').then((resp) => {
    console.log(resp.data.data);
  }).catch(() => {
    console.log('error');
  });

  return (
    <>
      <div className={styles.codeItem}>
          <strong className={styles.codeItem__title}>Шифр ТРС, КРС согласно классификатора ремонтных работ на скважинах:</strong>
          <TreeSelect
            showSearch
            /* style={{
              width: '100%',
            }} */
            className={styles.codeItem__inputTree}
            value={value}
            dropdownStyle={{
              maxHeight: 400,
              overflow: 'auto',
            }}
            placeholder="Выбрать"
            allowClear
            treeDefaultExpandAll
            onChange={onChange}
            treeData={treeData}
            listHeight={1222}
          />
          {/* <button className={styles.codeItem__btn} onClick={openCipherModal}>
              {
                  classifierId ? classifierId : 'Выбрать'
              }
          </button> */}
          <span  className={styles.codeItem__subtitle}>{subText}</span>
      </div>
      {
        modalVisible && (
          <Modal 
            onClose={() => setModalVisible(false)} 
          />
        )
      }
    </>
  )
}

export default CodeItem