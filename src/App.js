import { Box } from '@chakra-ui/react';

import Header from './components/Header';
import Main from './pages/Main';
import Item from './pages/Item';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Box h='100%' display='flex' flexDirection='column' pb='4'>
      {/* <Header /> */}
      {/* <Main /> */}
      {/* <Item /> */}
      {/* <About /> */}
      {/* <SignIn /> */}
      <SignUp />
      {/* FOOTER */}
    </Box>
  );
}

export default App;
