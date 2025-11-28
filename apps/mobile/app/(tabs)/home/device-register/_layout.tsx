import { Stack } from 'expo-router';

export default function DeviceRegisterLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Add Device' }} />
      <Stack.Screen name="wifi" options={{ title: 'Wi-Fi Setup' }} />
      <Stack.Screen name="connecting" options={{ title: 'Connecting' }} />
      <Stack.Screen name="complete" options={{ title: 'Completed' }} />
    </Stack>
  );
}
