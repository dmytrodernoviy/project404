import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import normalize from 'react-native-normalize';
import { TouchableOpacity, View } from 'react-native';
import { colors } from '@src/constants';
import styles from './styles';

const ScreenHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Icon
          name={'ios-arrow-round-back'}
          size={normalize(40, 'height')}
          color={colors.activeTab}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon
          name={'ios-search'}
          size={normalize(20, 'height')}
          color={colors.activeTab}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ScreenHeader;
