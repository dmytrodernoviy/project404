import React from 'react';
import { Image, SafeAreaView, FlatList, View } from 'react-native';
import normalize from 'react-native-normalize';
import uuid from 'react-uuid';
import { colors, images } from '@src/constants';
import { ScreenHeader } from '@src/components/index';

export const DefaultScreen = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: colors.tabNavigatior }}>
    <ScreenHeader />
    {/*<Image*/}
    {/*  source={images.abstract_main_screen}*/}
    {/*  style={{*/}
    {/*    height: normalize(300, 'height'),*/}
    {/*    width: normalize(300),*/}
    {/*    position: 'absolute',*/}
    {/*    top: normalize(-50, 'height'),*/}
    {/*    left: normalize(-30),*/}
    {/*    tintColor: colors.activeTab,*/}
    {/*  }}*/}
    {/*  resizeMode={'contain'}*/}
    {/*/>*/}
    <FlatList
      data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5]}
      renderItem={() => (
        <View
          key={uuid()}
          style={{
            borderRadius: 50,
            width: '100%',
            height: normalize(200),
            borderWidth: 1,
            marginBottom: 20,
            backgroundColor: colors.activeTab,
          }}
        />
      )}
    />
  </SafeAreaView>
);
