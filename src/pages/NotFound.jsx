import { Container, Text, Heading } from '@chakra-ui/react';

const NotFound = () => {
  return (
    <Container as='main' py='3' maxW='container.xl'>
      <Heading mb='6'>404 Page Not Found</Heading>
      <Text>Where were you going?</Text>
    </Container>
  );
};

export default NotFound;
