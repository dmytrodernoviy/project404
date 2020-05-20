import React, { useState } from 'react';
import { Switch, Text, View } from 'react-native';
import styles from '@src/features/authorization/signUp/components/SubscribeSwitch/styles';
import { colors, translationsConstants } from '@src/constants';
import { translationString } from '@src/translations';

interface TProps {
  handleSwitch: (name: string, value: boolean) => void;
  locale: string;
}

const SubscribeSwitch: React.FC<TProps> = ({ handleSwitch, locale }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = (): void => {
    setIsEnabled((prevState) => {
      handleSwitch('subscribe', !prevState);
      return !prevState;
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {translationString(translationsConstants.subscribe, locale)}
      </Text>
      <Switch
        value={isEnabled}
        onValueChange={toggleSwitch}
        trackColor={{ true: colors.authMain, false: 'default' }}
      />
    </View>
  );
};

export default SubscribeSwitch;
