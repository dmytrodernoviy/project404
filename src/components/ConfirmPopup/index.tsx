import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Dialog, {
  DialogContent,
  ScaleAnimation,
} from 'react-native-popup-dialog';
import normalize from 'react-native-normalize';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import { colors, translationsConstants } from '@src/constants';
import { useSelector } from 'react-redux';
import { HelperSelector } from '@src/redux/helper/selectors';
import { translationString } from '@src/translations';

const ConfirmPopup: React.FC<{
  isVisible: boolean;
  onAccept: () => void;
  onCanceled: () => void;
}> = ({ isVisible, onAccept, onCanceled }) => {
  const locale = useSelector(HelperSelector.locale);

  return (
    <Dialog
      visible={isVisible}
      dialogStyle={styles.container}
      dialogAnimation={new ScaleAnimation()}>
      <DialogContent style={styles.content}>
        <Icon
          name={'exit-run'}
          size={normalize(80, 'height')}
          color={colors.authMain}
        />
        <Text style={styles.title}>
          {translationString(translationsConstants.exit_question, locale)}
        </Text>
        <View style={styles.answers}>
          <TouchableOpacity style={styles.button} onPress={onCanceled}>
            <Text style={styles.buttonTitle}>
              {translationString(translationsConstants.no_answer, locale)}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onAccept}>
            <Text style={styles.buttonTitle}>
              {translationString(translationsConstants.yes_answer, locale)}
            </Text>
          </TouchableOpacity>
        </View>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmPopup;
