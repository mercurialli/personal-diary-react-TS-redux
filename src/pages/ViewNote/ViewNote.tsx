import React, { useEffect, useState } from 'react';
import styles from './ViewNote.module.scss';
import { useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from '@src/services/hooks';
import {
  FormProvider,
  useForm,
  useFormContext,
  Control,
  SubmitHandler,
} from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import { DatePicker } from '@src/presentations/FormUi/DatePicker/DatePicker';
import { Input } from '@src/presentations/FormUi/Input/Input';
import { TextField } from '@src/presentations/FormUi/TextField/TextField';
import { Button } from 'antd';
import { INote } from '@src/components/types/types';
import { editNote } from '@src/services/noteSlice';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './yup/schema';

const ViewNote: React.FC = () => {
  const notes = useAppSelector((state) => state.notes.notes);
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const chosenNote = notes.find((note) => note.id === id);
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsEdit(true);
  };

  function handleCancel(e: { preventDefault: () => void }) {
    e.preventDefault();
    dispatch(editNote(chosenNote));
    setIsEdit(false);
  }

  console.log('hey!!', chosenNote);

  const methods = useForm({
    defaultValues: {
      title: chosenNote.title,
      date: chosenNote.date,
      description: chosenNote.description,
    },
    resolver: yupResolver(schema),
  });

  const submit: SubmitHandler<INote> = (data) => {
    console.log(data);
    dispatch(editNote({ ...data, id }));
    setIsEdit(false);
  };

  return (
    <>
      <FormProvider {...methods}>
        <form
          id='editForm'
          className={styles.formViewNote}
          onSubmit={methods.handleSubmit(submit)}
        >
          <Input name='title' isReadOnly={isEdit ? false : true} />
          <DatePicker name='date' isReadOnly={isEdit ? false : true} />
          <TextField name='description' isReadOnly={isEdit ? false : true} />
          <div className={styles.formBtns}>
            {isEdit ? (
              <>
                <Button
                  className={styles.btnCancel}
                  key='cancel'
                  onClick={(e) => handleCancel(e)}
                >
                  Отмена
                </Button>
                <Button
                  form='editForm'
                  key='submit'
                  htmlType='submit'
                  type='primary'
                  className={styles.btnSave}
                >
                  Сохранить
                </Button>
              </>
            ) : (
              <>
                <Button className={styles.btnBack} key='back' type='primary'>
                  <Link to={'/'}>На главную</Link>
                </Button>
                <Button
                  className={styles.btnEdit}
                  key='edit'
                  onClick={(e) => handleEdit(e)}
                >
                  Редактировать
                </Button>
              </>
            )}
          </div>
        </form>
      </FormProvider>
    </>
  );
};
export default ViewNote;
