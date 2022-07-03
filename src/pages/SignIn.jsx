import {
  Container,
  Text,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Link,
  Button,
} from '@chakra-ui/react';
import { useState, useContext } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../store/UserContext';

import ButtonStyle from '../components/ButtonStyle';

// Firebase imports
import { auth } from '../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';

const SignIn = () => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const { dispatch } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;
      dispatch({ type: 'LOGIN', payload: user });
      setEmail('');
      navigate('/');
    } catch (error) {
      setError(error.message);
    } finally {
      setPassword('');
      setIsLoading(false);
    }
  };

  return (
    <Container
      display='flex'
      flexDirection='column'
      alignItems='center'
      h='90vh'
    >
      <Text textAlign='center' mt='6' mb='8' color='gray.400' fontWeight='bold'>
        Find, log, post recipes, and feel less overwhelmed about cooking.
      </Text>

      <form
        style={{ width: '100%', marginBottom: '1em' }}
        onSubmit={handleSubmit}
      >
        <FormControl>
          <FormLabel htmlFor='email' />
          <Input
            variant='outline'
            placeholder='Email'
            id='email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormHelperText mb='1'>We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor='password' />
          <Input
            variant='outline'
            placeholder='Password'
            mb='3'
            id='password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        {/* <ButtonStyle
          styles={{
            color: 'green.900',
            fontWeight: 'bold',
            bg: 'white',
            m: '0',
            border: '2px solid rgba(72, 135, 54,0.6)',
          }}
        >
          {!isLoading ? <Text>Sign In</Text> : <Spinner speed='1s' />}
        </ButtonStyle> */}
        <Button
          as='button'
          mt='auto'
          w='full'
          colorScheme='green'
          isLoading={isLoading}
        >
          Sign In
        </Button>
      </form>
      <Text color='orange.400' textDecoration='underline'>
        Forgot Password?
      </Text>
      {error && (
        <Text
          m='2'
          p='2'
          color='gray.100'
          bg='red.300'
          fontSize='lg'
          borderRadius='md'
        >
          {error}
        </Text>
      )}
      <ButtonStyle styles={{ mt: 'auto' }}>
        <Link
          as={RouterLink}
          to='/register'
          _hover={{ textDecoration: 'none' }}
        >
          Create New Account
        </Link>
      </ButtonStyle>
    </Container>
  );
};

export default SignIn;
