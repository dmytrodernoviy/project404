import React, { useEffect, useRef, useState } from 'react';
import { Animated, Modal } from 'react-native';
import styles from './styles';

const FirstLoadLayout: React.FC = () => {
  const opacity = useRef(new Animated.Value(1)).current;
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      setIsVisible(!isVisible);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Modal transparent={true} visible={isVisible}>
      <Animated.View
        style={{
          ...styles.container,
          opacity,
        }}
      />
    </Modal>
  );
};

export default FirstLoadLayout;
