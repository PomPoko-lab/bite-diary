import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/react';

const SearchBar = ({ search, setSearch }) => {
  return (
    <InputGroup
      position='absolute'
      bottom='0'
      left='50%'
      transform='auto'
      translateX='-50%'
      translateY='50%'
      maxW={['18em', '19em', '22em', '25em']}
    >
      <InputLeftAddon children='Search for' color='gray.400' bg='gray.50' />
      <Input
        color='green.400'
        bg='gray.50'
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </InputGroup>
  );
};

export default SearchBar;
