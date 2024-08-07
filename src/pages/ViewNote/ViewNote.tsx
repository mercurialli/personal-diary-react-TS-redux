import React from 'react';
import styles from './ViewNote.module.scss';
import { useSelector } from 'react-redux';
import { useAppSelector } from '@src/services/hooks';
import { INote } from '@src/components/types/types';
import { Card } from '@src/presentations/Card/Card';
import {
  FormProvider,
  useForm,
  useFormContext,
  Control,
} from 'react-hook-form';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import { DatePicker } from '@src/presentations/FormUi/DatePicker/DatePicker';
import { Input } from '@src/presentations/FormUi/Input/Input';
import { TextField } from '@src/presentations/FormUi/TextField/TextField';
import { Button } from 'antd';

const ViewNote: React.FC = () => {
  const notes = useAppSelector((state) => state.notes.notes);
  const { id } = useParams();
  const chosenNote = notes.find((note) => note.id === id);
  console.log('hey!!', chosenNote);
  const methods = useForm({
    defaultValues: {
      date: chosenNote.date,
      title: chosenNote.title,
      description: chosenNote.description,
    },
  });
  // const { control } = methods;
  return (
    <>
      <FormProvider {...methods}>
        <form id={id} className={styles.formViewNote}>
          <Input control={methods.control} name='title' />
          <DatePicker
            control={methods.control}
            name='date'
            value={dayjs(chosenNote.date).format('DD/MM/YYYY')}
          />
          <TextField control={methods.control} name='description' />{' '}
          <div className={styles.formsBtns}>
            <Button className={styles.btnFormBack} key='back' type='primary'>
              На главную
            </Button>

            <Button className={styles.btnFormEdit} key='edit'>
              Редактировать
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default ViewNote;
