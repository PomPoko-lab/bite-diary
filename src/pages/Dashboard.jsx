import { Fragment } from 'react';

import { Container, Box, Heading, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

import FoodItem from '../components/FoodItem';

import foods from '../foods';

const Dashboard = () => {
  return (
    <Box>
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
          Welcome!
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
      ></Container>
    </Box>
  );
};

export default Dashboard;
