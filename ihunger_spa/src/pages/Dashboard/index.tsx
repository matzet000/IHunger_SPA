/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-children-prop */
/* eslint-disable no-unused-expressions */
import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Grid,
  Box,
  SimpleGrid,
  HStack,
  Select,
  Text,
  Switch,
  VStack,
  InputGroup,
  InputLeftElement,
  Input,
  Badge,
  Image,
} from '@chakra-ui/react';

import { Search2Icon, StarIcon } from '@chakra-ui/icons';
import { useAuth } from '../../hooks/auth';

import Navbar from '../../components/Navbar';
import asianImg from '../../assets/img/asian_food.jpg';
import pizzaImg from '../../assets/img/pizza.jpg';
import FilterRestaurant from '../../components/Filter/FilterRestaurant';
import ItemRestaurant from '../../components/List/Item/ItemRestaurant';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const history = useHistory();

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
          <FilterRestaurant />

          <ItemRestaurant
            imageUrl={pizzaImg}
            imageAlt="Italian Food"
            title="Italian Food"
            reviewCount={100}
            rating={3}
          />

          <ItemRestaurant
            imageUrl={asianImg}
            imageAlt="Asian Food"
            title="Asian Food"
            reviewCount={100}
            rating={3}
          />
        </SimpleGrid>
        <SimpleGrid columns={1} spacing={5} mt="20px">
          <Box height="80px" />
          <Box height="80px" />
          <Box height="80px" />
          <Box height="80px" />
          <Box height="80px" />
        </SimpleGrid>
      </Grid>
    </>
  );
};

export default Dashboard;
