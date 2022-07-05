import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Container,
  Text,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

// Firebase imports
import { db, storage } from '../firebase/config';
import { doc, setDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import IngredientsList from './IngredientsList';
import InstructionsList from './InstructionsList';

const EditItemModal = ({ data, isOpen, onOpen, onClose }) => {
  const [recTitle, setRecTitle] = useState('');
  const [recImg, setRecImg] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);

  const [imgChanged, setImgChanged] = useState(false);

  const [imgError, setImgError] = useState(null);

  const [isError, setIsError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

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
      let imgSrc = recImg;
      if (imgChanged) {
        const dbPath = ref(storage, `recImages/${recImg.name}`);
        const uploadRes = await uploadBytes(dbPath, recImg);
        imgSrc = await getDownloadURL(uploadRes.ref);
      }

      // New created document to db

      const submission = {
        title: recTitle,
        img: imgSrc,
        ingredients,
        instructions,
      };
      console.log(submission);
      const dbRef = doc(db, 'recipes', `${id}`);
      await setDoc(dbRef, submission);

      navigate(0);
    } catch (error) {
      setIsError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setRecTitle(data.title);
    setRecImg(data.img);
    setIngredients(data.ingredients);
    setInstructions(data.instructions);
  }, [data]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Recipe</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Container as='section'>
              <form
                id='edit-item'
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
                  mb='5'
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
                        onChange={(e) => {
                          handleImgChange(e);
                          setImgChanged(true);
                        }}
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

                  <Heading
                    as='h4'
                    fontFamily='Nunito'
                    fontSize='md'
                    display='inline-block'
                    my='auto'
                  >
                    Ingredients
                  </Heading>

                  <IngredientsList
                    ingredients={ingredients}
                    setIngredients={setIngredients}
                  />

                  <Heading
                    as='h4'
                    fontFamily='Nunito'
                    fontSize='md'
                    display='inline-block'
                    my='auto'
                  >
                    Instructions
                  </Heading>

                  <InstructionsList
                    instructions={instructions}
                    setInstructions={setInstructions}
                  />

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
                </Box>
              </form>
              <Button
                isLoading={isLoading}
                loadingText='Submitting..'
                type='submit'
                form='edit-item'
                mb='4'
                me='4'
                colorScheme='blue'
              >
                Submit Edit
              </Button>
              <Button mb='4' onClick={onClose}>
                Cancel
              </Button>
            </Container>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditItemModal;
