import styles from './MainContent.module.css';
import MainContentFooter from './MainContentFooter/MainContentFooter';
import CheckListItem from './CheckListItem/CheckListItem';
import CodeItem from './CodeItem/CodeItem';

function MainContent({checkListData}) {
  console.log(11,checkListData);
  return (
    <>
      <div className={styles.mainContent}>
        <CodeItem classifierId={checkListData.classifierId} subText={checkListData.classifierSubtext} />
        {
          checkListData.indicators.map(item => <CheckListItem data={item} key={item.id} />) 
        }
      </div>
      <MainContentFooter />
    </>
  )
}

export default MainContent;