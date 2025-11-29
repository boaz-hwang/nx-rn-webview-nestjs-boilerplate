import React from 'react';
import { Text, View } from 'react-native';

import { screenStyles } from '../../constants/Styles';

export default function LoginScreen() {
  return (
    <View style={screenStyles.centeredContainer}>
      <Text style={screenStyles.title}>Login</Text>
      <Text style={screenStyles.body}>Auth flow placeholder</Text>
    </View>
  );
}
