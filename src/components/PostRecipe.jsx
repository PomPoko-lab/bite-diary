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
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Heading,
} from '@chakra-ui/react';

import { useState } from 'react';

import { AiFillPlusCircle } from 'react-icons/ai';

import ButtonStyle from './ButtonStyle';
import IngredientsList from './IngredientsList';
import InstructionsList from './InstructionsList';

const PostRecipe = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { formState, setFormState } = useState();

  return (
    <>
      <Icon
        position='fixed'
        right={['1em']}
        bottom={['4em']}
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
          <DrawerBody p='0' h='100vh'>
            <form style={{ width: '100%', height: '100%' }}>
              <Box
                display='flex'
                flexDirection='column'
                gap='4'
                color='gray.500'
                overflow='hidden'
                p='3'
                pt='2'
                h='full'
              >
                <FormControl>
                  <FormLabel htmlFor='title'>
                    <Input id='title' placeholder='Name' />
                  </FormLabel>
                </FormControl>
                <FormControl px='1'>
                  <FormLabel htmlFor='img'>
                    Image
                    <input
                      style={{ marginTop: '5px' }}
                      id='img'
                      placeholder='Image'
                      type='file'
                    />
                  </FormLabel>
                </FormControl>
                {/* Start of lists*/}
                <Accordion allowToggle>
                  <AccordionItem>
                    <AccordionButton position='relative'>
                      <Heading
                        as='h4'
                        fontFamily='Nunito'
                        fontSize='md'
                        display='inline-block'
                        my='auto'
                      >
                        Ingredients
                      </Heading>
                      <AccordionIcon position='absolute' right='2' top='2' />
                    </AccordionButton>
                    <AccordionPanel py='6'>
                      <IngredientsList />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionButton position='relative'>
                      <Heading
                        as='h4'
                        fontFamily='Nunito'
                        fontSize='md'
                        display='inline-block'
                        my='auto'
                      >
                        Instructions
                      </Heading>
                      <AccordionIcon position='absolute' right='2' top='2' />
                    </AccordionButton>
                    <AccordionPanel py='6'>
                      <InstructionsList />
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                {/* End of lists */}
                <ButtonStyle styles={{ mt: 'auto' }}>Submit</ButtonStyle>
              </Box>
            </form>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default PostRecipe;
