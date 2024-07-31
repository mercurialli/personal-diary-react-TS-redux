import React, { useRef } from 'react';
import './Application.scss';
import { Card } from '@src/presentations/Card/Card';
import { useAppDispatch, useAppSelector } from '@src/services/hooks';
import { isOpenModal } from '@src/services/modalSlice';
import { Sidebar } from '@src/presentations/Sidebar/Sidebar';
import { Header } from '@src/presentations/Header/Header';

const Application: React.FC = () => {
  const dispatch = useAppDispatch();
  const notes = useAppSelector((state) => state.notes.notes);

  return (
    <div id='container'>
      <Header />
      <div className='main-container'>
        <Sidebar />
        <div className='main-card-container'>
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
      </div>
    </div>
  );
};

export default Application;
