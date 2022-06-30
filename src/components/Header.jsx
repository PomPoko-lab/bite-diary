import {
  Container,
  Box,
  UnorderedList,
  ListItem,
  Link,
  Icon,
  useDisclosure,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerOverlay,
  DrawerCloseButton,
} from '@chakra-ui/react/';

import { AiOutlineMenu } from 'react-icons/ai';

// Needs profile, favorites, and heading(h1)

const Header = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Container as='header' px={['0']} maxW='container.2xl'>
      <Box
        bg='teal.700'
        display='flex'
        justifyContent='center'
        alignItems='center'
        onClick={onOpen}
        position={['fixed']}
        top='5'
        left='5'
        p='2'
        borderRadius='lg'
        zIndex='1'
      >
        <Icon as={AiOutlineMenu} boxSize='8' color='gray.100' />
      </Box>
      <Box as='nav'></Box>
      <Drawer isOpen={isOpen} placement='top' onClose={onClose} color>
        <DrawerOverlay />
        <DrawerContent bg='teal.700' color='gray.100'>
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
              <Link _hover={{ style: { textDecoration: 'none' } }}>
                <ListItem py='5'>Home</ListItem>
              </Link>
              <Link _hover={{ style: { textDecoration: 'none' } }}>
                <ListItem py='5'>About</ListItem>
              </Link>
              <Link _hover={{ style: { textDecoration: 'none' } }}>
                <ListItem py='5'>Sign in</ListItem>
              </Link>
              <Link _hover={{ style: { textDecoration: 'none' } }}>
                <ListItem py='5'>Create New Account</ListItem>
              </Link>
            </UnorderedList>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Container>
  );
};

export default Header;
