import React, { useEffect } from 'react';
import codePush from 'react-native-code-push';

import MainNavigation from './navigation/MainNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-view';

const codePushOptions = {
  installMode: codePush.InstallMode.IMMEDIATE,
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  mandatoryInstallMode: codePush.InstallMode.ON_NEXT_RESTART,
  updateDialog: false,
};

const App: () => Node = () => {
  useEffect(() => {
    codePush.sync(codePushOptions);
    codePush.notifyAppReady();
  });

  return (
    <SafeAreaProvider>
      <MainNavigation />
    </SafeAreaProvider>
  );
};

export default codePush(codePushOptions)(App);
