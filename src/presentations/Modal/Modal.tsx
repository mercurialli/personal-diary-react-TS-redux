import React from 'react';
import { Button, Modal } from 'antd';
import { isOpenModal } from '@src/services/modalSlice';
import { useAppDispatch, useAppSelector } from '@src/services/hooks';
import { FormUI } from '../FormUi/Form/Form';
import { addNote, removeNote } from '@src/services/noteSlice';
import './Modal.scss';
import { INote } from '@src/components/types/types';

export const ModalUi: React.FC = () => {
  const isOpen = useAppSelector((state) => state.modal.isOpen);
  const dispatch = useAppDispatch();

  const handleCancel = () => {
    dispatch(isOpenModal(false));
  };

  return (
    <>
      <Modal
        className='modal'
        title='Расскажи о своем дне'
        open={isOpen}
        footer={[
          <Button form='myForm' key='submit' htmlType='submit'>
            Сохранить
          </Button>,
          <Button key='cancel' onClick={handleCancel}>
            Отмена
          </Button>,
        ]}
      >
        <FormUI />
      </Modal>
    </>
  );
};
