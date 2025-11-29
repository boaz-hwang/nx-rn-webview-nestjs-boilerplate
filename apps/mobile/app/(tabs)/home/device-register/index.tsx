import React from 'react';
import { Text, View } from 'react-native';

import { screenStyles } from '../../../../constants/Styles';

export default function DeviceRegisterStartScreen() {
  return (
    <View style={screenStyles.paddedContainer}>
      <Text style={screenStyles.title}>Add Device</Text>
      <Text style={screenStyles.body}>
        Placeholder for BLE permission and discovery UI.
      </Text>
    </View>
  );
}
