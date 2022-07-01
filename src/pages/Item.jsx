import {
  Container,
  Box,
  Image,
  Heading,
  UnorderedList,
  OrderedList,
  ListItem,
  Text,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import foods from '../foods';

import img from '../assets/vn-comtam.jpg';

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

const Item = ({ item }) => {
  const { id } = useParams();

  useEffect(
    () =>
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      }),
    []
  );
  return (
    <Container as='main' px={['0']}>
      <Box bg='gray.300'>
        <Heading {...headingStyles} pb='0' mb='0'>
          {foods[id - 1].title}
        </Heading>
        <Text px='2' pb='1'>
          Posted by:{' '}
          <Text as='span' color='green.600' fontWeight='bold'>
            {foods[id - 1].poster}
          </Text>
        </Text>
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
            {foods[id - 1].ingredients.map((ingItem, i) => (
              <ListItem key={`ingId-${i}`}>{ingItem}</ListItem>
            ))}
          </UnorderedList>
        </Box>
        <Heading as='h3' {...headingStyles}>
          Instructions
        </Heading>
        <Box as='section' {...cardStyles}>
          <OrderedList color='gray.700' spacing='2'>
            {foods[id - 1].instructions.map((ingItem, i) => (
              <ListItem key={`insId-${i}`}>{ingItem}</ListItem>
            ))}
          </OrderedList>
        </Box>
      </Box>
    </Container>
  );
};

export default Item;
