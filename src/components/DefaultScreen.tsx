import React, { Component } from 'react';
import { View } from 'react-native';

class DefaultScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />
    );
  }
}

export default DefaultScreen;
