import { Stack } from 'expo-router';

export default function StatsLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Stats' }} />
      <Stack.Screen
        name="[period]"
        options={{ title: 'Pattern Detail', presentation: 'card' }}
      />
    </Stack>
  );
}
