import { Redirect } from 'expo-router';

/**
 * Placeholder auth gate.
 * Replace `isAuthenticated` with real session logic.
 */
const isAuthenticated = true;

export default function AppEntry() {
  return <Redirect href={isAuthenticated ? '/(tabs)/home' : '/(auth)/login'} />;
}
