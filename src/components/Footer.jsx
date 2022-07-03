import {
  Container,
  Box,
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
    <Box as='footer' pt='2em' mt='auto'>
      <Container
        as='section'
        px='6'
        pt='6'
        pb='4'
        bg='green.400'
        color='gray.50'
        fontSize='sm'
        shadow='lg'
        display='flex'
        flexDirection='column'
        gap='3'
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
        <Box>
          <Text>Copyright &copy; {new Date().getFullYear()}, CraftyBi. </Text>
          <Text>Crafted by CraftyBi aka Pom Poko.</Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
