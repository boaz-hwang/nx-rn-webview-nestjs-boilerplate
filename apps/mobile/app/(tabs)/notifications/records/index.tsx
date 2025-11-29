import React from 'react';
import { Text, View } from 'react-native';

import { screenStyles } from '../../../../constants/Styles';

export default function RecordsScreen() {
  return (
    <View style={screenStyles.paddedContainer}>
      <Text style={screenStyles.title}>Records</Text>
      <Text style={screenStyles.body}>
        WebView placeholder for bowel history list.
      </Text>
    </View>
  );
}
