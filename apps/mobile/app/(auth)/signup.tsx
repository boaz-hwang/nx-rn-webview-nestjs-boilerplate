import React from 'react';
import { Text, View } from 'react-native';

import { screenStyles } from '../../constants/Styles';

export default function SignupScreen() {
  return (
    <View style={screenStyles.centeredContainer}>
      <Text style={screenStyles.title}>Sign Up</Text>
      <Text style={screenStyles.body}>Create account placeholder</Text>
    </View>
  );
}
