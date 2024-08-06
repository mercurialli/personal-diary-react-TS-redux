import { Input } from 'antd';
import React from 'react';
import { Control, Controller, useFormContext } from 'react-hook-form';
import { IForm } from '../Form/Form';
import styles from './TextField.module.scss';

const { TextArea } = Input;
interface RHFInput {
  control: Control;
  name: string;
}

export function TextField(props: RHFInput) {
  const { control } = useFormContext();
  return (
    <Controller
      name={props.name}
      control={control}
      rules={{ required: true }}
      render={({ field }) => (
        <TextArea className={styles.formTextfield} {...field} rows={10} />
      )}
    />
  );
}
