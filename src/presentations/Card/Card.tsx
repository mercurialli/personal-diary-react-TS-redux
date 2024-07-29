import React, { useCallback } from 'react';
import './Card.scss';
import imgPlus from '@src/components/assets/icons/plus.svg';
import { isOpenModal } from '@src/services/modalSlice';
import { useAppDispatch, useAppSelector } from '@src/services/hooks';
import { ModalUi } from '../Modal/Modal';
import { DeleteOutlined } from '@ant-design/icons';
import { removeNote } from '@src/services/noteSlice';

interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {
  createNote: boolean;
  title?: string;
  date?: string;
  description?: string;
  id?: string;
}

export function Card({
  title = 'интересный день',
  createNote,
  date,
  description,
  id = '',
  ...props
}: ICardProps) {
  const isOpen = useAppSelector((state) => state.modal.isOpen);
  const notes = useAppSelector((state) => state.notes.notes);
  const dispatch = useAppDispatch();

  const deleteNote = (id: string) => {
    dispatch(removeNote(id));
  };

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
          <button className='btn-delete' onClick={() => deleteNote(id)}>
            <DeleteOutlined />
          </button>
          <img className='card-image'></img>
          <div className='card-title'>{title}</div>
        </div>
      )}
    </>
  );
}
