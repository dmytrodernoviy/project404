import React from 'react';
import { Animated } from 'react-native';
import { useProfileOptionsAnimation } from '@src/features/profile/profileOptionsItem/hooks';
import styles from './styles';
import LanguagePicker from '@src/features/profile/languagePicker';
import LogoutButton from '@src/features/profile/logoutButton';

interface TProps {
  index: number;
  type: string;
  onLogout: () => void;
}

const renderChildrenByType = (
  type: string,
  onPress: () => void,
): Element | undefined => {
  switch (type) {
    case 'langPicker':
      return <LanguagePicker />;
    case 'logoutButton':
      return <LogoutButton onPress={onPress} />;
    default:
      return;
  }
};

const ProfileOptionsItem: React.FC<TProps> = ({ index, type, onLogout }) => {
  const { itemTranslate, opacity } = useProfileOptionsAnimation({ index });
  return (
    <Animated.View
      style={{
        ...styles.container,
        transform: [{ translateX: itemTranslate }],
        opacity,
      }}>
      {renderChildrenByType(type, onLogout)}
    </Animated.View>
  );
};

export default ProfileOptionsItem;
