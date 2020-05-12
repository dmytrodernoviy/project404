import React from 'react';
import {
  Image,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from 'react-native';
import styles from './signUp.styles';
import { images } from '@src/constants';
import SignUpForm from '@src/features/authorization/signUp/components/signUpForm';
import { AnimatedPopup } from '@src/components';

const SignUpScreen: React.FC<{ changeScreen: () => void }> = ({
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
              <SignUpForm changeScreen={changeScreen} />
            </KeyboardAvoidingView>
          </View>
        </View>
        <AnimatedPopup onPress={changeScreen} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignUpScreen;
