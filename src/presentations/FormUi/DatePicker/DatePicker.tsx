import { ConfigProvider } from 'antd';
import { DatePicker as AntDatePicker } from 'antd';
import { Control, Controller, useFormContext } from 'react-hook-form';
import dayjs from 'dayjs';
import React from 'react';
import ruRU from 'antd/es/locale/ru_RU';
import styles from './DatePicker.module.scss';
import classNames from 'classnames';
interface RHFDatePicker {
  control: Control<any>;
  name: string;
  value?: string;
  isReadOnly?: boolean;
  onChange?: any;
}

export function DatePicker(props: RHFDatePicker) {
  const { control } = useFormContext();
  return (
    <ConfigProvider locale={ruRU}>
      <Controller
        name={props.name}
        control={control}
        rules={{ required: true }}
        render={({ field, fieldState }) => (
          <AntDatePicker
            status={fieldState.error ? 'error' : undefined}
            ref={field.ref}
            name={field.name}
            onBlur={field.onBlur}
            value={field.value ? dayjs(field.value) : null}
            className={classNames(styles.formDatepicker, {
              [styles.formDatepicker_readonly]: props.isReadOnly,
            })}
            onChange={(date) => {
              field.onChange(date ? date.valueOf() : null);
            }}
            needConfirm
          />
        )}
      />
    </ConfigProvider>
  );
}
