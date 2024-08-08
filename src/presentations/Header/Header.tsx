import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <Link to={'/'} className={styles.link}>
          <h1 className={styles.mainTitle}>Dear Diary</h1>
        </Link>
      </div>
    </div>
  );
};
