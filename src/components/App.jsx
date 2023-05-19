import MainContent from './MainContent/MainContent';
import Sidebar from './Sidebar/Sidebar';
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <MainContent/>
      <Sidebar/>
    </div>
  )
}

export default App;