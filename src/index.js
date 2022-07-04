import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { UserContextProvider } from './store/UserContext.jsx';
import '@fontsource/nunito';

import App from './App';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: `'Nunito', sans-serif`,
        bg: 'gray.50',
        height: '100%',
      },
      '&::-webkit-scrollbar': {
        width: '2',
      },
      '&::-webkit-scrollbar-track': {
        width: '3',
      },
      '&::-webkit-scrollbar-thumb': {
        borderRadius: 'lg',
        bg: 'gray.400',
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </BrowserRouter>
  </ChakraProvider>
);
