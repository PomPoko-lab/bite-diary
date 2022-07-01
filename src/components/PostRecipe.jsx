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

import { useState, useRef, useEffect } from 'react';

import { AiFillPlusCircle } from 'react-icons/ai';

import ButtonStyle from './ButtonStyle';
import IngredientsList from './IngredientsList';
import InstructionsList from './InstructionsList';

const PostRecipe = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const titleRef = useRef('');
  const imgRef = useRef('');

  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);

  const [formState, setFormState] = useState(null);

  const resetInputs = () => {
    setIngredients([]);
    setInstructions([]);
    titleRef.current.value = '';
    imgRef.current.value = '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState({
      title: titleRef.current.value,
      img: imgRef.current.value,
      ingredients,
      instructions,
    });
    onClose();
  };

  useEffect(() => {
    if (!formState) return;
    console.log('submitted form');
    console.log(formState);
    resetInputs();
  }, [formState]);

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
            <form
              style={{ width: '100%', height: '100%' }}
              onSubmit={handleSubmit}
            >
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
                    <Input
                      id='title'
                      placeholder='Recipe Name'
                      ref={titleRef}
                    />
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
                      ref={imgRef}
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
                      <IngredientsList
                        ingredients={ingredients}
                        setIngredients={setIngredients}
                      />
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
                      <InstructionsList
                        instructions={instructions}
                        setInstructions={setInstructions}
                      />
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
