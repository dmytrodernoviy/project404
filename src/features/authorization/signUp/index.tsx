import React from 'react';
import {
  Image,
  SafeAreaView,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from 'react-native';
import styles from './signUp.styles';
import { images, screenNames } from '@src/constants';
import NextScreenButton from '@src/features/authorization/signIn/components/NextScreenButton';
import SignUpForm from '@src/features/authorization/signUp/components/signUpForm';
import { AnimatedPopup } from '@src/components';

const SignUpScreen: React.FC = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.dismissContainer}>
        <SafeAreaView style={styles.topSafeArea} />
        <SafeAreaView style={styles.container}>
          <View style={styles.content}>
            <View style={styles.topBlock} />
            <View style={styles.bottomBlock} />
          </View>
          <View style={styles.formContainer}>
            <KeyboardAvoidingView
              style={styles.keyboardAvoiding}
              behavior="padding">
              <Image
                source={images.logo}
                style={styles.logo}
                resizeMode="contain"
              />
              <SignUpForm />
            </KeyboardAvoidingView>
            <NextScreenButton routeName={screenNames.SignInScreen} />
          </View>
        </SafeAreaView>
        <AnimatedPopup />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignUpScreen;
