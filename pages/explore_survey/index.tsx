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
         boxShadow={useColorModeValue('6px 6px 0 black', '6px 6px 0 cyan')}>
        
         <Box p={4}>
           
           <small color={'black'} fontSize={'1xl'} fontWeight={'semibold'} noOfLines={1}>
             {survey.survey_title}
           </small>
         
         
         </Box>
         <HStack borderTop={'1px'} color="black">
           <Flex
             p={4}
             alignItems="center"
             justifyContent={'space-between'}
             roundedBottom={'sm'}
             cursor={'pointer'}
             w="full">
             <Text fontSize={'sm'} fontWeight={'semibold'}>
               Answer survey
             </Text>
             <BsArrowUpRight />
           </Flex>
          
         </HStack>
       </Box>
     ))}
    </SimpleGrid>
     
   
  );
}

export const getServerSideProps = async ()=>{
    const res = await fetch(`http://127.0.0.1:8000/surveys/`);

  
    const data = await res.json()
  
    return {
      props:{
        surveys:data.results
      },
    }
  }