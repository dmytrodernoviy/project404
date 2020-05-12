import React, { useState } from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { ImageBackground, View } from 'react-native';
import { images } from '@src/constants';
import styles from './styles';
import { useBlurView } from '@src/features/authorization/hooks';
import { BlurView } from '@react-native-community/blur';
import SignInScreen from '@src/features/authorization/signIn';
import SignUpScreen from '@src/features/authorization/signUp';

const AuthScreen: React.FC = () => {
  const { nodeNumber, blurRef } = useBlurView();
  const [currentPage, setCurrentPage] = useState(0);
  const setPage = (): void => {
    const page = currentPage === 1 ? 0 : 1;
    setCurrentPage(page);
  };

  return (
    <View style={styles.container}>
      {nodeNumber && (
        <BlurView
          blurType={'dark'}
          style={styles.blurView}
          viewRef={nodeNumber}
        />
      )}
      <ImageBackground
        ref={blurRef}
        source={images.abstract_main_screen}
        style={styles.background}
      />
      <ScrollableTabView renderTabBar={false} page={currentPage} locked>
        <SignInScreen changeScreen={setPage} />
        <SignUpScreen changeScreen={setPage} />
      </ScrollableTabView>
    </View>
  );
};

export default AuthScreen;
