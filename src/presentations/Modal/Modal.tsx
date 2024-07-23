import React from 'react';
import { Modal } from 'antd';
import { isOpenModal } from '@src/services/modalSlice';
import { useAppDispatch, useAppSelector } from '@src/services/hooks';

export const ModalUi: React.FC = () => {
  const isOpen = useAppSelector((state) => state.modal.isOpen);
  const dispatch = useAppDispatch();

  const handleCancel = () => {
    dispatch(isOpenModal(false));
  };
  const handleOk = () => {
    dispatch(isOpenModal(false));
  };

  return (
    <>
      <Modal
        title='Basic Modal'
        open={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
