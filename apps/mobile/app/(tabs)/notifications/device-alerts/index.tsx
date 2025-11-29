import React from 'react';
import { Text, View } from 'react-native';

import { screenStyles } from '../../../../constants/Styles';

export default function DeviceAlertsScreen() {
  return (
    <View style={screenStyles.paddedContainer}>
      <Text style={screenStyles.title}>Device Alerts</Text>
      <Text style={screenStyles.body}>
        WebView placeholder for device alerts list.
      </Text>
    </View>
  );
}
