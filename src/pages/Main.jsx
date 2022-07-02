import React, { useEffect, useState } from 'react';
import {
  Container,
  Box,
  Image,
  Heading,
  Link,
  Text,
  Spinner,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

// Firebase imports
import { db } from '../firebase/config';
import { collection, getDocs } from 'firebase/firestore';

// Styling imports
import hero from '../assets/hero.jpg';

// Component imports
import FoodItem from '../components/FoodItem';
import PostRecipe from '../components/PostRecipe';

const Main = () => {
  const [foods, setFoods] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const ref = collection(db, 'recipes');
    setIsLoading(true);
    getDocs(ref)
      .then((snapshot) => {
        snapshot.docs.forEach((document) => {
          setFoods((prev) => [
            ...prev,
            { id: document.id, ...document.data() },
          ]);
        });
      })
      .catch((error) => console.error(error.message))
      .finally(() => setIsLoading(false));
  }, []);

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
      {isLoading && (
        <Spinner
          speed='1s'
          m='auto'
          display='block'
          size='xl'
          color='green.400'
          emptyColor='gray.100'
        />
      )}
      {!isLoading && (
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
          {foods &&
            foods.map((item, i) => (
              <Link key={`id-${i}`} as={RouterLink} to={`recipes/${item.id}`}>
                <FoodItem item={item} />
              </Link>
            ))}
          {!foods.length && <Text fontSize='lg'>No recipes posted.</Text>}
        </Container>
      )}
    </Box>
  );
};

export default Main;
