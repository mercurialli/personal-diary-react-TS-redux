import React from 'react';
import './Card.scss';
import imgPlus from '../components/assets/icons/plus.svg';
import { ModalUi } from './Modal/Modal';
import { isOpenModal } from '@src/services/modalSlice';
import { useAppDispatch, useAppSelector } from '@src/services/hooks';
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
  const isOpen = useAppSelector((state) => state.modal.isOpen);

  const dispatch = useAppDispatch();

  return (
    <>
      {createNote ? (
        <div className='add-card'>
          <button
            className='addNotes'
            onClick={() => dispatch(isOpenModal(true))}
          >
            <img src={imgPlus} alt='plus icon' />
          </button>
          {isOpen && <ModalUi />}
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
