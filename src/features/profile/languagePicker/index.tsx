import React, { useCallback, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
// @ts-ignore
import Flag from 'react-native-flags';
import styles from './styles';
import { useSelector } from 'react-redux';
import { HelperSelector } from '@src/redux/helper/selectors';
import { translationString } from '@src/translations';
import { translationsConstants } from '@src/constants';
import LanguageItemPicker from '@src/features/profile/languagePickerItem';

const LanguagePicker: React.FC = () => {
  const languages: Array<'uk' | 'ru' | 'en'> = ['uk', 'ru', 'en'];
  const codes = { uk: 'UA', ru: 'RU', en: 'US' };
  const locale: 'uk' | 'ru' | 'en' = useSelector(HelperSelector.locale);
  const [pickerState, setPickerState] = useState('closed');

  const togglePicker = useCallback(() => {
    setPickerState((prevState) => (prevState === 'open' ? 'closed' : 'open'));
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={togglePicker}
        style={{ ...styles.header, zIndex: languages.length + 1 }}
        activeOpacity={0.9}>
        <Text style={styles.title}>
          {translationString(translationsConstants.system_language, locale)}
        </Text>
        <Flag code={codes[locale]} size={32} />
      </TouchableOpacity>
      {languages.map((item, index) => (
        <LanguageItemPicker
          index={index}
          language={item}
          key={item}
          pickerState={pickerState}
        />
      ))}
    </View>
  );
};

export default LanguagePicker;
