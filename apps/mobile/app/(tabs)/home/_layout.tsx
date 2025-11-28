import { Stack } from 'expo-router';

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Device Entry' }} />
      <Stack.Screen name="dashboard" options={{ title: 'Home Dashboard' }} />
      <Stack.Screen name="schedule" options={{ title: 'Schedule' }} />
      <Stack.Screen name="live" options={{ title: 'Live Stream' }} />
      <Stack.Screen
        name="device-register"
        options={{ headerShown: false, presentation: 'card' }}
      />
    </Stack>
  );
}
