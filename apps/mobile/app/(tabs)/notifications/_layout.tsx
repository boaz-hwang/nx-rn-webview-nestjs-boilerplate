import { Stack } from 'expo-router';

export default function NotificationsLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Notifications' }} />
      <Stack.Screen name="health" options={{ title: 'Health Insights' }} />
      <Stack.Screen
        name="device-alerts"
        options={{ headerShown: false, presentation: 'card' }}
      />
      <Stack.Screen
        name="records"
        options={{ headerShown: false, presentation: 'card' }}
      />
    </Stack>
  );
}
