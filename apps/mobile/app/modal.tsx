import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import {
  STYLE_ALIGN,
  STYLE_FONT_WEIGHTS,
  STYLE_WIDTHS,
} from '../constants/Styles';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/modal.tsx" />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: STYLE_ALIGN.center,
    justifyContent: STYLE_ALIGN.center,
  },
  title: {
    fontSize: 20,
    fontWeight: STYLE_FONT_WEIGHTS.bold,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: STYLE_WIDTHS.eightyPercent,
  },
});
