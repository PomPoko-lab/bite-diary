import { Box, Icon, useDisclosure } from '@chakra-ui/react';
import { lazy, Suspense } from 'react';
import { AiFillDelete } from 'react-icons/ai';

const DeleteItemModal = lazy(() => import('./DeleteItemModal'));

const DeleteButton = () => {
  const { onOpen, onClose, isOpen } = useDisclosure();

  return (
    <>
      <Box
        as='button'
        position='absolute'
        right='1em'
        top='9em'
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
      <Suspense fallback={<p>Loading..</p>}>
        <DeleteItemModal onOpen={onOpen} onClose={onClose} isOpen={isOpen} />
      </Suspense>
    </>
  );
};

export default DeleteButton;
