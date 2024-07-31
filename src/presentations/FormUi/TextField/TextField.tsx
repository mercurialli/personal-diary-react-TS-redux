import { Input } from 'antd';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { IForm } from '../Form/Form';
import styles from './TextField.module.scss';

const { TextArea } = Input;
export function TextField() {
  const { control } = useFormContext<IForm>();
  return (
    <Controller
      name='description'
      control={control}
      rules={{ required: true }}
      render={({ field }) => (
        <TextArea className={styles.formTextfield} {...field} />
      )}
    />
  );
}
