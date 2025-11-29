import React from 'react';
import { Text, View } from 'react-native';

import { screenStyles } from '../../../constants/Styles';

export default function DeviceEntryScreen() {
  return (
    <View style={screenStyles.paddedContainer}>
      <Text style={screenStyles.title}>Device Entry</Text>
      <Text style={screenStyles.body}>
        Placeholder for device entry screen (device add CTA).
      </Text>
    </View>
  );
}
