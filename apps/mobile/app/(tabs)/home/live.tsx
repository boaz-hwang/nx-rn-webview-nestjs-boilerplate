import React from 'react';
import { Text, View } from 'react-native';

import { screenStyles } from '../../../constants/Styles';

export default function LiveScreen() {
  return (
    <View style={screenStyles.paddedContainer}>
      <Text style={screenStyles.title}>Live Stream</Text>
      <Text style={screenStyles.body}>WebView placeholder for streaming UI.</Text>
    </View>
  );
}
