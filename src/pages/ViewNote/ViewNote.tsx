import React, { useState } from 'react';
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

// const EDIT_NOTE = {
//   IS_EDIT: true,
//   WATCH: true,
// };

const ViewNote: React.FC = () => {
  const notes = useAppSelector((state) => state.notes.notes);
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const chosenNote = notes.find((note) => note.id === id);
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState(chosenNote.title);
  const [date, setDate] = useState(chosenNote.date);
  const [description, setDescription] = useState(chosenNote.description);

  const handleEdit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsEdit(true);
    // EDIT_NOTE.WATCH = false;
    // EDIT_NOTE.IS_EDIT = true;
  };

  const handleSave = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsEdit(false);
    // EDIT_NOTE.IS_EDIT = false;
    // EDIT_NOTE.WATCH = true;
    // dispatch(editNote(chosenNote));
  };

  console.log('hey!!', chosenNote);
  const methods = useForm({
    defaultValues: {
      title: chosenNote.title,
      date: chosenNote.date,
      description: chosenNote.description,
    },
  });

  const submit: SubmitHandler<INote> = () => {
    dispatch(editNote({ title, date, description, id }));
  };

  return (
    <>
      <FormProvider {...methods}>
        <form
          id={id}
          className={styles.formViewNote}
          onSubmit={methods.handleSubmit(submit)}
        >
          <Input
            control={methods.control}
            name='title'
            value={chosenNote.title}
            isReadOnly={isEdit ? false : true}
            onChange={(e: {
              target: { value: React.SetStateAction<string> };
            }) => setTitle(e.target.value)}
          />
          <DatePicker
            control={methods.control}
            name='date'
            value={dayjs(chosenNote.date).format('DD/MM/YYYY')}
            isReadOnly={isEdit ? false : true}
            onChange={(e: {
              target: { value: React.SetStateAction<string> };
            }) => setDate(e.target.value)}
          />
          <TextField
            control={methods.control}
            name='description'
            value={chosenNote.description}
            isReadOnly={isEdit ? false : true}
            onChange={(e: {
              target: { value: React.SetStateAction<string> };
            }) => setDescription(e.target.value)}
          />
          <div className={styles.formsBtns}>
            {isEdit ? (
              <>
                <Button
                  className={styles.btnCancel}
                  key='cancel'
                  onClick={(e) => handleSave(e)}
                >
                  Отмена
                </Button>
                <Button
                  form={id}
                  key='submit'
                  htmlType='submit'
                  type='primary'
                  className={styles.btnSave}
                  onClick={(e) => handleSave(e)}
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
