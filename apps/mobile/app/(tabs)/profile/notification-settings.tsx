import React from 'react';
import { Text, View } from 'react-native';

import { screenStyles } from '../../../constants/Styles';

export default function NotificationSettingsScreen() {
  return (
    <View style={screenStyles.paddedContainer}>
      <Text style={screenStyles.title}>Notification Settings</Text>
      <Text style={screenStyles.body}>
        RN placeholder for push toggle and topics.
      </Text>
    </View>
  );
}
