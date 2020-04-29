import React from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';
import { FormInput, SubmitButton } from '@src/components';
import styles from '@src/features/authorization/signIn/components/SignInForm/styles';
import { SignInValidationSchema } from '@src/utils';
import { useSelector } from 'react-redux';
import { DispatcherService } from '@src/services';
import { AuthSelectors } from '@src/redux/auth/selectors';
import { translationString } from '@src/translations';
import { translationsConstants } from '@src/constants';
import { HelperSelector } from '@src/redux/helper/selectors';

const SignInForm: React.FC = () => {
  const isSignInLoading = useSelector(AuthSelectors.isSignInLoading);
  const locale = useSelector(HelperSelector.locale);

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={SignInValidationSchema}
      onSubmit={(values): void => DispatcherService.signIn(values)}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }): Element => (
        <View style={styles.container}>
          <View>
            <FormInput
              type="email"
              placeholder={translationString(
                translationsConstants.email,
                locale,
              )}
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              error={translationString(errors.email, locale)}
              touched={touched.email}
            />
            <FormInput
              type="password"
              placeholder={translationString(
                translationsConstants.password,
                locale,
              )}
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              error={translationString(errors.password, locale)}
              touched={touched.password}
            />
          </View>
          <SubmitButton
            label={translationString(translationsConstants.login, locale)}
            onPress={handleSubmit}
            isLoading={isSignInLoading}
          />
        </View>
      )}
    </Formik>
  );
};

export default SignInForm;
