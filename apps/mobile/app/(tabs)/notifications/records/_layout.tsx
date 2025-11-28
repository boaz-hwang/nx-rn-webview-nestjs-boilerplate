import { Stack } from 'expo-router';

export default function RecordsLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Records' }} />
      <Stack.Screen
        name="[eventId]"
        options={{ title: 'Record Detail', presentation: 'card' }}
      />
      <Stack.Screen
        name="[eventId]-video"
        options={{ title: 'Record Video', presentation: 'modal' }}
      />
    </Stack>
  );
}
