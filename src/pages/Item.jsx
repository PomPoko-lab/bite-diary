import {
  Container,
  Box,
  Image,
  Heading,
  UnorderedList,
  OrderedList,
  ListItem,
  Spinner,
} from '@chakra-ui/react';
import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { UserContext } from '../store/UserContext';

import DeleteItemModal from '../components/DeleteItemModal';

// Firebase imports
import { db } from '../firebase/config';
import { doc, getDoc } from 'firebase/firestore';

const cardStyles = {
  bg: 'gray.100',
  border: '1px solid rgba(0,0,0, 0.3)',
  shadow: 'base',
  p: '6',
  mx: '3',
  mb: '4',
  borderRadius: 'sm',
};

const headingStyles = {
  fontFamily: 'Nunito',
  mb: '2',
  p: '2',
  color: 'gray.700',
};

const Item = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { user } = useContext(UserContext);

  // fetches document from db
  useEffect(() => {
    setIsLoading(true);
    const ref = doc(db, 'recipes', id);
    getDoc(ref)
      .then((document) => {
        if (document.exists()) {
          setData(document.data());
        } else {
          navigate('404');
        }
      })
      .catch((error) => console.error(error.messagE))
      .finally(() => setIsLoading(false));
  }, [id, navigate]);

  // Scroll to top on open
  useEffect(
    () =>
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      }),
    []
  );

  if (isLoading)
    return (
      <Spinner
        speed='1s'
        m='auto'
        display='block'
        size='xl'
        color='green.400'
        emptyColor='gray.100'
        mt='10em'
      />
    );

  if (!isLoading && data)
    return (
      <Container as='main' px={['0']}>
        {/* Delete Button */}
        <Box maxH={['15em']} overflow='hidden' position='relative'>
          <Heading
            {...headingStyles}
            bg='green.400'
            color='gray.50'
            pb='1'
            mb='0'
          >
            {data.title}
          </Heading>
          <Image
            src={data.img}
            alt='Image of recipe'
            h='full'
            w='full'
            fit='fill'
            filter='brightness(0.8)'
          />
          {user && <DeleteItemModal />}
        </Box>
        <Box as='article'>
          <Heading as='h3' {...headingStyles}>
            Ingredients
          </Heading>
          <Box as='section' {...cardStyles}>
            <UnorderedList
              listStyleType='none'
              m='0'
              textAlign='center'
              color='gray.700'
              fontWeight='bold'
              display='flex'
              flexWrap='wrap'
              alignItems='center'
              gap='2'
            >
              {data.ingredients.map((ingItem, i) => (
                <ListItem
                  key={`ingId-${i}`}
                  p='3'
                  bg='gray.50'
                  shadow='base'
                  borderRadius='sm'
                >
                  {ingItem}
                </ListItem>
              ))}
            </UnorderedList>
          </Box>
          <Heading as='h3' {...headingStyles}>
            Instructions
          </Heading>
          <Box as='section' {...cardStyles}>
            <OrderedList color='gray.700' spacing='2'>
              {data.instructions.map((ingItem, i) => (
                <ListItem
                  key={`insId-${i}`}
                  p='3'
                  bg='gray.50'
                  shadow='base'
                  borderRadius='sm'
                >
                  {ingItem}
                </ListItem>
              ))}
            </OrderedList>
          </Box>
        </Box>
      </Container>
    );
};

export default Item;
