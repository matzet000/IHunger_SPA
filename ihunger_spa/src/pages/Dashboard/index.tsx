/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-children-prop */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import pizzaImg from '../../assets/img/pizza.jpg';
import FilterRestaurant from '../../components/Filter/FilterRestaurant';
import ItemRestaurant from '../../components/List/Item/ItemRestaurant';
import Restaurant from '../../models/Restaurant/Restaurant';
import BaseBody from '../../components/BaseBody';

const Dashboard: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    api.get<Restaurant[]>(`restaurants`).then(response => {
      setRestaurants(response.data);
    });
  }, []);

  return (
    <>
      <BaseBody>
        <FilterRestaurant />
        {restaurants.map(restaurant => (
          <ItemRestaurant
            Id={restaurant.id}
            key={restaurant.id}
            imageUrl={pizzaImg}
            imageAlt={restaurant.description}
            title={restaurant.name}
            reviewCount={restaurant.comments.length}
            rating={Number(restaurant.comments.map(comment => comment.starts))}
          />
        ))}
      </BaseBody>
    </>
  );
};

export default Dashboard;
