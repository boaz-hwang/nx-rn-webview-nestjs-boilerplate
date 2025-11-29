import React from 'react';
import { Text, View } from 'react-native';

import { screenStyles } from '../../../constants/Styles';

export default function NotificationsRootScreen() {
  return (
    <View style={screenStyles.paddedContainer}>
      <Text style={screenStyles.title}>Notifications</Text>
      <Text style={screenStyles.body}>
        RN placeholder for notification categories.
      </Text>
    </View>
  );
}
