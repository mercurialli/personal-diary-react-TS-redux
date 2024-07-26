import React from 'react';
import './Application.scss';
import { Sidebar } from '@src/presentations/Sidebar/Sidebar';
import { Card } from '@src/presentations/Card/Card';
import { useAppSelector } from '@src/services/hooks';

const Application: React.FC = () => {
  // const dispatch = useDispatch();
  const notes = useAppSelector((state) => state.notes.notes);
  return (
    <>
      <div id='container'>
        <div className='header'>
          <h1 className='main-title'>Dear Diary</h1>
        </div>
        <div className='main-container'>
          <Sidebar />
          <div className='main-card-container'>
            <Card createNote={true} />
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
        <div className='footer'></div>
      </div>
    </>
  );
};

export default Application;
