import {
  OrderedList,
  Box,
  FormControl,
  FormLabel,
  Input,
  Icon,
} from '@chakra-ui/react';
import { useRef } from 'react';

import { AiOutlineCheck } from 'react-icons/ai';

import InstructionItem from './InstructionItem';

const cardStyles = {
  bg: 'green.200',
  border: '1px solid rgba(72, 135, 54,0.2)',
  shadow: 'base',
  p: '2',
  mx: '1',
  mb: '2',
  borderRadius: 'sm',
};

const InstructionsList = ({ instructions, setInstructions }) => {
  const inputRef = useRef(null);
  const handleClick = (e) => {
    e.preventDefault();
    const currentInput = inputRef.current.value;
    if (!currentInput) return;
    setInstructions((prev) => [...prev, currentInput.trim()]);
    inputRef.current.value = '';
    inputRef.current.focus();
  };
  return (
    <Box>
      <Box
        {...cardStyles}
        h={['15vh']}
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
        <OrderedList w='full' display='flex' flexWrap='wrap' m='0'>
          {instructions.map((step, i) => (
            <InstructionItem key={`step-${i}`} step={step} />
          ))}
        </OrderedList>
      </Box>
      <FormControl
        display='flex'
        justifyContent='center'
        alignItems='center'
        gap='2'
      >
        <FormLabel htmlFor='title' m='0'>
          <Input id='title' placeholder='Add Instruction' ref={inputRef} />
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
          onClick={handleClick}
        >
          <Icon as={AiOutlineCheck} boxSize='full' />
        </Box>
      </FormControl>
    </Box>
  );
};

export default InstructionsList;
