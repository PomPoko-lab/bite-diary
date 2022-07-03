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

  const validateInputs = () => {
    if (!email.includes('@') && !email.includes('.com')) {
      throw Error('Invalid email entered.');
    }
    if (password.length < 6) {
      throw Error('Password must contain at least 6 valid characters.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      validateInputs();
      setIsLoading(true);
      setError(null);
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;
      dispatch({ type: 'LOGIN', payload: user });
      navigate('/');
    } catch (error) {
      setError(error.message);
      setPassword('');
      setIsLoading(false);
    }
  };

  return (
    <Container
      display='flex'
      flexDirection='column'
      gap='4'
      alignItems='center'
      h='90vh'
    >
      <Text textAlign='center' mt='6' mb='8' color='gray.400' fontWeight='bold'>
        Find, log, post recipes, and feel less overwhelmed about cooking.
      </Text>

      <form
        style={{ width: '100%', marginBottom: '1em' }}
        onSubmit={handleSubmit}
        id='sign-in'
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
      </form>
      <Text color='orange.400' textDecoration='underline'>
        Forgot Password?
      </Text>
      <Link as={RouterLink} to='/register' color='gray.500'>
        Create New Account
      </Link>
      {error && <Text color='red.400'>{error}</Text>}
      <Button
        as='button'
        mt='auto'
        w='full'
        type='submit'
        form='sign-in'
        colorScheme='green'
        isLoading={isLoading}
      >
        Sign In
      </Button>
    </Container>
  );
};

export default SignIn;
