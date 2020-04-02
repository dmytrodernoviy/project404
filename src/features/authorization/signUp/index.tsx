import React, { useCallback, useState } from 'react';
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
import { NavigationService } from '@src/services';

const SignUpScreen: React.FC = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const onPopupButtonPress = useCallback(() => {
    setIsPopupVisible((prevState) => {
      NavigationService.navigate(screenNames.SignInScreen);
      return !prevState;
    });
  }, []);

  const setPopupVisible = useCallback(() => {
    setIsPopupVisible((prevState) => !prevState);
  }, []);

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
              <SignUpForm setPopupVisible={setPopupVisible} />
            </KeyboardAvoidingView>
            <NextScreenButton routeName={screenNames.SignInScreen} />
          </View>
        </SafeAreaView>
        <AnimatedPopup
          isVisible={isPopupVisible}
          onButtonPress={onPopupButtonPress}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignUpScreen;
