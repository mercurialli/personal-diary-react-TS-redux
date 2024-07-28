import { ConfigProvider } from 'antd';
import { DatePicker as AntDatePicker } from 'antd';
import { Control, Controller, useFormContext } from 'react-hook-form';
import type { DatePickerProps } from 'antd';
import type { Dayjs } from 'dayjs';
import React from 'react';
import { IForm } from '../Form/Form';
import ruRU from 'antd/es/locale/ru_RU';

const onChange: DatePickerProps<Dayjs[]>['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};

export function DatePicker() {
  const { control } = useFormContext<IForm>();
  return (
    <ConfigProvider locale={ruRU}>
      <Controller
        name='datepicker'
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange } }) => (
          <AntDatePicker
            className='form-datepicker'
            onChange={onChange}
            needConfirm
          />
        )}
      />
    </ConfigProvider>
  );
}
