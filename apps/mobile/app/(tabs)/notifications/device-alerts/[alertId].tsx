import React from 'react';
import { Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function DeviceAlertDetailScreen() {
  const { alertId } = useLocalSearchParams<{ alertId?: string }>();

  return (
    <View style={containerStyle}>
      <Text style={titleStyle}>Alert Detail</Text>
      <Text style={bodyStyle}>
        WebView placeholder for alert {alertId ?? 'detail'}.
      </Text>
    </View>
  );
}

const containerStyle = {
  flex: 1,
  backgroundColor: '#0F172A',
  padding: 24,
  justifyContent: 'center',
};

const titleStyle = {
  fontSize: 24,
  fontWeight: '700' as const,
  color: '#E2E8F0',
  marginBottom: 8,
};

const bodyStyle = {
  fontSize: 14,
  color: '#CBD5E1',
  lineHeight: 20,
};
