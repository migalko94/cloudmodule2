import React from 'react';

import { ThemeProviderComponent } from 'core/theme';
import { RouterComponent } from 'core/router';
import { ContextProvider } from 'core/context/context.provider';

const App: React.FunctionComponent = () => {
  return <RouterComponent />;
};

const AppProviders: React.FunctionComponent = () => {
  return (
    <ThemeProviderComponent>
      <ContextProvider>
        <App />
      </ContextProvider>
    </ThemeProviderComponent>
  );
};

export default AppProviders;
