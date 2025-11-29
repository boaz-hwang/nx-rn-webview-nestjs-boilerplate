import React from 'react';
import { Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import { screenStyles } from '../../../../constants/Styles';

export default function RecordVideoScreen() {
  const { eventId } = useLocalSearchParams<{ eventId?: string }>();

  return (
    <View style={screenStyles.paddedContainer}>
      <Text style={screenStyles.title}>Record Video</Text>
      <Text style={screenStyles.body}>
        WebView placeholder for record {eventId ?? 'video'} playback.
      </Text>
    </View>
  );
}
