import {
  Container,
  Box,
  Image,
  Text,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Link,
} from '@chakra-ui/react';

import ButtonStyle from '../components/ButtonStyle';

import brandLogo from '../assets/logo.jpg';

const SignIn = () => {
  return (
    <Container
      display='flex'
      flexDirection='column'
      alignItems='center'
      h='98vh'
    >
      <Image
        src={brandLogo}
        alt='bite diary small logo'
        maxW='70%'
        borderRadius='xl'
        mt='25%'
      />
      <Text textAlign='center' mt='6' mb='8' color='gray.400' fontWeight='bold'>
        Find, log, and post recipes, and feel less overwhelmed about cooking.
      </Text>

      <form style={{ width: '100%', marginBottom: '1em' }}>
        <FormControl>
          <FormLabel htmlFor='email' />
          <Input
            variant='outline'
            placeholder='Email'
            id='email'
            type='email'
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
          />
        </FormControl>
        <ButtonStyle
          styles={{
            color: 'green.900',
            fontWeight: 'bold',
            bg: 'white',
            m: '0',
            border: '2px solid rgba(72, 135, 54,0.6)',
          }}
        >
          <Text>Sign In</Text>
        </ButtonStyle>
      </form>
      <Text color='orange.400' textDecoration='underline'>
        Forgot Password?
      </Text>
      <ButtonStyle styles={{ mt: 'auto' }}>
        <Link _hover={{ textDecoration: 'none' }}>Create New Account</Link>
      </ButtonStyle>
    </Container>
  );
};

export default SignIn;
