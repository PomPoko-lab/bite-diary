import { Box, Icon, useDisclosure } from '@chakra-ui/react';
import { lazy } from 'react';
import { AiFillEdit } from 'react-icons/ai';

const EditItemModal = lazy(() => import('../components/EditItemModal'));

const EditButton = ({ data }) => {
  const { onOpen, onClose, isOpen } = useDisclosure();

  return (
    <>
      <Box
        as='button'
        position='absolute'
        right='1em'
        top='5em'
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
        <Icon as={AiFillEdit} color='blue.600' boxSize='8' />
      </Box>
      <EditItemModal
        onOpen={onOpen}
        onClose={onClose}
        isOpen={isOpen}
        data={data}
      />
    </>
  );
};

export default EditButton;
