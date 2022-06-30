import { Box, Image, Text } from '@chakra-ui/react';

import FoodItem from './components/FoodItem';
import Header from './components/Header';

import hero from './assets/hero.jpg';

function App() {
  return (
    <Box h='100%' display='flex' flexDirection='column'>
      <Header />
      {/* Hero */}
      <Image
        src={hero}
        alt='Bite Diary Hero'
        maxW='auto'
        fit='cover'
        filter='brightness(0.6)'
        maxH={['400px']}
        zIndex='-1'
      />
      {/* Main Content NEEDS STYLING */}
      <Text textAlign='center' py='3'>
        Our Collection
      </Text>
      {/* Food Item Card NEEDS STYLING */}
      <FoodItem />
    </Box>
  );
}

export default App;
