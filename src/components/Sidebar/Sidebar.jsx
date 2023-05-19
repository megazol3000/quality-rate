import React from 'react';
import styles from './Sidebar.module.css';
import SidebarFooter from './SidebarFooter/SidebarFooter';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <SidebarFooter />
    </div>
  )
}

export default Sidebar;