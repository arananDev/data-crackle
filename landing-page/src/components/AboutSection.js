import React from 'react'
import { Container, chakra, Stack, Text, Button, } from '@chakra-ui/react';
// Here we have used react-icons package for the icons


function AboutSection() {
  return (
    <Container p={{ base: 8, sm: 5 }} style = {{'paddingTop': '15em'}}>
    <Stack direction="column" spacing={6} alignItems="center">
      
      <chakra.h1
        fontSize={{ base: '4xl', sm: '5xl' }}
        fontWeight="bold"
        textAlign="center"
        maxW="2000px"
      >
        Create accessible React apps{' '}
        <chakra.span color="teal" bg="linear-gradient(transparent 50%, #83e9e7 50%)">
          with speed
        </chakra.span>
      </chakra.h1>
      <Text maxW="550px" fontSize="xl" textAlign="center" color="gray.500">
        Chakra UI is a simple, modular and accessible component library that gives you the
        building blocks you need to build your React applications.
      </Text>
      <Stack
        direction={{ base: 'column', sm: 'row' }}
        w={{ base: '100%', sm: 'auto' }}
        spacing={5}
      >
        <Button
          colorScheme="teal"
          variant="outline"
          rounded="md"
          size="lg"
          height="3.5rem"
          fontSize="1.2rem"
        >
          Get Started
        </Button>
        
      </Stack>
    </Stack>
  </Container>
  )
}

export default AboutSection