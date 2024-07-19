import React from 'react';
import './Card.scss';
import imgPlus from '../components/assets/icons/plus.svg';

interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  name?: string;
  createNote: boolean;
}

export function Card({
  id,
  name = 'интересный день',
  createNote,
  ...props
}: ICardProps) {
  return (
    <>
      {createNote ? (
        <div className='add-card'>
          <button className='addNotes'>
            <img src={imgPlus} alt='plus icon' />
          </button>
        </div>
      ) : (
        <div className='card-container'>
          <img className='card-image'></img>
          <div className='card-title'>{name}</div>
        </div>
      )}
    </>
  );
}
