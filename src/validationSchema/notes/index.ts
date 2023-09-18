import * as yup from 'yup';

export const noteValidationSchema = yup.object().shape({
  content: yup.string().required(),
  timestamp: yup.date().required(),
  pet_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
