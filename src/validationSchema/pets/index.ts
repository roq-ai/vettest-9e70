import * as yup from 'yup';

export const petValidationSchema = yup.object().shape({
  name: yup.string().required(),
  species: yup.string().required(),
  breed: yup.string().required(),
  age: yup.number().integer().required(),
  weight: yup.number().integer().required(),
  customer_id: yup.string().nullable().required(),
});
