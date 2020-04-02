import React from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';
import { FormInput, SubmitButton } from '@src/components';
import { SignInValidationSchema } from '@src/utils';
import { useDispatch, useSelector } from 'react-redux';
import { DispatcherService } from '@src/services';
import SubscribeSwitch from '@src/features/authorization/signUp/components/SubscribeSwitch';
import styles from '@src/features/authorization/signUp/components/signUpForm/styles';
import { AuthSelectors } from '@src/redux/auth/selectors';
import { SignUpFormValuesType } from '@src/redux/auth/types';
import { Props } from '@src/features/authorization/signUp/components/signUpForm/types';

const SignUpForm: React.FC<Props> = ({ setPopupVisible }) => {
  const dispatch = useDispatch();
  const isSignInLoading = useSelector(AuthSelectors.isSignUpLoading);

  return (
    <Formik
      initialValues={{ email: '', password: '', subscribe: false }}
      validationSchema={SignInValidationSchema}
      onSubmit={(values: SignUpFormValuesType): void =>
        DispatcherService.signUp(dispatch, values, setPopupVisible)
      }>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        setFieldValue,
      }): Element => (
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
          <SubscribeSwitch handleSwitch={setFieldValue} />
          <SubmitButton
            label="Register"
            onPress={handleSubmit}
            isLoading={isSignInLoading}
            positionRight
          />
        </View>
      )}
    </Formik>
  );
};

export default SignUpForm;
