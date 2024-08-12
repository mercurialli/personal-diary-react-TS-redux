import { ConfigProvider, DatePickerProps } from 'antd';
import { DatePicker as AntDatePicker } from 'antd';
import { Control, Controller, useFormContext } from 'react-hook-form';
import dayjs from 'dayjs';
import React from 'react';
import ruRU from 'antd/es/locale/ru_RU';
import styles from './DatePicker.module.scss';
import classNames from 'classnames';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);
const dateFormat = 'DD.MM.YYYY';
const customFormat: DatePickerProps['format'] = (value) =>
  value.format(dateFormat);
interface RHFDatePicker {
  name: string;
  isReadOnly?: boolean;
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
          <>
            <AntDatePicker
              format={customFormat}
              status={fieldState.error ? 'error' : undefined}
              ref={field.ref}
              name={field.name}
              onBlur={field.onBlur}
              value={field.value ? dayjs(field.value, dateFormat) : null}
              className={classNames(styles.formDatepicker, {
                [styles.formDatepicker_readonly]: props.isReadOnly,
              })}
              onChange={(date) => {
                field.onChange(date ? dayjs(date).format('DD.MM.YYYY') : null);
              }}
              needConfirm
            />
            {fieldState.error ? (
              <div className={styles.error}>{fieldState.error?.message}</div>
            ) : null}
          </>
        )}
      />
    </ConfigProvider>
  );
}
