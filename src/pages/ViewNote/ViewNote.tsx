import React from 'react';
import styles from './ViewNote.module.scss';

export default function ViewNote() {
  return (
    <div className={styles.note}>
      <h1 className={styles.noteTitle}></h1>
      <div className={styles.noteDate}></div>
      <div className={styles.noteDescription}></div>
    </div>
  );
}
