import {
  Container,
  Box,
  Heading,
  Link,
  UnorderedList,
  ListItem,
  Text,
} from '@chakra-ui/react';

import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Box as='footer' pt='2em' mt='auto'>
      <Box
        as='section'
        maxW='container.2xl'
        px={['6', null, null, '16']}
        pt='6'
        pb='4'
        bg='green.500'
        color='gray.50'
        fontSize='sm'
        shadow='dark-lg'
      >
        <Container
          display='flex'
          flexDirection={['column', null, null, 'row']}
          justifyContent='space-between'
          gap='3'
          maxW='container.xl'
        >
          <Box>
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
          </Box>
          <Box display='flex' flexDirection='column' justifyContent='flex-end'>
            <Text
              pt='2'
              borderTop={['1px', null, null, '0']}
              borderColor='gray.50'
            >
              Copyright &copy; {new Date().getFullYear()}, CraftyBi.{' '}
            </Text>
            <Text>Crafted by CraftyBi aka Pom Poko.</Text>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
