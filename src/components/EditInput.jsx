import { Input, Box, Icon } from '@chakra-ui/react';
import { useRef } from 'react';

import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';

const buttonStyles = {
  boxSize: '6',
  borderRadius: 'md',
  _hover: {
    bg: 'gray.50',
    cursor: 'pointer',
    transform: 'scale(1.2)',
  },
  transition: 'all 300ms',
};

const EditInput = ({ showEdit, onToggle, handleSubmitEdit, itemIndex }) => {
  const inputRef = useRef();

  const onConfirm = () => {
    handleSubmitEdit(itemIndex, inputRef.current.value);
  };

  return (
    <Box
      display={`${showEdit ? 'flex' : 'none'}`}
      w='full'
      alignItems='center'
      gap='2'
      mb='2'
    >
      <Input ref={inputRef} bg='gray.50' ms='1' />
      <Icon
        as={AiOutlineCheck}
        color='green.400'
        onClick={() => {
          if (inputRef.current.value) {
            onConfirm();
          }
          onToggle();
        }}
        {...buttonStyles}
      />
      <Icon
        as={AiOutlineClose}
        color='red.400'
        onClick={onToggle}
        {...buttonStyles}
      />
    </Box>
  );
};

export default EditInput;
