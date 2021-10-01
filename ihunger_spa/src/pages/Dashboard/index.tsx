/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-children-prop */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Box, SimpleGrid } from '@chakra-ui/react';

import api from '../../services/api';

import Navbar from '../../components/Navbar';
import asianImg from '../../assets/img/asian_food.jpg';
import pizzaImg from '../../assets/img/pizza.jpg';
import FilterRestaurant from '../../components/Filter/FilterRestaurant';
import ItemRestaurant from '../../components/List/Item/ItemRestaurant';
import Restaurant from '../../models/Restaurant/Restaurant';

const Dashboard: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  // const { user } = useAuth();
  // const history = useHistory();

  useEffect(() => {
    api.get<Restaurant[]>(`restaurants`).then(response => {
      setRestaurants(response.data);
    });
  }, []);

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
          {restaurants.map(restaurant => (
            <ItemRestaurant
              key={restaurant.id}
              imageUrl={pizzaImg}
              imageAlt={restaurant.description}
              title={restaurant.name}
              reviewCount={restaurant.comments.length}
              rating={Number(
                restaurant.comments.map(comment => comment.starts),
              )}
            />
          ))}
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
