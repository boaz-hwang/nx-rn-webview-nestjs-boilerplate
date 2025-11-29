import React from 'react';
import { Text, View } from 'react-native';

import { screenStyles } from '../../../../constants/Styles';

export default function GuideScreen() {
  return (
    <View style={screenStyles.paddedContainer}>
      <Text style={screenStyles.title}>Guide</Text>
      <Text style={screenStyles.body}>
        WebView placeholder for guides/tutorials.
      </Text>
    </View>
  );
}
