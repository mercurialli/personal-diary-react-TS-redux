import React from 'react';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.mainTitle}>Dear Diary</h1>
    </div>
  );
};
