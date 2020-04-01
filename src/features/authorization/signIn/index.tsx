import React from 'react';
import {
  Image,
  SafeAreaView,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from 'react-native';
import styles from './signIn.styles';
import { images } from '@src/constants';
import NextScreenButton from '@src/features/authorization/signIn/components/NextScreenButton';
import SignInForm from '@src/features/authorization/signIn/components/SignInForm';

const SignInScreen: React.FC = () => {
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
              <SignInForm />
            </KeyboardAvoidingView>
            <NextScreenButton />
          </View>
        </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignInScreen;
