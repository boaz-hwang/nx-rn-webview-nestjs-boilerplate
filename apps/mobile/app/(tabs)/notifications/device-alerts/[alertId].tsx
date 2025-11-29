import React from 'react';
import { Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import { screenStyles } from '../../../../constants/Styles';

export default function DeviceAlertDetailScreen() {
  const { alertId } = useLocalSearchParams<{ alertId?: string }>();

  return (
    <View style={screenStyles.paddedContainer}>
      <Text style={screenStyles.title}>Alert Detail</Text>
      <Text style={screenStyles.body}>
        WebView placeholder for alert {alertId ?? 'detail'}.
      </Text>
    </View>
  );
}
