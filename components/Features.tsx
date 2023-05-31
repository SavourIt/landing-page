"use client"

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import { BsCurrencyDollar, BsFire } from 'react-icons/bs';
import {
  FcAbout,
  FcAssistant,
  FcBusiness,
  FcClock,
  FcCollaboration,
  FcDonate,
  FcGoodDecision,
  FcList,
  FcManager,
} from 'react-icons/fc';

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
}

const Card = ({ heading, description, icon, href }: CardProps) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}>
      <Stack align={'start'} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={useColorModeValue('gray.100', 'gray.700')}>
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default function Features() {
  return (
    <Box p={4} id='features'>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          How it Works
        </Heading>
        <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
          SavourIt allows restaurants, such as Pizza Parlors and Cafes, to list their unsold food items 
          before the end of the day, rather than throwing the food away
        </Text>
      </Stack>

      <Container maxW={'5xl'} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={'Restaurants'}
            icon={<Icon as={FcClock} w={10} h={10} />}
            description={
              "Restaurants with ready-made food have unsold items at the end of the day"
            }
            href={'#'}
          />
          <Card
            heading={'List'}
            icon={<Icon as={FcList} w={10} h={10} />}
            description={
              'Restaurants list their unsold items on the SavourIt app at a discounted price'
            }
            href={'#'}
          />
          <Card
            heading={'Order'}
            icon={<Icon as={FcDonate} w={10} h={10} />}
            description={
              'Customers order the food through the app, either for delivery or pick-up'
            }
            href={'#'}
          />
          <Card
            heading={'Pick-Up'}
            icon={<Icon as={FcManager} w={10} h={10} />}
            description={
              'Once the order is confirmed, customers receive a QR code which they can then use to pick-up the food'
            }
            href={'#'}
          />
          <Card
            
            heading={'Everyone Wins!'}
            icon={<Icon as={BsCurrencyDollar} w={10} h={10} color="#00FF00"/>}
            description={
              'Customers save money on food, restaurants boost profits, and food waste is reduced'
            }
            href={'#'}
          />
        </Flex>
      </Container>
    </Box>
  );
}