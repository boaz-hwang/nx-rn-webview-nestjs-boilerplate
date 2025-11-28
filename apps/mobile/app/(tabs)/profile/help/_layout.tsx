import { Stack } from 'expo-router';

export default function HelpLayout() {
  return (
    <Stack>
      <Stack.Screen name="notice" options={{ title: 'Notice' }} />
      <Stack.Screen name="guide" options={{ title: 'Guide' }} />
      <Stack.Screen name="faq" options={{ title: 'FAQ' }} />
      <Stack.Screen name="policy" options={{ title: 'Policy' }} />
    </Stack>
  );
}
