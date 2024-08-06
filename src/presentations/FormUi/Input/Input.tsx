import { Input as AntInput } from 'antd';
import React from 'react';
import { Control, Controller, useFormContext } from 'react-hook-form';
import { IForm } from '../Form/Form';
import styles from './Input.module.scss';

interface RHFInput {
  control: Control;
  name: string;
}

export function Input(props: RHFInput) {
  const { control } = useFormContext();
  return (
    <Controller
      name={props.name}
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
