import { Box, Grid, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../Navbar';

const BaseBody: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={6}
      >
        <SimpleGrid columns={1} spacing={5} mt="20px">
          <Box height="80px" />
          <Box height="80px" />
          <Box height="80px" />
          <Box height="80px" />
          <Box height="80px" />
        </SimpleGrid>
        <SimpleGrid columns={1} spacing={5} mt="20px">
          {children}
        </SimpleGrid>
      </Grid>
    </>
  );
};

export default BaseBody;
