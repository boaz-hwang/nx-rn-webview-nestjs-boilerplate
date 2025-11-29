import React from 'react';
import { Text, View } from 'react-native';

import { screenStyles } from '../../../constants/Styles';

export default function HealthScreen() {
  return (
    <View style={screenStyles.paddedContainer}>
      <Text style={screenStyles.title}>Health Insights</Text>
      <Text style={screenStyles.body}>
        WebView placeholder for health analytics.
      </Text>
    </View>
  );
}
