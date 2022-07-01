import { Box } from '@chakra-ui/react';

const ButtonStyle = (props) => {
  return (
    <Box
      as='button'
      bg='green.500'
      borderRadius='md'
      py='3'
      color='gray.50'
      _hover={{ cursor: 'pointer', filter: 'brightness(105%)' }}
      w='full'
      textAlign={'center'}
      {...props.styles}
    >
      {props.children}
    </Box>
  );
};

export default ButtonStyle;
