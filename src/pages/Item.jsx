import {
  Container,
  Box,
  Image,
  Heading,
  UnorderedList,
  OrderedList,
  ListItem,
  Spinner,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import img from '../assets/vn-comtam.jpg';

// Firebase imports
import { db } from '../firebase/config';
import { doc, getDoc } from 'firebase/firestore';

const cardStyles = {
  bg: 'green.200',
  border: '2px solid rgba(72, 135, 54,0.3)',
  shadow: 'base',
  p: '4',
  mx: '3',
  mb: '4',
  borderRadius: 'sm',
};

const headingStyles = {
  fontFamily: 'Nunito',
  mb: '2',
  p: '2',
  color: 'gray.800',
};

const Item = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const ref = doc(db, 'recipes', id);
    getDoc(ref)
      .then((document) => {
        if (document.exists()) {
          setData(document.data());
        } else {
          navigate('404');
        }
      })
      .catch((error) => console.error(error.messagE))
      .finally(() => setIsLoading(false));
  }, [id, navigate]);

  useEffect(
    () =>
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      }),
    []
  );

  if (isLoading)
    return (
      <Spinner
        speed='1s'
        m='auto'
        display='block'
        size='xl'
        color='green.400'
        emptyColor='gray.100'
        mt='10em'
      />
    );

  if (!isLoading && data)
    return (
      <Container as='main' px={['0']}>
        <Box bg='gray.300'>
          <Heading {...headingStyles} pb='0' mb='0'>
            {data.title}
          </Heading>
        </Box>
        <Image
          src={img}
          alt='Bite Diary Hero'
          maxW='auto'
          fit='cover'
          filter='brightness(0.6)'
          maxH={['400px']}
        />
        <Box as='article'>
          <Heading as='h3' {...headingStyles}>
            Ingredients
          </Heading>
          <Box as='section' {...cardStyles}>
            <UnorderedList
              listStyleType='none'
              m='0'
              textAlign='center'
              color='gray.700'
              spacing='2'
              fontWeight='bold'
            >
              {data.ingredients.map((ingItem, i) => (
                <ListItem key={`ingId-${i}`}>{ingItem}</ListItem>
              ))}
            </UnorderedList>
          </Box>
          <Heading as='h3' {...headingStyles}>
            Instructions
          </Heading>
          <Box as='section' {...cardStyles}>
            <OrderedList color='gray.700' spacing='2'>
              {data.instructions.map((ingItem, i) => (
                <ListItem key={`insId-${i}`}>{ingItem}</ListItem>
              ))}
            </OrderedList>
          </Box>
        </Box>
      </Container>
    );
};

export default Item;
