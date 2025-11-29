import React from 'react';
import { Text, View } from 'react-native';

import { screenStyles } from '../../../../constants/Styles';

export default function DeviceRegisterWifiScreen() {
  return (
    <View style={screenStyles.paddedContainer}>
      <Text style={screenStyles.title}>Wi-Fi Setup</Text>
      <Text style={screenStyles.body}>
        Placeholder for SSID selection and password UI.
      </Text>
    </View>
  );
}
