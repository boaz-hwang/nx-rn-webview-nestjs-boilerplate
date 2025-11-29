import React from 'react';
import { Text, View } from 'react-native';

import { screenStyles } from '../../../../constants/Styles';

export default function DeviceLogsScreen() {
  return (
    <View style={screenStyles.paddedContainer}>
      <Text style={screenStyles.title}>Device Logs</Text>
      <Text style={screenStyles.body}>WebView placeholder for device logs.</Text>
    </View>
  );
}
