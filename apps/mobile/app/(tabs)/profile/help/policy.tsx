import React from 'react';
import { Text, View } from 'react-native';

import { screenStyles } from '../../../../constants/Styles';

export default function PolicyScreen() {
  return (
    <View style={screenStyles.paddedContainer}>
      <Text style={screenStyles.title}>Policy</Text>
      <Text style={screenStyles.body}>
        WebView placeholder for legal documents.
      </Text>
    </View>
  );
}
