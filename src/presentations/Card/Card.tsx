import React from 'react';
import './Card.scss';
import imgPlus from '@src/components/assets/icons/plus.svg';
import { isOpenModal } from '@src/services/modalSlice';
import { useAppDispatch, useAppSelector } from '@src/services/hooks';
import { ModalUi } from '../Modal/Modal';
import { INote } from '../../components/types/types';

interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {
  createNote: boolean;
  id?: string;
  title?: string;
  date?: string;
  description?: string;
}

export function Card({
  id,
  title = 'интересный день',
  createNote,
  date,
  description,
  ...props
}: ICardProps) {
  const isOpen = useAppSelector((state) => state.modal.isOpen);
  const notes = useAppSelector((state) => state.notes.notes);
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
          <div className='card-title'>{title}</div>
        </div>
      )}
    </>
  );
}
