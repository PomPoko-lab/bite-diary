import { Input, Box, Icon } from '@chakra-ui/react';
import { useRef } from 'react';

import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';

const EditInput = ({ onToggle, handleSubmitEdit, itemIndex }) => {
  const inputRef = useRef();

  const onConfirm = () => {
    handleSubmitEdit(itemIndex, inputRef.current.value);
  };

  return (
    <Box
      display={`${onToggle ? 'flex' : 'none'}`}
      w='full'
      alignItems='center'
      gap='2'
      mb='2'
    >
      <Input ref={inputRef} bg='gray.50' ms='1' />
      <Icon
        as={AiOutlineCheck}
        color='green.400'
        boxSize='6'
        onClick={onConfirm}
      />
      <Icon as={AiOutlineClose} color='red.400' boxSize='6' />
    </Box>
  );
};

export default EditInput;
