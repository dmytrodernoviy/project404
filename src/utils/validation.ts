import * as Yup from 'yup';

export const SignInValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(8, 'To short').required('Required'),
});
