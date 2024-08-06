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

const ViewNote: React.FC = () => {
  const notes = useAppSelector((state) => state.notes.notes);
  const { id } = useParams();
  const chosenNote = notes.find((note) => note.id === id);
  console.log('hey!!', chosenNote);
  const methods = useForm();
  const { register } = methods;
  return (
    <>
      <FormProvider {...methods}>
        <form id={id}>
          <input
            {...register('title')}
            defaultValue={chosenNote.title}
            type='text'
          />

          <input
            {...register('date')}
            defaultValue={dayjs(chosenNote.date).format('DD/MM/YYYY')}
            type='text'
          />

          <input
            {...register('description')}
            defaultValue={chosenNote.description}
            type='text'
          />
        </form>
      </FormProvider>
    </>
  );
};

export default ViewNote;

{
  /* <DatePicker
  control={methods.control}
  name='date'
  value={dayjs(chosenNote.date).format('DD/MM/YYYY')}
/> */
}
