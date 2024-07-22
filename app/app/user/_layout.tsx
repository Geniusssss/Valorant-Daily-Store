import { Tabs } from 'expo-router';

export default function MainLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="store"
        options={{ headerShown: false }}
      />
      <Tabs.Screen
        name="in-game"
        options={{ headerShown: false }}
      />
    </Tabs>
  );
}
