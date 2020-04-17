import React, { Component } from 'react';
import {
  View,
  findNodeHandle,
  InteractionManager,
  Image,
  Platform,
} from 'react-native';
import { BlurView } from '@react-native-community/blur';

// Android caveats:
// - iOS doesn't seem to need all the viewRef state wiring but Android does
// - On Android, Edges of component with attached ref do not blur, but on iOS they do (Android clips all subviews). If blurred edges are desired, the blurred-edge view must be a child of the view with ref set. (see screenshots below)
// - For Images contained within a View background color must be applied to view. Transparent works but Android displays both BlurView and underlying Image, so opacity: 0 should be set on the underlying image to prevent both blur and non-blur from displaying ..

// See screenshots of clipped edge on android:
// ios: https://i.imgur.com/vT7bBm2.png
// android: https://i.imgur.com/dVevzeM.png

class DefaultScreen extends Component {
  state = {
    viewRef: null,
  };

  componentDidMount() {
    // Workaround for race condition
    InteractionManager.runAfterInteractions(() => {
      setTimeout(() => {
        const viewRef = findNodeHandle(this._viewRef);
        console.log('SETIG', viewRef);
        this.setState({ viewRef }, () => console.log('NEWS', this.state));
      }, 500);
    });
  }

  render() {
    console.log('STTA', this.state);
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          ref={(ref) => (this._viewRef = ref)}
          style={{
            width: 100,
            height: 100,
            padding: 30,
            backgroundColor: 'blue',
          }}>
          <View style={{ flex: 1, backgroundColor: 'green' }} />
        </View>
        {this.state.viewRef !== null && (
          <BlurView
            viewRef={this.state.viewRef}
            blurAmount={5}
            blurType="dark"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          />
        )}
      </View>
    );
  }
}

export default DefaultScreen;
