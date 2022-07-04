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
import { useEffect, useState, useContext, lazy, Suspense } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { UserContext } from '../store/UserContext';

// Firebase imports
import { db } from '../firebase/config';
import { doc, getDoc } from 'firebase/firestore';

const DeleteItemModal = lazy(() => import('../components/DeleteItemModal'));

const cardStyles = {
  bg: 'gray.100',
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
      .catch((error) => console.error(error.message))
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
      <Container as='main' px={['0']} maxW='container.md'>
        <Suspense
          fallback={
            <Spinner
              speed='1s'
              m='auto'
              mt='5em'
              display='block'
              size='xl'
              color='green.400'
              emptyColor='gray.100'
            />
          }
        >
          <Box
            as='section'
            maxH={['16em', null, '20em', '25em', '40em']}
            overflow='hidden'
            position='relative'
            mb='6'
          >
            <Heading
              {...headingStyles}
              bg='green.500'
              color='gray.50'
              p='4'
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
              loading='lazy'
            />
            {/* Delete Button */}
            {user && <DeleteItemModal />}
          </Box>
          <Box as='section'>
            <Heading as='h3' {...headingStyles}>
              Ingredients
            </Heading>
            <Box {...cardStyles} mt='0' mb='10'>
              <UnorderedList
                listStyleType='none'
                m='0'
                textAlign='center'
                color='gray.700'
                fontWeight='bold'
                display='flex'
                flexWrap='wrap'
                alignItems='center'
                gap='4'
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
            <Box {...cardStyles} mt='0' mb='8'>
              <OrderedList color='gray.700' spacing='6'>
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
        </Suspense>
      </Container>
    );
};

export default Item;
