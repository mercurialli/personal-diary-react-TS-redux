import { Input } from 'antd';
import React from 'react';
import { Control, Controller, useFormContext } from 'react-hook-form';
import styles from './TextField.module.scss';
import classNames from 'classnames';

const { TextArea } = Input;
interface RHFInput {
  control: Control<any>;
  name: string;
  value?: string;
  isReadOnly?: boolean;
  onChange?: any;
}

export function TextField(props: RHFInput) {
  const { control } = useFormContext();
  return (
    <Controller
      name={props.name}
      control={control}
      rules={{ required: true }}
      render={({ field }) => (
        <TextArea
          className={classNames(styles.formTextField, {
            [styles.formTextField_readonly]: props.isReadOnly,
          })}
          {...field}
          rows={10}
        />
      )}
    />
  );
}
