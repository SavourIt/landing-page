import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { FcAdvertising, FcAssistant, FcCheckmark, FcDonate, FcInTransit, FcMoneyTransfer } from 'react-icons/fc';

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack className="items-center">
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function CustomerPerks() {
  return (
    <Box p={8} className="justify-center items-center w-full">
      <SimpleGrid className="justify-center items-center" columns={{ base: 1, md: 2 }} spacing={10}>
        <Feature
          icon={<Icon as={FcCheckmark} w={10} h={10} />}
          title={'Free to Use'}
          text={
            'No membership or subscriptions needed, simply log in and see what\'s available!'
          }
        />
        <Feature
          icon={<Icon as={FcMoneyTransfer} w={10} h={10} />}
          title={'No Hidden Fees'}
          text={
            'With no hidden fees and tax included, the listed price is what you will see at checkout.'
          }
        />
      </SimpleGrid>
    </Box>
  );
}