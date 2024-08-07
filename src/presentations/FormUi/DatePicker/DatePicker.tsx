import { ConfigProvider } from 'antd';
import { DatePicker as AntDatePicker } from 'antd';
import { Control, Controller } from 'react-hook-form';
import dayjs from 'dayjs';
import React from 'react';
import ruRU from 'antd/es/locale/ru_RU';
import styles from './DatePicker.module.scss';
interface RHFDatePicker {
  control: Control<any>;
  name: string;
  value: string;
}

export function DatePicker(props: RHFDatePicker) {
  return (
    <ConfigProvider locale={ruRU}>
      <Controller
        name={props.name}
        control={props.control}
        rules={{ required: true }}
        render={({ field, fieldState }) => (
          <AntDatePicker
            status={fieldState.error ? 'error' : undefined}
            ref={field.ref}
            name={field.name}
            onBlur={field.onBlur}
            value={field.value ? dayjs(field.value) : null}
            className={styles.formDatepicker}
            popupClassName={styles.antCalender}
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
