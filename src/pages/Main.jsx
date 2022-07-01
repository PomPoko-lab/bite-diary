import { Fragment } from 'react';

import { Container, Box, Image, Heading, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

import FoodItem from '../components/FoodItem';
import PostRecipe from '../components/PostRecipe';

import hero from '../assets/hero.jpg';
import foods from '../foods';

const Main = () => {
  return (
    <Box>
      <Image
        src={hero}
        alt='Bite Diary Hero'
        w='100vw'
        fit='cover'
        filter='brightness(0.6)'
        maxH={['40vh', null, '50vh']}
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
        <PostRecipe />
        {foods.map((item) => (
          <Fragment key={`id${item.id}`}>
            <Link as={RouterLink} to={`recipes/${item.id}`}>
              <FoodItem item={item} />
            </Link>
          </Fragment>
        ))}
      </Container>
    </Box>
  );
};

export default Main;
