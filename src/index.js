import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '@fontsource/nunito';

import App from './App';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: `'Nunito', sans-serif`,
        height: '100%',
        bg: '#ffecd1',
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
