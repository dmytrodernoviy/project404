import React, { Component } from 'react';
import { View } from 'react-native';
import { colors } from '@src/constants';

class DefaultScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.tabNavigatior,
        }}
      />
    );
  }
}

export default DefaultScreen;
