import React from 'react';
import { Text, View } from 'react-native';

import { screenStyles } from '../../../../constants/Styles';

export default function DeviceRegisterConnectingScreen() {
  return (
    <View style={screenStyles.paddedContainer}>
      <Text style={screenStyles.title}>Connecting</Text>
      <Text style={screenStyles.body}>
        Placeholder for initial pairing progress UI.
      </Text>
    </View>
  );
}
