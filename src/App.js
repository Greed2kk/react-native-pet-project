import React from 'react';
import codePush from 'react-native-code-push';

import MainNavigation from './navigation/MainNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-view';

const App: () => Node = () => (
  <SafeAreaProvider>
    <MainNavigation />
  </SafeAreaProvider>
);

export default codePush({
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
})(App);
