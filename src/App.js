import React from 'react';

import MainNavigation from './navigation/MainNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-view';

const App: () => Node = () => (
  <SafeAreaProvider>
    <MainNavigation />
  </SafeAreaProvider>
);

export default App;
