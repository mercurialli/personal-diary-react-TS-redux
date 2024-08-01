import React from 'react';
import { Button, Modal } from 'antd';
import { isOpenModal } from '@src/services/modalSlice';
import { useAppDispatch, useAppSelector } from '@src/services/hooks';
import { FormUI } from '../FormUi/Form/Form';
import styles from './Modal.module.scss';

export const ModalUi: React.FC = () => {
  const isOpen = useAppSelector((state) => state.modal.isOpen);
  const dispatch = useAppDispatch();
  const handleCancel = () => {
    dispatch(isOpenModal(false));
  };
  const title = (
    <h3 className={styles.modalTitle}> Расскажите о своем дне :) </h3>
  );
  return (
    <>
      <Modal
        className={styles.modal}
        title={title}
        open={isOpen}
        onCancel={handleCancel}
        footer={[
          <Button
            className={styles.btnSave}
            type='primary'
            form='myForm'
            key='submit'
            htmlType='submit'
          >
            Сохранить
          </Button>,
          <Button
            className={styles.btnCancel}
            key='cancel'
            onClick={handleCancel}
          >
            Отмена
          </Button>,
        ]}
      >
        <FormUI />
      </Modal>
    </>
  );
};
