import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Container,
  Text,
  Button,
} from '@chakra-ui/react';
import { useState } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

// Firebase imports
import { db } from '../firebase/config';
import { doc, deleteDoc } from 'firebase/firestore';

const DeleteItemModal = ({ isOpen, onOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  const handleDeleteClick = async () => {
    try {
      setIsLoading(true);
      await deleteDoc(doc(db, 'recipes', `${id}`));
      navigate('/');
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Delete Recipe</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Container as='section'>
            <Text mb='6'>Are you sure you want to delete this recipe?</Text>
            <Button
              isLoading={isLoading}
              loadingText='Removing..'
              mb='4'
              me='4'
              colorScheme='red'
              onClick={handleDeleteClick}
            >
              Delete it
            </Button>
            <Button mb='4' onClick={onClose}>
              Cancel
            </Button>
          </Container>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default DeleteItemModal;
