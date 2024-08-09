import { Input as AntInput } from 'antd';
import React from 'react';
import { Control, Controller, useFormContext } from 'react-hook-form';
import { IForm } from '../Form/Form';
import styles from './Input.module.scss';
import classNames from 'classnames';

interface RHFInput {
  name: string;
  isReadOnly?: boolean;
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
          className={classNames(styles.formInput, {
            [styles.formInput_readonly]: props.isReadOnly,
          })}
          {...field}
          placeholder='Название'
        />
      )}
    />
  );
}
