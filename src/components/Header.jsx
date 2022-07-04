import {
  Container,
  Box,
  Heading,
  UnorderedList,
  ListItem,
  Text,
  Link,
  Icon,
  Image,
  Button,
  useDisclosure,
  Drawer,
  DrawerContent,
  DrawerBody,
  DrawerOverlay,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../store/UserContext';

import { AiOutlineMenu } from 'react-icons/ai';
import logoIcon from '../assets/smallIcon.webp';
import brandName from '../assets/brandName.webp';

// Firebase imports
import { auth } from '../firebase/config';
import { signOut } from 'firebase/auth';

// Needs dashboard, and heading(h1)

const Header = () => {
  const { user, dispatch } = useContext(UserContext);
  const { isOpen, onClose, onOpen } = useDisclosure();

  const navigate = useNavigate();

  const handleLogOutClick = async () => {
    if (!user) {
      navigate('login');
      onClose();
      return;
    }

    try {
      await signOut(auth);
      dispatch({ type: 'LOGOUT' });
    } catch (error) {
      console.error(error.message);
    } finally {
      onClose();
    }
  };

  return (
    <Box as='header' p='2' maxW='container.2xl' zIndex='1' shadow='base'>
      {/* Desktop Nav */}
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
          <Link as={RouterLink} to='/' style={{ textDecoration: 'none' }}>
            <Button as='li' variant='ghost'>
              Home
            </Button>
          </Link>
          <Link as={RouterLink} to='about' style={{ textDecoration: 'none' }}>
            <Button as='li' variant='ghost'>
              About
            </Button>
          </Link>
          <Link as={RouterLink} to='login' style={{ textDecoration: 'none' }}>
            <Button as='li' colorScheme='green'>
              Sign In
            </Button>
          </Link>
        </UnorderedList>
      </Container>
      {/* Mobile Nav */}
    </Box>
  );
};

export default Header;
