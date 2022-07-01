import {
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Box,
  FormControl,
  FormLabel,
  Input,
  Icon,
} from '@chakra-ui/react';

import { AiOutlineCheck } from 'react-icons/ai';

const cardStyles = {
  bg: 'green.200',
  border: '1px solid rgba(72, 135, 54,0.3)',
  shadow: 'base',
  p: '2',
  mx: '1',
  mb: '2',
  borderRadius: 'sm',
};

const IngredientsList = () => {
  return (
    <Box>
      <Box
        {...cardStyles}
        mb='4'
        maxH={['15vh']}
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
          h='full'
          display='flex'
          flexWrap='wrap'
          m='0'
          listStyleType='none'
        >
          <Box
            {...cardStyles}
            p='1'
            px='2'
            m='1'
            borderWidth='1px'
            bg='gray.100'
          >
            <ListItem>
              <Text>Ingredien</Text>
            </ListItem>
          </Box>
        </UnorderedList>
      </Box>
      <FormControl
        display='flex'
        justifyContent='center'
        alignItems='center'
        gap='2'
      >
        <FormLabel htmlFor='title' m='0'>
          <Input id='title' placeholder='Add Ingredient' />
        </FormLabel>
        <Box
          display='grid'
          placeItems='center'
          boxSize='35px'
          bg='green.500'
          color='gray.50'
          borderRadius='lg'
          p='1'
          m='1'
          _hover={{ filter: 'brightness(1.05)', cursor: 'pointer' }}
        >
          <Icon as={AiOutlineCheck} boxSize='full' />
        </Box>
      </FormControl>
    </Box>
  );
};

export default IngredientsList;
