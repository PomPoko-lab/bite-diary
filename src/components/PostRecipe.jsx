import {
  Icon,
  Drawer,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
  DrawerOverlay,
  useDisclosure,
  Input,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';

import { AiFillPlusCircle } from 'react-icons/ai';

const PostRecipe = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Icon
        position='fixed'
        right={['1em']}
        bottom={['1em']}
        boxSize={['3em']}
        color='green.400'
        _hover={{ filter: 'brightness(1.1)', cursor: 'pointer' }}
        as={AiFillPlusCircle}
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Post a New Recipe</DrawerHeader>
          <DrawerBody>
            <form style={{ width: '100%' }}>
              <FormControl>
                <FormLabel htmlFor='title'>
                  <Input id='title' placeholder='Name'></Input>
                </FormLabel>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor='title'>
                  <Input id='title' placeholder='Name'></Input>
                </FormLabel>
              </FormControl>
            </form>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default PostRecipe;
