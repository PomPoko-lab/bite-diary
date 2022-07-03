import {
  Container,
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Link,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const SignUp = () => {
  return (
    <Container
      as='main'
      display='flex'
      flexDirection='column'
      alignItems='center'
      h='90vh'
    >
      <form style={{ width: '100%', marginBottom: '1em', marginTop: '3em' }}>
        <FormControl>
          <FormLabel htmlFor='name'>
            <Input
              variant='outline'
              placeholder='First Name'
              id='name'
              mb='3'
            />
          </FormLabel>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor='email'>
            <Input
              variant='outline'
              placeholder='Email'
              id='email'
              type='email'
            />
          </FormLabel>
          <FormHelperText mb='1'>We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor='password'>
            <Input
              variant='outline'
              placeholder='Password'
              id='password'
              type='password'
              mb='3'
            />
          </FormLabel>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor='passwordConfirmed'>
            <Input
              variant='outline'
              placeholder='Confirm Password'
              id='passwordConfirmed'
              type='password'
              mb='3'
            />
          </FormLabel>
        </FormControl>
        <Button as='button' mt='2em' w='full' colorScheme='green'>
          Get Started
        </Button>
      </form>
      <Link
        as={RouterLink}
        mt='auto'
        to='/login'
        _hover={{ textDecoration: 'none' }}
        w='full'
      >
        <Button as='button' w='full' variant='ghost'>
          Back
        </Button>
      </Link>
    </Container>
  );
};

export default SignUp;
