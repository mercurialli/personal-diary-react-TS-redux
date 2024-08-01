import { Input as AntInput } from 'antd';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { IForm } from '../Form/Form';
import styles from './Input.module.scss';

export function Input() {
  const { control } = useFormContext<IForm>();
  return (
    <Controller
      name='title'
      control={control}
      rules={{ required: true }}
      render={({ field }) => (
        <AntInput
          className={styles.formInput}
          {...field}
          placeholder='Название'
        />
      )}
    />
  );
}
