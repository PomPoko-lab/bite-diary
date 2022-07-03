import { Box, Image, Text } from '@chakra-ui/react/';

const FoodItem = ({ item }) => {
  return (
    <Box
      as='figure'
      boxSize='220px'
      borderRadius='lg'
      overflow='hidden'
      shadow='base'
      borderWidth='1px 0 0 0'
      borderStyle='solid'
      borderColor='white'
      position='relative'
      zIndex='-1'
    >
      <Image
        src={item.img}
        alt='image of the food recipe'
        fit='cover'
        w='100%'
        h='100%'
        opacity='90%'
        loading='lazy'
      />
      <Box
        boxSize='full'
        position='absolute'
        top='0'
        left='0'
        bg='linear-gradient(transparent, rgba(0,0,0, 0.9) 90%)'
      />
      <Text
        as='figcaption'
        position='absolute'
        bottom='2'
        left='3'
        color='gray.200'
        letterSpacing='wide'
      >
        {item.title}
      </Text>
    </Box>
  );
};

export default FoodItem;
