import dayjs from 'dayjs';
import * as yup from 'yup';

const regExpTitle = new RegExp(/^(?:(?!.*title)(?!.*[$!#]).)*$/);
const schema = yup.object().shape({
  title: yup
    .string()
    .trim()
    .required('Обязательное поле')
    .max(30, 'Превышено допустимое количество символов: 30')
    .matches(regExpTitle, 'Недопустимые значения поля: !, #, $, title'),

  date: yup
    .string()
    .required('Обязательное поле')
    .test({
      name: 'date',
      message: 'Дата не может быть в прошлом',
      test: function (value) {
        const currentDate = dayjs(Date.now()).format('DD.MM.YYYY');
        return value >= currentDate;
      },
    }),
  description: yup
    .string()
    .trim()
    .required('Обязательное поле')
    .max(150, 'Превышено допустимое количество символов: 150'),
});

export default schema;
