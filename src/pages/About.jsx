import { Container, Text, Heading } from '@chakra-ui/react';

const About = () => {
  return (
    <Container as='section' py='3'>
      <Heading mb='6'>About The App</Heading>
      <Text>An app written to track and log recipes.</Text>
    </Container>
  );
};

export default About;
