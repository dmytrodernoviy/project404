import React, { useState } from 'react';
import { Switch, Text, View } from 'react-native';
import styles from '@src/features/authorization/signUp/components/SubscribeSwitch/styles';
import { Props } from './types';
import { colors } from '@src/constants';

const SubscribeSwitch: React.FC<Props> = ({ handleSwitch }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = (): void => {
    setIsEnabled((prevState) => {
      handleSwitch('subscribe', !prevState);
      return !prevState;
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Subscribe</Text>
      <Switch
        value={isEnabled}
        onValueChange={toggleSwitch}
        trackColor={{ true: colors.authMain, false: 'default' }}
      />
    </View>
  );
};

export default SubscribeSwitch;
