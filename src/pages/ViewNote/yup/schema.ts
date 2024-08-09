import * as yup from 'yup';

const regExpTitle = new RegExp(/^(?:(?!.*title)(?!.*[$!#]).)*$/);
const schema = yup.object().shape({
  title: yup
    .string()
    .trim()
    .required('Обязательное поле')
    .max(30, 'Превышено максимальное количество символов: 30')
    .matches(regExpTitle, 'Неверный формат почты'),

  date: yup.string(),

  description: yup
    .string()
    .trim()
    .required('Обязательное поле')
    .max(150, 'Превышено максимальное количество символов: 150'),
});

export default schema;
