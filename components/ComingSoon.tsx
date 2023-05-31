"use client"

import { Box, Heading, Text } from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';

export default function ComingSoon() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <InfoIcon boxSize={'50px'} color={'blue.500'} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Coming Soon
      </Heading>
      <Text color={'gray.600'}>
        This site is still under construction, check back soon to  find more information about what we do!
      </Text>
    </Box>
  );
}