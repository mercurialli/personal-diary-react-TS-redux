import {
  FormProvider,
  useForm,
  useFormContext,
  Control,
} from 'react-hook-form';
import { Input } from '../Input/Input';
import { DatePicker } from '../DatePicker/DatePicker';
import { TextField } from '../TextField/TextField';
import React from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@src/services/hooks';
import { addNote } from '@src/services/noteSlice';
import { INote } from '@src/components/types/types';
import { isOpenModal } from '@src/services/modalSlice';
import type { DatePickerProps } from 'antd';
import type { Dayjs } from 'dayjs';

export interface IForm {
  title: string;
  datepicker: string;
  description: string;
}

export const FormUI: React.FC = () => {
  const dispatch = useAppDispatch();
  const methods = useForm();
  const isOpen = useAppSelector((state) => state.modal.isOpen);

  const submit: SubmitHandler<INote> = (data) => {
    console.log(data);
    dispatch(addNote(data));
    dispatch(isOpenModal(false));
  };
  return (
    <FormProvider {...methods}>
      <form
        id='myForm'
        className='modal-form'
        onSubmit={methods.handleSubmit(submit)}
      >
        <div className='modal-form-container'>
          <Input />
          <DatePicker control={methods.control} name={'date'} />
        </div>
        <TextField />
      </form>
    </FormProvider>
  );
};
