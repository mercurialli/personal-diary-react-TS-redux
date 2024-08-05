import React from 'react';
import { Card } from '@src/presentations/Card/Card';
import { useAppDispatch, useAppSelector } from '@src/services/hooks';
import { isOpenModal } from '@src/services/modalSlice';
import { NavLink } from 'react-router-dom';
import styles from './HomePage.module.scss';

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const notes = useAppSelector((state) => state.notes.notes);
  return (
    <div className={styles.mainCardContainer}>
      <Card createNote={true} onClick={() => dispatch(isOpenModal(true))} />
      {notes
        ? notes.map((note) => {
            return (
              <Card
                key={note.id}
                title={note.title}
                date={note.date}
                description={note.description}
                id={note.id}
                createNote={false}
              />
            );
          })
        : ''}
    </div>
  );
};

export default HomePage;
