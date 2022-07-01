import {
  Heading,
  Text,
  ListItem,
  OrderedList,
  Box,
  FormControl,
  FormLabel,
  Input,
  Icon,
} from '@chakra-ui/react';

import { AiOutlineCheck } from 'react-icons/ai';

const cardStyles = {
  bg: 'green.200',
  border: '1px solid rgba(72, 135, 54,0.2)',
  shadow: 'base',
  p: '2',
  mx: '1',
  mb: '2',
  borderRadius: 'sm',
};

const InstructionsList = () => {
  return (
    <Box>
      <Box
        {...cardStyles}
        maxH={['15vh']}
        mb='4'
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
        <OrderedList w='full' h='full' display='flex' flexWrap='wrap' m='0'>
          <Box
            {...cardStyles}
            p='1'
            px='2'
            m='1'
            borderWidth='1px'
            bg='gray.100'
            w='full'
          >
            <ListItem ms='5'>
              <Text>Ingredien</Text>
            </ListItem>
          </Box>
        </OrderedList>
      </Box>
      <FormControl
        display='flex'
        justifyContent='center'
        alignItems='center'
        gap='2'
      >
        <FormLabel htmlFor='title' m='0'>
          <Input id='title' placeholder='Add Instruction' />
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

export default InstructionsList;
