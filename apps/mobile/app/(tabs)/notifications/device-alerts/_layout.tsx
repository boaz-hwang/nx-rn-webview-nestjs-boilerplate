import { Stack } from 'expo-router';

export default function DeviceAlertsLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Device Alerts' }} />
      <Stack.Screen
        name="[alertId]"
        options={{ title: 'Alert Detail', presentation: 'card' }}
      />
    </Stack>
  );
}
