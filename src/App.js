import { Box } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Main from './pages/Main';
import Item from './pages/Item';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Box
      h='100%'
      display='flex'
      flexDirection='column'
      pb='4'
      sx={{
        '&::-webkit-scrollbar': {
          width: '4px',
        },
        '&::-webkit-scrollbar-track': {
          width: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
          borderRadius: 'lg',
          bg: 'gray.100',
        },
      }}
    >
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/recipes/:id' element={<Item />} />
        <Route path='about' element={<About />} />
        <Route path='login' element={<SignIn />} />
        <Route path='register' element={<SignUp />} />
        <Route path='404' element={<NotFound />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      {/* FOOTER */}
    </Box>
  );
}

export default App;
