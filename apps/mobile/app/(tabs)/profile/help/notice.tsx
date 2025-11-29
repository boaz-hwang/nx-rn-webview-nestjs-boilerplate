import React from 'react';
import { Text, View } from 'react-native';

import { screenStyles } from '../../../../constants/Styles';

export default function NoticeScreen() {
  return (
    <View style={screenStyles.paddedContainer}>
      <Text style={screenStyles.title}>Notice</Text>
      <Text style={screenStyles.body}>WebView placeholder for notices.</Text>
    </View>
  );
}
