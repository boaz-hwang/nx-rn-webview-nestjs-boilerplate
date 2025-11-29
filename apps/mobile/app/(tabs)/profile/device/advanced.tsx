import React from 'react';
import { Text, View } from 'react-native';

import { screenStyles } from '../../../../constants/Styles';

export default function DeviceAdvancedScreen() {
  return (
    <View style={screenStyles.paddedContainer}>
      <Text style={screenStyles.title}>Advanced Settings</Text>
      <Text style={screenStyles.body}>
        WebView placeholder for advanced device controls.
      </Text>
    </View>
  );
}
