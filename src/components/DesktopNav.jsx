import {
  Container,
  Heading,
  UnorderedList,
  Link,
  Button,
  ListItem,
} from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { UserContext } from '../store/UserContext';

// Firebase imports
import { auth } from '../firebase/config';
import { signOut } from 'firebase/auth';

const DesktopNav = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { user, dispatch } = useContext(UserContext);

  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      if (!user) {
        navigate('login');
        return;
      }
      setIsLoading(true);
      await signOut(auth);
      dispatch({ type: 'LOGOUT' });
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Container
      as='nav'
      bg='gray.50'
      display='flex'
      alignItems='center'
      gap='4'
      p='1'
      maxW='container.xl'
    >
      <Link as={RouterLink} to='/' style={{ textDecoration: 'none' }}>
        <Heading>Bite Diary</Heading>
      </Link>
      <UnorderedList listStyleType='none' display='flex' gap='6' ms='auto'>
        <ListItem>
          <Link as={RouterLink} to='/' style={{ textDecoration: 'none' }}>
            <Button variant='ghost'>Home</Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link as={RouterLink} to='about' style={{ textDecoration: 'none' }}>
            <Button variant='ghost'>About</Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link as={RouterLink} to='login' style={{ textDecoration: 'none' }}>
            <Button
              colorScheme='green'
              onClick={handleClick}
              isLoading={isLoading}
              loadingText='Logging in..'
            >
              {user ? 'Sign Out' : 'Sign In'}
            </Button>
          </Link>
        </ListItem>
      </UnorderedList>
    </Container>
  );
};

export default DesktopNav;
