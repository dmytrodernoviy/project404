import React from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';
import { FormInput, SubmitButton } from '@src/components';
import { SignUpValidationSchema } from '@src/utils';
import { useDispatch, useSelector } from 'react-redux';
import { DispatcherService } from '@src/services';
import SubscribeSwitch from '@src/features/authorization/signUp/components/SubscribeSwitch';
import styles from '@src/features/authorization/signUp/components/signUpForm/styles';
import { AuthSelectors } from '@src/redux/auth/selectors';
import { SignUpFormValuesType } from '@src/redux/auth/types';
import { Props } from '@src/features/authorization/signUp/components/signUpForm/types';
import { translationString } from '@src/translations';
import { CurrentLanguageSelector } from '@src/redux/translation/selectors';
import { translationsConstants } from '@src/constants';

const SignUpForm: React.FC<Props> = ({ setPopupVisible }) => {
  const dispatch = useDispatch();
  const isSignInLoading = useSelector(AuthSelectors.isSignUpLoading);
  const locale = useSelector(CurrentLanguageSelector.locale);

  return (
    <Formik
      initialValues={{ email: '', password: '', subscribe: false }}
      validationSchema={SignUpValidationSchema}
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
