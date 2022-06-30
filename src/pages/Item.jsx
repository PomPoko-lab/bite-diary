import {
  Container,
  Box,
  Image,
  Heading,
  UnorderedList,
  OrderedList,
  ListItem,
  Text,
  Divider,
} from '@chakra-ui/react';

import img from '../assets/vn-comtam.jpg';

const cardStyles = {
  bg: 'gray.200',
  border: '1px solid rgba(0,0,0,0.1)',
  shadow: 'base',
  p: '2',
  mx: '3',
  mb: '4',
  borderRadius: 'sm',
};

const listStyles = {
  textAlign: 'center',
};

const headingStyles = {
  fontFamily: 'Nunito',
  mb: '2',
};

const Item = () => {
  return (
    <Container as='main' px={['0']}>
      <Image
        src={img}
        alt='Bite Diary Hero'
        maxW='auto'
        fit='cover'
        filter='brightness(0.6)'
        maxH={['400px']}
      />
      <Box as='article' p='3'>
        <Heading {...headingStyles} mb='0'>
          Title
        </Heading>
        <Text mb='3'>Posted by: Name</Text>
        <Heading as='h3' {...headingStyles}>
          Ingredients
        </Heading>
        <Box as='section' {...cardStyles}>
          <UnorderedList listStyleType='none' m='0' {...listStyles}>
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
          <OrderedList>
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
