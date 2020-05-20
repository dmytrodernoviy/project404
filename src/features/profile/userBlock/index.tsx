import React from 'react';
import { Animated, Image } from 'react-native';
import styles from './styles';
import { useProfileAnimation } from '@src/features/profile/userBlock/hooks';
import { images } from '@src/constants';

interface TProps {
  scale: Animated.AnimatedInterpolation;
}

const UserBlock: React.FC<TProps> = ({ scale }) => {
  const {
    containerTranslate,
    userPhotoTranslate,
    opacity,
  } = useProfileAnimation();

  return (
    <Animated.View style={{ transform: [{ scale }] }}>
      <Animated.View
        style={{
          ...styles.container,
          transform: [{ translateY: containerTranslate }],
          opacity,
        }}>
        <Animated.View
          style={{
            ...styles.photo,
            transform: [{ translateX: userPhotoTranslate }],
            opacity,
          }}>
          <Image source={images.logo} style={styles.image} />
        </Animated.View>
      </Animated.View>
    </Animated.View>
  );
};

export default UserBlock;
