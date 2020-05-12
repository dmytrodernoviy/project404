import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import normalize from 'react-native-normalize';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '@src/components/AnimatedPopup/styles';
import { colors } from '@src/constants';
import { useSelector } from 'react-redux';
import { AuthSelectors } from '@src/redux/auth/selectors';
import { DispatcherService } from '@src/services';

const AnimatedPopup: React.FC<{ onPress: () => void }> = ({ onPress }) => {
  const isVisible = useSelector(AuthSelectors.isAfterRegisterPopupVisible);

  const onButtonPress = (): void => {
    DispatcherService.toggleAfterRegisterPopup(false);
    onPress();
  };

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
