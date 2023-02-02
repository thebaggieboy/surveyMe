"use client"
import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Icon,
    IconProps,
  } from '@chakra-ui/react';
  
  export default function HeroSection() {
    return (
      <Container maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            What do you want{' '}
            <Text as={'span'} color={'orange.400'}>
              to do?
            </Text>
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'}>
          Get valuable insights with our easy-to-use survey tool. Create and distribute surveys in minutes, gather and analyze data for better decision making.
          </Text>
          <Stack spacing={6} direction={'row'}>
            <Button
            as={"a"}
              rounded={'full'}
              px={6}
              colorScheme={'orange'}
              bg={'orange.400'}
              href="/create_survey"
              _hover={{ bg: 'orange.500' }}>
              Create Survey
            </Button>
            <Button as={"a"} rounded={'full'} px={6} href="/explore_survey">
              Explore
            </Button>
          </Stack>
          
        </Stack>
      </Container>
    );
  }
