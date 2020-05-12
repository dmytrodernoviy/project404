import React from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';
import { FormInput, SubmitButton } from '@src/components';
import styles from '@src/features/authorization/signIn/components/SignInForm/styles';
import { SignInValidationSchema } from '@src/utils';
import { useSelector } from 'react-redux';
import { translationString } from '@src/translations';
import { translationsConstants } from '@src/constants';
import { HelperSelector } from '@src/redux/helper/selectors';
import { useAnimationButtonAndRequest } from '@src/features/authorization/hooks';
import NextScreenButton from '@src/features/authorization/signIn/components/NextScreenButton';

const SignInForm: React.FC<{ changeScreen: () => void }> = ({
  changeScreen,
}) => {
  const locale = useSelector(HelperSelector.locale);
  const {
    scaleButtonValue,
    scaleLoaderValue,
    onSubmit,
  } = useAnimationButtonAndRequest('signIn');

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={SignInValidationSchema}
      onSubmit={onSubmit}>
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
            label={translationString(translationsConstants.sign_in, locale)}
            onSubmitPress={handleSubmit}
            scaleButtonValue={scaleButtonValue}
            scaleLoaderValue={scaleLoaderValue}
          />
          <NextScreenButton onPress={changeScreen} />
        </View>
      )}
    </Formik>
  );
};

export default SignInForm;
