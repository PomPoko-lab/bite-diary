import {
  Container,
  Text,
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
        {/* <ButtonStyle
          styles={{
            m: '0',
          }}
        >
          <Text>Get Started</Text>
        </ButtonStyle> */}
      </form>
      {/* <ButtonStyle
        styles={{
          color: 'green.900',
          fontWeight: 'bold',
          bg: 'white',
          m: '0',
          border: '2px solid rgba(72, 135, 54,0.6)',
          mt: 'auto',
        }}
      >
        <Link as={RouterLink} to='/login' _hover={{ textDecoration: 'none' }}>
          Back
        </Link>
      </ButtonStyle> */}
    </Container>
  );
};

export default SignUp;
