import { Box, Spinner } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';

import { useContext, lazy, Suspense } from 'react';
import { UserContext } from './store/UserContext';
import Footer from './components/Footer';

// Lazy Loading
const Header = lazy(() => import('./components/Header'));
const Main = lazy(() => import('./pages/Main'));
const Item = lazy(() => import('./pages/Item'));
const About = lazy(() => import('./pages/About'));
const SignIn = lazy(() => import('./pages/SignIn'));
const SignUp = lazy(() => import('./pages/SignUp'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  const { user } = useContext(UserContext);

  return (
    <Box
      h='100%'
      display='flex'
      flexDirection='column'
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
      <Suspense
        fallback={
          <Spinner
            mx='auto'
            mt='7em'
            speed='1s'
            display='block'
            size='xl'
            color='green.400'
            emptyColor='gray.100'
          />
        }
      >
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/recipes/:id' element={<Item />} />
          <Route path='about' element={<About />} />
          {!user && <Route path='login' element={<SignIn />} />}
          {!user && <Route path='register' element={<SignUp />} />}
          <Route path='404' element={<NotFound />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Suspense>
    </Box>
  );
}

export default App;
