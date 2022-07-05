import { Box, ListItem, Text } from '@chakra-ui/react';
import { useState } from 'react';

import EditInput from './EditInput';

const IngredientItem = ({ item, handleSubmitEdit, itemIndex }) => {
  const [editItemShow, setEditItemShow] = useState(false);

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

  const handleClick = () => {
    setEditItemShow(!editItemShow);
  };

  return (
    <>
      <Box {...cardStyles} onClick={handleClick}>
        <ListItem>
          <Text>{item}</Text>
        </ListItem>
      </Box>
      <EditInput
        onToggle={editItemShow}
        handleSubmitEdit={handleSubmitEdit}
        itemIndex={itemIndex}
      />
    </>
  );
};

export default IngredientItem;
