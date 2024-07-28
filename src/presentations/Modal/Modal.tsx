import React from 'react';
import { Button, Modal } from 'antd';
import { isOpenModal } from '@src/services/modalSlice';
import { useAppDispatch, useAppSelector } from '@src/services/hooks';
import { FormUI } from '../FormUi/Form/Form';
import './Modal.scss';

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
        onCancel={handleCancel}
        footer={[
          <Button type='primary' form='myForm' key='submit' htmlType='submit'>
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
