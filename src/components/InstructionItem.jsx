import { Box, ListItem, Text } from '@chakra-ui/react';

const cardStyles = {
  bg: 'gray.50',
  border: '1px solid rgba(0,0,0,0.1)',
  shadow: 'base',
  p: '1',
  px: '2',
  mx: '1',
  mb: '2',
  mt: '1',
  borderRadius: '1px',
  w: 'full',
};

const InstructionItem = ({ step }) => {
  return (
    <Box {...cardStyles}>
      <ListItem ms='5'>
        <Text>{step}</Text>
      </ListItem>
    </Box>
  );
};

export default InstructionItem;
