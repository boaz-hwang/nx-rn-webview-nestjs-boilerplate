import React from 'react';
import { Text, View } from 'react-native';

import { screenStyles } from '../../../constants/Styles';

export default function ScheduleScreen() {
  return (
    <View style={screenStyles.paddedContainer}>
      <Text style={screenStyles.title}>Schedule</Text>
      <Text style={screenStyles.body}>
        RN placeholder for cleaning schedule setup.
      </Text>
    </View>
  );
}
