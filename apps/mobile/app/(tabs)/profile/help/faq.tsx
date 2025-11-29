import React from 'react';
import { Text, View } from 'react-native';

import { screenStyles } from '../../../../constants/Styles';

export default function FaqScreen() {
  return (
    <View style={screenStyles.paddedContainer}>
      <Text style={screenStyles.title}>FAQ</Text>
      <Text style={screenStyles.body}>WebView placeholder for FAQ content.</Text>
    </View>
  );
}
