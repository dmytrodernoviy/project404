import React, { useCallback } from 'react';
import { Animated, Text, TouchableOpacity } from 'react-native';
// @ts-ignore
import Flag from 'react-native-flags';
import styles from './styles';
import { useLanguagePickerAnimation } from '@src/features/profile/languagePickerItem/hooks';
import { DispatcherService } from '@src/services';

const LanguageItemPicker: React.FC<{
  index: number;
  language: 'uk' | 'ru' | 'en';
  pickerState: string;
}> = ({ index, language, pickerState }) => {
  const { itemTranslate, opacity } = useLanguagePickerAnimation(
    index,
    pickerState,
  );
  const titles = { uk: 'Українська', ru: 'Русский', en: 'English' };
  const codes = { uk: 'UA', ru: 'RU', en: 'US' };

  const setSystemLanguage = useCallback(() => {
    DispatcherService.setAppLanguage(language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Animated.View
      style={{
        ...styles.container,
        transform: [{ translateY: itemTranslate }],
        opacity,
      }}>
      <TouchableOpacity style={styles.button} onPress={setSystemLanguage}>
        <Text style={styles.title}>{titles[language]}</Text>
        <Flag code={codes[language]} size={32} />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default LanguageItemPicker;
