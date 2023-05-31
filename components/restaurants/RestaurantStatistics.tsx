"use client"

import {
  Container,
  Grid,
  GridItem,
  Flex,
  Box,
  Text,
  Heading,
} from '@chakra-ui/react';

function RestaurantStatistics() {
  return (
    <Container py={5} maxW={'container.lg'}>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(4, 1fr)',
        }}
        gap={6}>
        <GridItem w="100%" colSpan={{ base: 1, sm: 2, md: 2 }}>
          <Heading as={'h2'}>Our Prices</Heading>
        </GridItem>
        <GridItem w="100%">
          <Flex flexDirection={'column'}>
            <Text fontSize={'4xl'} fontWeight={'bold'}>
              $0
            </Text>
            <Box fontSize={'sm'}>
              Fee for posting unsold food items
            </Box>
          </Flex>
        </GridItem>
        <GridItem w="100%">
          <Flex flexDirection={'column'}>
            <Text fontSize={'4xl'} fontWeight={'bold'}>
              &lt;5%
            </Text>
            <Box fontSize={'sm'}>
              Fee on each transaction made using the SavourIt application
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </Container>
  );
}

export default RestaurantStatistics;