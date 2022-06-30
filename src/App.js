import { Box } from '@chakra-ui/react';

import Header from './components/Header';
import Main from './pages/Main';
import Item from './pages/Item';

function App() {
  return (
    <Box h='100%' display='flex' flexDirection='column' pb='4'>
      <Header />
      {/* <Main /> */}
      <Item />
      {/* FOOTER */}
    </Box>
  );
}

export default App;
