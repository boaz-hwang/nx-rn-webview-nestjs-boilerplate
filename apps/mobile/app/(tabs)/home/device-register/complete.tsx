import React from 'react';
import { Text, View } from 'react-native';

import { screenStyles } from '../../../../constants/Styles';

export default function DeviceRegisterCompleteScreen() {
  return (
    <View style={screenStyles.paddedContainer}>
      <Text style={screenStyles.title}>Registration Complete</Text>
      <Text style={screenStyles.body}>
        Placeholder for completion confirmation.
      </Text>
    </View>
  );
}
