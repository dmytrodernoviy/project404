import * as Yup from 'yup';

export const SignInValidationSchema = Yup.object().shape({
  email: Yup.string().email('invalid_email').required('required_field'),
  password: Yup.string().min(8, 'short_password').required('required_field'),
});

export const SignUpValidationSchema = Yup.object().shape({
  email: Yup.string().email('invalid_email').required('required_field'),
  password: Yup.string().min(8, 'short_password').required('required_field'),
});
