import React from 'react';
import { Animated, FlatList } from 'react-native';
import styles from './styles';
import ProfileOptionsItem from '@src/features/profile/profileOptionsItem';

export const ProfileOptions: React.FC<{
  onLogout: () => void;
  headerScale: Animated.Value;
}> = ({ onLogout, headerScale }) => {
  const data = [{ type: 'langPicker' }, { type: 'logoutButton' }];

  return (
    <FlatList
      scrollEventThrottle={16}
      style={styles.container}
      contentContainerStyle={styles.content}
      keyExtractor={(item): string => `${item}`}
      data={data}
      onScroll={Animated.event([
        { nativeEvent: { contentOffset: { y: headerScale } } },
      ])}
      renderItem={({ index, item }) => {
        const logout = item.type === 'logoutButton' && onLogout;
        return (
          <ProfileOptionsItem
            index={index}
            type={item.type}
            key={item.type}
            onLogout={logout}
          />
        );
      }}
    />
  );
};

export default ProfileOptions;
