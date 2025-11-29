import React from 'react';
import { Text, View } from 'react-native';

import { screenStyles } from '../../../constants/Styles';

export default function ProfileScreen() {
  return (
    <View style={screenStyles.paddedContainer}>
      <Text style={screenStyles.title}>Profile</Text>
      <Text style={screenStyles.body}>
        RN placeholder for account information.
      </Text>
    </View>
  );
}
