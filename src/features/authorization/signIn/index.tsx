import React from 'react';
import {
  Image,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from 'react-native';
import styles from './signIn.styles';
import { images } from '@src/constants';
import SignInForm from '@src/features/authorization/signIn/components/SignInForm';
import SocialButton from '@src/features/authorization/socialButton';

const SignInScreen: React.FC<{ changeScreen: () => void }> = ({
  changeScreen,
}) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.dismissContainer}>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <KeyboardAvoidingView
              style={styles.keyboardAvoiding}
              behavior="padding">
              <Image
                source={images.logo}
                style={styles.logo}
                resizeMode="contain"
              />
              <SignInForm changeScreen={changeScreen} />
            </KeyboardAvoidingView>
            <SocialButton />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignInScreen;
