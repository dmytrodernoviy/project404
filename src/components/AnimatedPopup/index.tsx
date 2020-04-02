import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import normalize from 'react-native-normalize';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '@src/components/AnimatedPopup/styles';
import { colors } from '@src/constants';
import { Props } from '@src/components/AnimatedPopup/types';

const AnimatedPopup: React.FC<Props> = ({ isVisible, onButtonPress }) => {
  return (
    <Dialog visible={isVisible} dialogStyle={styles.container}>
      <DialogContent style={styles.content}>
        <Icon
          name={'md-done-all'}
          size={normalize(100, 'height')}
          color={colors.authAdd}
          style={styles.iconSuccess}
        />
        <Text style={styles.title}>Register Success</Text>
        <TouchableOpacity style={styles.button} onPress={onButtonPress}>
          <Icon
            name={'ios-arrow-round-back'}
            size={normalize(30, 'height')}
            color={colors.authMain}
          />
          <Text style={styles.buttonTitle}>To Login</Text>
        </TouchableOpacity>
      </DialogContent>
    </Dialog>
  );
};

export default AnimatedPopup;
