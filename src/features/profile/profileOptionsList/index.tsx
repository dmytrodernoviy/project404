import React from 'react';
import { Animated } from 'react-native';
import styles from './styles';
import ProfileOptionsItem from '@src/features/profile/profileOptionsItem';

interface TProps {
  onLogout: () => void;
  headerScale: Animated.Value;
}

export const ProfileOptions: React.FC<TProps> = ({ onLogout, headerScale }) => {
  const data = [{ type: 'langPicker' }, { type: 'logoutButton' }];

  return (
    <Animated.FlatList
      scrollEventThrottle={16}
      style={styles.container}
      contentContainerStyle={styles.content}
      keyExtractor={(item: { type: string }): string => `${item.type}`}
      data={data}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: headerScale } } }],
        { useNativeDriver: true },
      )}
      renderItem={({
        index,
        item,
      }: {
        index: number;
        item: { type: string };
      }): Element => {
        const logout = item.type === 'logoutButton' ? onLogout : (): void => {};

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
