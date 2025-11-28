import { Stack } from 'expo-router';

export default function ProfileLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Profile' }} />
      <Stack.Screen
        name="notification-settings"
        options={{ title: 'Notification Settings' }}
      />
      <Stack.Screen name="app-settings" options={{ title: 'App Settings' }} />
      <Stack.Screen
        name="stats"
        options={{ headerShown: false, presentation: 'card' }}
      />
      <Stack.Screen
        name="device"
        options={{ headerShown: false, presentation: 'card' }}
      />
      <Stack.Screen
        name="help"
        options={{ headerShown: false, presentation: 'card' }}
      />
    </Stack>
  );
}
