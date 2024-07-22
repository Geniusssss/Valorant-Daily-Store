import { registerRootComponent } from 'expo';
import { ExpoRoot } from 'expo-router';

const App = () => {
  return <ExpoRoot />;
};

registerRootComponent(App);
