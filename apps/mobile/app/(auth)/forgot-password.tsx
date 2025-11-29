import React from 'react';
import { Text, View } from 'react-native';

import { screenStyles } from '../../constants/Styles';

export default function ForgotPasswordScreen() {
  return (
    <View style={screenStyles.centeredContainer}>
      <Text style={screenStyles.title}>Forgot Password</Text>
      <Text style={screenStyles.body}>Reset flow placeholder</Text>
    </View>
  );
}
