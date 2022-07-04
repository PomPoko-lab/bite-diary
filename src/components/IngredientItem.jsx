import { Box, ListItem, Text } from '@chakra-ui/react';

const IngredientItem = ({ item }) => {
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
  };

  return (
    <Box {...cardStyles}>
      <ListItem>
        <Text>{item}</Text>
      </ListItem>
    </Box>
  );
};

export default IngredientItem;
