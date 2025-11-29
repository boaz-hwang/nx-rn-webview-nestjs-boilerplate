import React from 'react';
import { Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import { screenStyles } from '../../../../constants/Styles';

export default function StatsPeriodScreen() {
  const { period } = useLocalSearchParams<{ period?: string }>();

  return (
    <View style={screenStyles.paddedContainer}>
      <Text style={screenStyles.title}>Pattern Detail</Text>
      <Text style={screenStyles.body}>
        WebView placeholder for {period ?? 'selected'} period detail.
      </Text>
    </View>
  );
}
