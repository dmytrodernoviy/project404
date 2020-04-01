import React from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';
import { FormInput, SubmitButton } from '@src/components';
import styles from '@src/features/authorization/signIn/components/SignInForm/styles';
import { SignInValidationSchema } from '@src/utils';
import { useDispatch, useSelector } from 'react-redux';
import { DispatcherService } from '@src/services';

const SignInForm: React.FC = () => {
  const dispatch = useDispatch();
  const isSignInLoading = useSelector((state) => state.auth.isSignInLoading);

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={SignInValidationSchema}
      onSubmit={(values): void => DispatcherService.signIn(dispatch, values)}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View style={styles.container}>
          <View>
            <FormInput
              type="email"
              placeholder="Email"
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              error={errors.email}
              touched={touched.email}
            />
            <FormInput
              type="password"
              placeholder="Password"
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              error={errors.password}
              touched={touched.password}
            />
          </View>
          <SubmitButton
            label="Login"
            onPress={handleSubmit}
            isLoading={isSignInLoading}
          />
        </View>
      )}
    </Formik>
  );
};

export default SignInForm;
