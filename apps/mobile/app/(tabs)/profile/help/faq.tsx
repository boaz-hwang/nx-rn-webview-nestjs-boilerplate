import React from 'react';
import { Text, View } from 'react-native';

export default function FaqScreen() {
  return (
    <View style={containerStyle}>
      <Text style={titleStyle}>FAQ</Text>
      <Text style={bodyStyle}>WebView placeholder for FAQ content.</Text>
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
