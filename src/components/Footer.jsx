import {
  Container,
  Heading,
  Link,
  UnorderedList,
  ListItem,
  Text,
  Divider,
} from '@chakra-ui/react';

import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Container
      as='footer'
      p='6'
      py='10'
      mt='10'
      bg='green.400'
      color='gray.700'
      fontSize='sm'
    >
      <Heading as='h1' fontSize='lg'>
        Bite Diary
      </Heading>
      <UnorderedList listStyleType='none'>
        <ListItem>
          <Link as={RouterLink} to='/'>
            Home
          </Link>
        </ListItem>
        <ListItem>
          <Link as={RouterLink} to='about'>
            About
          </Link>
        </ListItem>
        <ListItem>Contact Us</ListItem>
      </UnorderedList>
      <Divider borderColor='gray.500' />
      <Text>Copyright &copy; {new Date().getFullYear()} CraftyBi </Text>
      <Text>Crafted by CraftyBi aka Pom Poko.</Text>
    </Container>
  );
};

export default Footer;
