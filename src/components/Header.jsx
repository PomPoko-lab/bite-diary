import {
  Container,
  Box,
  UnorderedList,
  ListItem,
  Link,
  Icon,
  Image,
  useDisclosure,
  Drawer,
  DrawerContent,
  DrawerBody,
  DrawerOverlay,
  DrawerCloseButton,
} from '@chakra-ui/react/';

import ButtonStyle from './ButtonStyle';

import { AiOutlineMenu } from 'react-icons/ai';
import logoIcon from '../assets/smallIcon.jpg';
import brandName from '../assets/brandName.jpg';

// Needs profile, favorites, and heading(h1)

const Header = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Container as='header' px={['0']} maxW='container.2xl'>
      <Box
        as='nav'
        bg='gray.50'
        p='2'
        display='flex'
        alignItems='center'
        gap='4'
      >
        <Box
          as='button'
          onClick={onOpen}
          display='grid'
          placeItems='center'
          borderRadius='lg'
        >
          <Icon as={AiOutlineMenu} boxSize='8' color='gray.600' />
        </Box>
        <Image
          boxSize='8'
          src={logoIcon}
          alt='bite diary small logo'
          borderRadius='lg'
          border='2px solid rgba(72, 135, 54,0.4)'
          ms='auto'
          p='1'
        />
        <Image
          src={brandName}
          maxW='48'
          alt='bite diary brand name small'
          borderRadius='md'
        />
      </Box>
      <Drawer isOpen={isOpen} placement='top' onClose={onClose} color>
        <DrawerOverlay />
        <DrawerContent bg='gray.50' color='gray.600'>
          <DrawerCloseButton />
          <DrawerBody p='0'>
            <UnorderedList
              textAlign='center'
              styleType='none'
              m='0'
              fontSize='lg'
              fontWeight='bold'
              letterSpacing='wide'
            >
              <Link _hover={{ textDecoration: 'none' }}>
                <ListItem py='5'>Home</ListItem>
              </Link>
              <Link _hover={{ textDecoration: 'none' }}>
                <ListItem py='5'>About</ListItem>
              </Link>
              <Link _hover={{ textDecoration: 'none' }}>
                <ListItem py='5'>Sign in</ListItem>
              </Link>
              <ListItem py='2'>
                <ButtonStyle>
                  <Link _hover={{ textDecoration: 'none' }}>
                    Create New Account
                  </Link>
                </ButtonStyle>
              </ListItem>
            </UnorderedList>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Container>
  );
};

export default Header;
