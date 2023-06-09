import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { BsCurrencyDollar } from 'react-icons/bs';
import { FcClock, FcDonate, FcList, FcManager } from 'react-icons/fc';
import { ReactElement } from 'react';

// Replace test data with your own
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

export default function CustomerFeatures() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'}>Save Money with Savour<Text as="span" className="text-red-400">It</Text></Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
          Take advantage of restaurant overproduction and save money
        </Text>
      </Stack>

      <Container maxW={'6xl'} mt={10}>
        {/** 
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={'gray.600'}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
        */}
      </Container>
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