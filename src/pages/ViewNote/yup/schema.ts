import * as yup from 'yup';

const regExpTitle = new RegExp(/^(?:(?!.*title)(?!.*[$!#]).)*$/);
const schema = yup.object().shape({
  title: yup
    .string()
    .trim()
    .required('Обязательное поле')
    .max(30, 'Превышено максимальное количество символов: 30')
    .matches(regExpTitle, 'Использованы недопустимые символы: !, №, $'),

  date: yup.string(),
  // .test({
  //   name: 'date',
  //   message: '${path} must be less than ${max} characters',
  // test:
  // }),

  description: yup
    .string()
    .trim()
    .required('Обязательное поле')
    .max(150, 'Превышено максимальное количество символов: 150'),
});

export default schema;
