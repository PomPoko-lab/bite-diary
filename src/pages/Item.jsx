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

const Item = () => {
  return (
    <Container as='main' px={['0']}>
      <Box bg='gray.300'>
        <Heading {...headingStyles} pb='0' mb='0'>
          Title
        </Heading>
        <Text px='2'>Posted by: Name</Text>
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
            <ListItem>Meat</ListItem>
            <ListItem>Meat</ListItem>
            <ListItem>Meat</ListItem>
            <ListItem>Meat</ListItem>
          </UnorderedList>
        </Box>
        <Heading as='h3' {...headingStyles}>
          Instructions
        </Heading>
        <Box as='section' {...cardStyles}>
          <OrderedList color='gray.700' spacing='2'>
            <ListItem>Cook the food</ListItem>
            <ListItem>Cook the food</ListItem>
            <ListItem>Cook the food</ListItem>
            <ListItem>Cook the food</ListItem>
            <ListItem>Cook the food</ListItem>
            <ListItem>Cook the food</ListItem>
            <ListItem>Cook the food</ListItem>
          </OrderedList>
        </Box>
      </Box>
    </Container>
  );
};

export default Item;
