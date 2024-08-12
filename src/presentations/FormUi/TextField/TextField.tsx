import { Input } from 'antd';
import React from 'react';
import { Control, Controller, useFormContext } from 'react-hook-form';
import styles from './TextField.module.scss';
import classNames from 'classnames';

const { TextArea } = Input;
interface RHFInput {
  name: string;
  isReadOnly?: boolean;
}

export function TextField(props: RHFInput) {
  const { control } = useFormContext();
  return (
    <Controller
      name={props.name}
      control={control}
      rules={{ required: true }}
      render={({ field, fieldState }) => (
        <>
          <TextArea
            status={fieldState.error ? 'error' : undefined}
            className={classNames(styles.formTextField, {
              [styles.formTextField_readonly]: props.isReadOnly,
            })}
            {...field}
            rows={10}
          />

          <div className={styles.error}>{fieldState.error?.message}</div>
        </>
      )}
    />
  );
}
