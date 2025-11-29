import React from 'react';
import { Text, View } from 'react-native';

import { screenStyles } from '../../../../constants/Styles';

export default function StatsScreen() {
  return (
    <View style={screenStyles.paddedContainer}>
      <Text style={screenStyles.title}>Stats</Text>
      <Text style={screenStyles.body}>
        WebView placeholder for weekly/monthly stats.
      </Text>
    </View>
  );
}
