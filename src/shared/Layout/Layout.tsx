import React from 'react';
import styles from './layout.module.scss';
import {Header} from  "../../components";
import {Outlet} from "react-router-dom";


export function Layout() {
  return (
    <div className={styles.layout}>
      <Header/>
      <main>
          <Outlet/>
      </main>
    </div>
  );
}
