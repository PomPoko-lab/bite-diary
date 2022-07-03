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
  Text,
  Spinner,
  Button,
} from '@chakra-ui/react';
import { useState, useContext, lazy, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';

// Firebase imports
import { db, storage } from '../firebase/config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';

// Styling Imports
import { AiFillPlusCircle } from 'react-icons/ai';

import { UserContext } from '../store/UserContext';

// Component Imports
const IngredientsList = lazy(() => import('./IngredientsList'));
const InstructionsList = lazy(() => import('./InstructionsList'));

const PostRecipe = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();

  const [recTitle, setRecTitle] = useState('');
  const [recImg, setRecImg] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);

  const [imgError, setImgError] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');

  const { user } = useContext(UserContext);

  const handleImgChange = (e) => {
    setImgError(null);
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    if (!file.type.includes('image')) {
      setImgError('Please select an image.');
      return;
    }
    if (file.size > 1000000) {
      setImgError('File size cannot exceed 1mb.');
      return;
    }
    setRecImg(file);
  };

  const validateInputs = () => {
    if (recTitle.length < 4) {
      throw Error('Recipe name must be at least 4 characters.');
    }
    if (!recImg) {
      throw Error('Please select an image.');
    }
    if (ingredients.length < 1) {
      throw Error('Please add at least 1 ingredient.');
    }
    if (instructions.length < 1) {
      throw Error('Please add at least 1 step (instruction).');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      validateInputs();
      setIsLoading(true);
      // upload Img and stores img src into imgSrc
      const dbPath = ref(storage, `recImages/${recImg.name}`);
      const uploadRes = await uploadBytes(dbPath, recImg);
      const imgSrc = await getDownloadURL(uploadRes.ref);

      // Add new document to db
      const submission = {
        title: recTitle,
        img: imgSrc,
        ingredients,
        instructions,
      };
      const dbRef = collection(db, 'recipes');
      const addRes = await addDoc(dbRef, submission);

      // Closes drawer and resets inputs
      setIsError(null);
      onClose();
      setIngredients([]);
      setInstructions([]);
      setRecTitle('');
      setRecImg('');
      navigate(`recipes/${addRes.id}`);
    } catch (error) {
      setIsError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (!user) return;

  return (
    <>
      <Icon
        zIndex='1'
        position='fixed'
        right={['1em']}
        bottom={['4em']}
        boxSize={['3em']}
        color='green.400'
        bg='gray.50'
        borderRadius='full'
        shadow='base'
        _hover={{ filter: 'brightness(1.1)', cursor: 'pointer' }}
        as={AiFillPlusCircle}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        onCloseComplete={() => {
          setIsError(null);
          setIngredients([]);
          setInstructions([]);
          setRecTitle('');
          setRecImg('');
        }}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Post a New Recipe</DrawerHeader>
          <DrawerBody p='0' h='100vh'>
            <Suspense
              fallback={
                <Spinner
                  speed='1s'
                  m='auto'
                  mt='5em'
                  display='block'
                  size='xl'
                  color='green.400'
                  emptyColor='gray.100'
                />
              }
            >
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
                        value={recTitle}
                        onChange={(e) => {
                          setRecTitle(e.target.value);
                        }}
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
                        onChange={handleImgChange}
                      />
                      {imgError && (
                        <Text
                          color='gray.100'
                          bg='red.300'
                          p='2'
                          my='2'
                          borderRadius='md'
                        >
                          {imgError}
                        </Text>
                      )}
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
                  {isError && (
                    <Text
                      color='gray.100'
                      bg='red.300'
                      p='2'
                      my='2'
                      borderRadius='md'
                    >
                      {isError}
                    </Text>
                  )}
                  <Button
                    as='button'
                    mt='auto'
                    type='submit'
                    colorScheme='green'
                    isLoading={isLoading}
                    loadingText='Submitting'
                  >
                    Submit
                  </Button>
                </Box>
              </form>
            </Suspense>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default PostRecipe;
