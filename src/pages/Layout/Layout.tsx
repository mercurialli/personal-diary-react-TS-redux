import { Footer } from '@src/presentations/Footer/Footer';
import { Header } from '@src/presentations/Header/Header';
import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';
import { Sidebar } from '@src/presentations/Sidebar/Sidebar';

const Layout: FC = () => {
  return (
    <>
      <Header />
      <div className={styles.mainContainer}>
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
