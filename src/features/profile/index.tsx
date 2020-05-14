import React, { useCallback, useRef, useState } from 'react';
import { View, Animated } from 'react-native';
import normalize from 'react-native-normalize';
import styles from './styles';
import UserBlock from '@src/features/profile/userBlock';
import ProfileOptions from '@src/features/profile/profileOptionsList';
import ConfirmPopup from '@src/components/ConfirmPopup';
import { NavigationService, SecureStorageService } from '@src/services';
import { navigationStackNames } from '@src/constants';
import { consoleLog } from '@src/utils';

const ProfileScreen: React.FC = () => {
  const [isLogoutPopupVisible, setIsLogoutPopupVisible] = useState(false);
  const headerScale = useRef(new Animated.Value(1)).current;

  const toggleLogoutPopup = useCallback(() => {
    setIsLogoutPopupVisible(!isLogoutPopupVisible);
  }, [isLogoutPopupVisible]);

  const onLogoutConfirm = useCallback(async () => {
    try {
      toggleLogoutPopup();
      await SecureStorageService.removeToken();
      NavigationService.navigate(navigationStackNames.AuthStack);
    } catch (e) {
      consoleLog('logoutError', e);
    }
  }, [toggleLogoutPopup]);

  const headerScaleValue = headerScale.interpolate({
    inputRange: [-normalize(100), 0],
    outputRange: [1.5, 1],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <UserBlock scale={headerScaleValue} />
      <ProfileOptions onLogout={toggleLogoutPopup} headerScale={headerScale} />
      <ConfirmPopup
        isVisible={isLogoutPopupVisible}
        onCanceled={toggleLogoutPopup}
        onAccept={onLogoutConfirm}
      />
    </View>
  );
};

export default ProfileScreen;
