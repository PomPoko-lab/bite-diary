import { Container, UnorderedList, ListItem, Link } from '@chakra-ui/react/';

const Header = () => {
  return (
    <Container bg='teal.700' textAlign='center' px={['0']}>
      <UnorderedList
        styleType='none'
        m='0'
        color='gray.50'
        fontSize='lg'
        fontWeight='bold'
        letterSpacing='wide'
      >
        <Link _hover={{ style: { textDecoration: 'none' } }}>
          <ListItem py='5'>Home</ListItem>
        </Link>
        <Link _hover={{ style: { textDecoration: 'none' } }}>
          <ListItem py='5'>About</ListItem>
        </Link>
        <Link _hover={{ style: { textDecoration: 'none' } }}>
          <ListItem py='5'>Log in</ListItem>
        </Link>
        <Link _hover={{ style: { textDecoration: 'none' } }}>
          <ListItem py='5'>Sign Up</ListItem>
        </Link>
      </UnorderedList>
    </Container>
  );
};

export default Header;
