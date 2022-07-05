const ItemButtons = () => {
  return (
    <Box
      as='button'
      position='absolute'
      right='1em'
      top='5em'
      display='grid'
      placeItems='center'
      p='2'
      bg='gray.100'
      shadow='base'
      borderRadius='full'
      transition='all 300ms'
      _hover={{ cursor: 'pointer', transform: 'scale(1.1)' }}
      onClick={onOpen}
    >
      <Icon as={AiFillEdit} color='blue.600' boxSize='8' />
    </Box>
  );
};

export default ItemButtons;
