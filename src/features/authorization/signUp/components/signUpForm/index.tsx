import React from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';
import { FormInput, SubmitButton } from '@src/components';
import { SignUpValidationSchema } from '@src/utils';
import { useSelector } from 'react-redux';
import SubscribeSwitch from '@src/features/authorization/signUp/components/SubscribeSwitch';
import styles from '@src/features/authorization/signUp/components/signUpForm/styles';
import { translationString } from '@src/translations';
import { HelperSelector } from '@src/redux/helper/selectors';
import { translationsConstants } from '@src/constants';
import { useAnimationButtonAndRequest } from '@src/features/authorization/hooks';

const SignUpForm: React.FC = () => {
  const locale = useSelector(HelperSelector.locale);
  const {
    scaleButtonValue,
    scaleLoaderValue,
    onSubmit,
  } = useAnimationButtonAndRequest('signUp');

  return (
    <Formik
      initialValues={{ email: '', password: '', subscribe: false }}
      validationSchema={SignUpValidationSchema}
      onSubmit={onSubmit}>
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
          <SubscribeSwitch handleSwitch={setFieldValue} locale={locale} />
          <SubmitButton
            label={translationString(translationsConstants.register, locale)}
            onSubmitPress={handleSubmit}
            scaleButtonValue={scaleButtonValue}
            scaleLoaderValue={scaleLoaderValue}
            positionRight={true}
          />
        </View>
      )}
    </Formik>
  );
};

export default SignUpForm;
