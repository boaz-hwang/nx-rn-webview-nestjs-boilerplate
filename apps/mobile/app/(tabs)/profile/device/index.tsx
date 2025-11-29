import React from 'react';
import { Text, View } from 'react-native';

import { screenStyles } from '../../../../constants/Styles';

export default function DeviceDetailScreen() {
  return (
    <View style={screenStyles.paddedContainer}>
      <Text style={screenStyles.title}>Device Detail</Text>
      <Text style={screenStyles.body}>RN placeholder for device metadata.</Text>
    </View>
  );
}
