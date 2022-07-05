import {
  UnorderedList,
  Box,
  FormControl,
  FormLabel,
  Input,
  Icon,
} from '@chakra-ui/react';
import { useRef } from 'react';

import { AiOutlineCheck } from 'react-icons/ai';

import IngredientItem from './IngredientItem';

const cardStyles = {
  bg: 'gray.100',
  border: '1px solid rgba(0,0,0,0.2)',
  shadow: 'base',
  p: '2',
  mx: '1',
  mb: '2',
  borderRadius: 'sm',
};

const IngredientsList = ({ ingredients, setIngredients }) => {
  const inputRef = useRef(null);

  const handleSubmitEdit = (itemIndex, newEdit) => {
    setIngredients((prev) => {
      const newArr = prev.map((ing, index) => {
        return index === itemIndex ? newEdit : ing;
      });
      return newArr;
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const currentInput = inputRef.current.value;
    if (!currentInput) return;
    setIngredients((prev) => [...prev, currentInput.trim()]);
    inputRef.current.value = '';
    inputRef.current.focus();
  };

  return (
    <Box>
      <Box
        {...cardStyles}
        mb='4'
        h={['15vh']}
        overflowY='auto'
        __css={{
          '&::-webkit-scrollbar': {
            w: '4px',
          },
          '&::-webkit-scrollbar-track': {
            w: '6px',
          },
          '&::-webkit-scrollbar-thumb': {
            borderRadius: 'lg',
            bg: 'gray.100',
          },
        }}
      >
        <UnorderedList
          w='full'
          display='flex'
          flexWrap='wrap'
          m='0'
          listStyleType='none'
        >
          {ingredients.map((item, i) => (
            <IngredientItem
              key={`item-${i}`}
              item={item}
              itemIndex={i}
              handleSubmitEdit={handleSubmitEdit}
            />
          ))}
          {/* <IngredientItem /> */}
        </UnorderedList>
      </Box>
      <FormControl
        display='flex'
        justifyContent='center'
        alignItems='center'
        gap='2'
      >
        <FormLabel htmlFor='title' m='0'>
          <Input id='title' placeholder='Add Ingredient' ref={inputRef} />
        </FormLabel>
        <Box
          as='button'
          display='grid'
          placeItems='center'
          boxSize='35px'
          bg='green.500'
          color='gray.50'
          borderRadius='lg'
          p='1'
          m='1'
          _hover={{ filter: 'brightness(1.05)', cursor: 'pointer' }}
          onClick={handleClick}
        >
          <Icon as={AiOutlineCheck} boxSize='full' />
        </Box>
      </FormControl>
    </Box>
  );
};

export default IngredientsList;
