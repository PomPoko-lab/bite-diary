import { Box, Image, Text } from '@chakra-ui/react/';

import vnComTam from '../assets/vn-comtam.jpg';

const FoodItem = () => {
  return (
    <Box
      as='figure'
      boxSize='200px'
      mx='auto'
      borderRadius='lg'
      overflow='hidden'
      shadow='dark-lg'
      border='1px solid rgba(0,0,0, 0.5)'
      position='relative'
    >
      <Image
        src={vnComTam}
        alt='image of the food recipe'
        fit='cover'
        w='100%'
        h='100%'
        opacity='90%'
      />
      <Box
        boxSize='full'
        position='absolute'
        top='0'
        left='0'
        bg='linear-gradient(transparent, rgba(0,0,0, 0.90))'
      />
      <Text
        as='figcaption'
        position='absolute'
        bottom='2'
        left='3'
        color='gray.100'
      >
        Com Tam Thit Nuong
      </Text>
    </Box>
  );
};

export default FoodItem;
