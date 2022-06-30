import { Container, Box, Image, Heading } from '@chakra-ui/react';

import FoodItem from '../components/FoodItem';

import hero from '../assets/hero.jpg';

import foods from '../foods';

const Main = () => {
  return (
    <Box>
      <Image
        src={hero}
        alt='Bite Diary Hero'
        maxW='auto'
        fit='cover'
        filter='brightness(0.6)'
        maxH={['400px']}
      />
      <Box bg='gray.300' mb='6'>
        <Heading
          textAlign='center'
          pt='3'
          pb='2'
          fontSize='3xl'
          color='gray.600'
          fontWeight='black'
          fontFamily='Nunito'
          letterSpacing='wide'
        >
          Our Collection
        </Heading>
      </Box>
      <Container
        display='flex'
        gap='10'
        maxW='container.xl'
        alignItems='center'
        justifyContent='center'
        flexDirection={['column', null, 'row']}
        flexWrap={['nowrap', null, 'wrap']}
      >
        {foods.map((dish) => (
          <FoodItem dish={dish} />
        ))}
      </Container>
    </Box>
  );
};

export default Main;
