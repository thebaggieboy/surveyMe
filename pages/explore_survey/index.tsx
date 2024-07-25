import { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  Center,
  useColorModeValue,
  HStack,
  SimpleGrid
} from '@chakra-ui/react';
import { BsArrowUpRight, BsHeartFill, BsHeart } from 'react-icons/bs';

export default function ExploreSurvey({surveys}) {
  const [liked, setLiked] = useState(false);
  const [selectedSurvey, setSelectedSurvey] = useState(null)  
  const boxShadowColor = 'black'

  return (
    <SimpleGrid columns={{sm: 1, md: 2, lg:3,}} spacing='40px'>
        {surveys.map((survey)=>(
         <Box
         w="xs"
         rounded={'sm'}
         my={5}
        
         mx={5}
         overflow={'hidden'}
         bg="white"
         border={'1px'}
         borderColor="black"
         boxShadow={useColorModeValue(`6px 4px 0 ${boxShadowColor}`, '6px 6px 0 cyan')}>
        
         <Box p={10}>
           
           <p color={'black'} fontSize={'2xl'} fontWeight={'semibold'} noOfLines={1}>
             {survey.survey_title}
           </p> 
           <br/>
           
           <small >
            Answers
           <div> lorem ipsum
         </div>
          <div>  lorem ipsum</div>
           </small>
         
         
         </Box>
         <HStack borderTop={'1px'} color="black">
           <Flex
             p={4}
             alignItems="center"
             justifyContent={'space-between'}
             textAlign={'center'}
             roundedBottom={'sm'}
             cursor={'pointer'}
             
             w="full">
             <Text fontSize={'sm'} fontWeight={'semibold'}>
               View survey
             </Text>
          
           </Flex>
          
         </HStack>
       </Box>
     ))}
    </SimpleGrid>
     
   
  );
}

export const getServerSideProps = async ()=>{
    const res = await fetch(`http://127.0.0.1:8000/api/surveys/`);

  
    const data = await res.json()
  
    return {
      props:{
        surveys:data.results
      },
    }
  }