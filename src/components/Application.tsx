import React from 'react';
import './Application.scss';
import { Card } from '@src/presentations/Card';
import { Sidebar } from '@src/presentations/Sidebar/Sidebar';

const day = [
  {
    name: 'day 1 gdfge rgegerge',
    id: '8',
  },
  {
    name: 'day 2',
    id: '35',
  },
  {
    name: 'day 3',
    id: '36',
  },
  {
    name: 'day 4',
    id: '37',
  },
  {
    name: 'day 5',
    id: '38',
  },
  {
    name: 'day 6',
    id: '39',
  },
  {
    name: 'day 7',
    id: '40',
  },
];

const Application: React.FC = () => {
  // const dispatch = useDispatch();
  return (
    <>
      <div id='container'>
        <div className='header'>
          <h1 className='main-title'>Dear Diary</h1>
        </div>

        <div className='main-container'>
          <Sidebar />
          <div className='main-card-container'>
            <Card createNote={true} id={''} />
            {day.map((note) => {
              return (
                <Card
                  key={note.id}
                  name={note.name}
                  id={note.id}
                  createNote={false}
                />
              );
            })}
          </div>
        </div>
        <div className='footer'></div>
      </div>
    </>
  );
};

export default Application;
