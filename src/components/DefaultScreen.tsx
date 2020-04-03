import React from 'react';
import { Image, SafeAreaView } from 'react-native';
import normalize from 'react-native-normalize';
import { colors, images } from '@src/constants';
import { ScreenHeader } from '@src/components/index';

export const DefaultScreen = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: colors.authAdd }}>
    <ScreenHeader />
    <Image
      source={images.abstract_main_screen}
      style={{
        height: normalize(300, 'height'),
        width: normalize(300),
        position: 'absolute',
        top: normalize(-50, 'height'),
        left: normalize(-30),
        tintColor: colors.activeTab,
      }}
      resizeMode={'contain'}
    />
  </SafeAreaView>
);
