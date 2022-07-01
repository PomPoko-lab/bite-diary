import { Box, ListItem, Text } from '@chakra-ui/react';

const IngredientItem = ({ item }) => {
  const cardStyles = {
    bg: 'green.200',
    border: '1px solid rgba(72, 135, 54,0.3)',
    shadow: 'base',
    p: '2',
    mx: '1',
    mb: '2',
    borderRadius: 'sm',
  };

  return (
    <Box {...cardStyles} p='1' px='2' m='1' borderWidth='1px' bg='gray.100'>
      <ListItem>
        <Text>{item}</Text>
      </ListItem>
    </Box>
  );
};

export default IngredientItem;
