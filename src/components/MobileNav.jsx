import {
  Container,
  Box,
  Heading,
  UnorderedList,
  ListItem,
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
} from '@chakra-ui/react/';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../store/UserContext';

import { AiOutlineMenu } from 'react-icons/ai';
import logoIcon from '../assets/smallIcon.webp';
import brandName from '../assets/brandName.webp';

const MobileNav = () => {
  return (
    <Box>
      <Box bg='gray.50' p='1' display='flex' alignItems='center' gap='4'>
        <Box
          as='button'
          onClick={onOpen}
          display='grid'
          placeItems='center'
          borderRadius='lg'
          bg='green.500'
          p='2'
        >
          <Icon as={AiOutlineMenu} boxSize='6' color='gray.100' />
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
        <Link as={RouterLink} to='/'>
          <Image
            src={brandName}
            maxW='48'
            alt='bite diary brand name small'
            borderRadius='md'
          />
        </Link>
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
              <Link
                as={RouterLink}
                to='/'
                onClick={onClose}
                _hover={{ textDecoration: 'none' }}
              >
                <ListItem py='5' _hover={{ bg: 'gray.200' }}>
                  Home
                </ListItem>
              </Link>
              <Link
                as={RouterLink}
                to='about'
                onClick={onClose}
                _hover={{ textDecoration: 'none' }}
              >
                <ListItem py='5' _hover={{ bg: 'gray.200' }}>
                  About
                </ListItem>
              </Link>
              <ListItem py='3' px='2'>
                <Button
                  as='button'
                  onClick={handleLogOutClick}
                  mt='auto'
                  w='full'
                  colorScheme='green'
                >
                  {user ? 'Sign Out' : 'Sign In'}
                </Button>
              </ListItem>
            </UnorderedList>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default MobileNav;
