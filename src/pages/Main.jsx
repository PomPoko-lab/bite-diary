import { useEffect, useState, lazy, Suspense } from 'react';
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
import heroDesktop from '../assets/heroDesktop.webp';
import heroMobile from '../assets/heroMobile.webp';

// Component imports
import FoodItem from '../components/FoodItem';

// Lazy Loading
const PostRecipe = lazy(() => import('../components/PostRecipe'));

const Main = () => {
  const [foods, setFoods] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (foods.length > 0) return;
    setIsLoading(true);
    const ref = collection(db, 'recipes');
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
  }, [foods.length]);

  return (
    <Box>
      <Image
        srcSet={`${heroMobile} 360w, ${heroDesktop} 1900w`}
        src={heroMobile}
        alt='Bite Diary Hero'
        fit='cover'
        w='full'
        filter='brightness(0.6)'
        loading='eager'
        maxH={['40vh', null, '50vh']}
      />
      <Suspense
        fallback={
          <Spinner
            speed='1s'
            m='auto'
            mt='5em'
            display='block'
            size='xl'
            color='green.400'
            emptyColor='gray.100'
          />
        }
      ></Suspense>
      <Box bg='gray.300' mb='10'>
        <Heading
          textAlign='center'
          pt='6'
          pb='4'
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
          gap='12'
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
