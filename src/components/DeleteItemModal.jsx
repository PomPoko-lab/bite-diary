import {
  Box,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Container,
  Text,
  Button,
} from '@chakra-ui/react';
import { useState } from 'react';

import { AiFillDelete } from 'react-icons/ai';

import { useParams, useNavigate } from 'react-router-dom';

// Firebase imports
import { db } from '../firebase/config';
import { doc, deleteDoc } from 'firebase/firestore';

const DeleteItemModal = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDeleteClick = async () => {
    setIsLoading(true);
    try {
      await deleteDoc(doc(db, 'recipes', `${id}`));
      navigate('/');
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Box
        as='button'
        position='absolute'
        right='1em'
        top='1em'
        display='grid'
        placeItems='center'
        p='2'
        bg='gray.100'
        shadow='base'
        borderRadius='full'
        transition='all 300ms'
        _hover={{ cursor: 'pointer', transform: 'scale(1.1)' }}
        onClick={onOpen}
      >
        <Icon as={AiFillDelete} color='red.400' boxSize='8' />
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete Recipe</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Container>
              <Text mb='6'>Are you sure you want to delete this recipe?</Text>
              {isLoading ? (
                <Button
                  isLoading
                  loadingText='Removing..'
                  mb='4'
                  me='4'
                  colorScheme='red'
                >
                  Delete it
                </Button>
              ) : (
                <Button
                  mb='4'
                  me='4'
                  colorScheme='red'
                  onClick={handleDeleteClick}
                >
                  Delete it
                </Button>
              )}
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

export default DeleteItemModal;
