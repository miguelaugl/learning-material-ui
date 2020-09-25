import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import Routes from './routes';
import theme from './assets/styles/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
