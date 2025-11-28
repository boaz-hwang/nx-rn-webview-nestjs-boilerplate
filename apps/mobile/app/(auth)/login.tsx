import React from 'react';
import { Text, View } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>Auth flow placeholder</Text>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0F172A',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#E2E8F0',
    marginBottom: 8,
  },
  subtitle: { fontSize: 14, color: '#CBD5E1' },
};
