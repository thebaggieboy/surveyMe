"use client"
import {
    Box,
    Flex,
    Stack,
    Heading,
    Text,
    Container,
    Input,
    Button,
    SimpleGrid,
    Avatar,
    AvatarGroup,
    IconProps,
    Icon,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    FormLabel
  } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
 
  export default function CreateSurvey() {
    const router = useRouter();
    const [firstChoice, setFirstChoice] = useState(null)  
    const [secondChoice, setSecondChoice] = useState(null)
    const [thirdChoice, setThirdChoice] = useState(null)
    const [lastChoice, setLastChoice] = useState(null)

    const [formData, setFormData] = useState({
      email: "",
      survey_title: "",
      first_choice:"",
      second_choice:"",
      third_choice:"",
      last_choice:""

    })

    const addSurvey = async() => {
      console.log("POST Request [/surveys]")
      const res = await fetch('http://127.0.0.1:8000/api/surveys/', {
        method: "POST",
        headers: {

            "Content-Type": "application/json",
        },
        body: JSON.stringify({ survey_title:formData?.survey_title, first_choice:formData?.first_choice, third_choice:formData?.third_choice, last_choice:formData?.last_choice}),
        credentials: "include"

    })
    const data = await res.json()
    console.log("Data Uploaded: ", data)
   
   


  
    if (res.status >= 200 & res.status <= 209) {
       console.log("Data uploaded successfully")
       router.push('/')
      }
      const error = { ...data }
      throw error
    }


    const addNewChoice = (e) => {
      console.log("Adding a new choice")
      setFirstChoice(formData?.firstChoice)
      console.log("Current First Choice: ", firstChoice)
      if(firstChoice !== null){
        setSecondChoice(formData?.second_choice)
        console.log("Current Second Choice: ", secondChoice)
      }
      if(secondChoice !== null){
        setThirdChoice(formData?.third_choice)
        console.log("Current Third Choice: ", thirdChoice)
      }
      if(thirdChoice !== null){
        setLastChoice(formData?.last_choice)
        console.log("Current Last Choice: ", lastChoice)
      }
   

    }

    const submit =()=>{
      addSurvey()
    }

    const inputChangeHandler = (e) => {
      const { name, value } = e.target
      setFormData((prevValue) => {
        return {
          ...prevValue,
          [name]: value
        }
      })
      
  
    }
  
    console.log("form data: ", formData)
    return (
      <Box>
        <Container
          as={SimpleGrid}
          maxW={'7xl'}
          al
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 10, lg: 32 }}
          py={{ base: 10, sm: 20, lg: 10 }}>
        
          <Stack
            
            rounded={'xl'}
            p={{ base: 4, sm: 6, md: 8 }}
            spacing={{ base: 8 }}
            maxW={{ lg: 'lg' }}>
            <Stack spacing={4}>
              <Heading
                color={'gray.800'}
                lineHeight={1.1}
                fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
                Start a new survey
                <Text
                  as={'span'}
                  bgGradient="linear(to-r, red.400,pink.400)"
                  bgClip="text">
                  !
                </Text>
              </Heading>
              <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
                Would you like insight towards a topic, are you curious about something? You can add at least two answers and at most 6 answers to whatever survey you have created
                
              </Text> <br/>
            </Stack>
            <Box as={'form'} mt={10}>
              <Stack spacing={4}>
              
                <Input
                  placeholder="Title of your survey"
                  bg={'gray.100'}
                  border={0}
                  color={'black'}
                  name="survey_title"
                  onChange={inputChangeHandler}
                  _placeholder={{
                    color: 'gray.500',

                  }}
                />
                      <Input
                  placeholder="First Choice"
                  bg={'gray.100'}
                  border={0}
                  color={'black'}
                  name="first_choice"
                  
                  onChange={inputChangeHandler}
                  _placeholder={{
                    color: 'gray.500',

                  }}
                />

              {firstChoice !== null  ?           <Input
                  placeholder="Second Choice"
                  bg={'gray.100'}
                  border={0}
                  color={'black'}
                  
                  onChange={inputChangeHandler}
                  name="second_choice"
                  _placeholder={{
                    color: 'gray.500',

                  }}
                /> : ""}

                
              {secondChoice !== null  ?           <Input
                  placeholder="Third Choice"
                  bg={'gray.100'}
                  border={0}
                  color={'black'}
                  
                  onChange={inputChangeHandler}
                  name="third_choice"
                  _placeholder={{
                    color: 'gray.500',

                  }}
                /> : ""}

                
              {thirdChoice !== null  ?           <Input
                  placeholder="Last Choice"
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  
                  onChange={inputChangeHandler}
                  name="last_choice"
                  _placeholder={{
                    color: 'gray.500',

                  }}
                /> : ""}

                
        
               
              
              {formData?.last_choice == '' ?   <Button 
                fontFamily={'heading'} 
                bg={'black'} 
                color={'white'}
                onClick={addNewChoice}
                _hover={{ bg: useColorModeValue('gray.700', 'white') }}
                >
                  Add Choice
                </Button> : ""}
              </Stack>
              <Button
                fontFamily={'heading'}
                mt={8}
                w={'full'}
                bgGradient="linear(to-r, red.400,orange.400)"
                color={'white'}
                onClick={addSurvey}
                _hover={{
                  bgGradient: 'linear(to-r, red.400,orange.400)',
                  boxShadow: 'xl',
                }}>
                Submit
              </Button>
            </Box>
            form
          </Stack>
        </Container>
    
      </Box>
    );
  }
  
 