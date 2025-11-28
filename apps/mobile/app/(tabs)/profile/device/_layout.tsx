import { Stack } from 'expo-router';

export default function DeviceLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Device Detail' }} />
      <Stack.Screen
        name="logs"
        options={{ title: 'Device Logs', presentation: 'card' }}
      />
      <Stack.Screen
        name="advanced"
        options={{ title: 'Advanced Settings', presentation: 'card' }}
      />
    </Stack>
  );
}
