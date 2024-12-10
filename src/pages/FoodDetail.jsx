import React from 'react';
import { useParams } from 'react-router';

const foodDetails = {
  1: { name: 'Pizza', description: 'Cheesy and delicious', price: '$12' },
  2: { name: 'Burger', description: 'Juicy and flavorful', price: '$8' },
  3: { name: 'Pasta', description: 'Rich and creamy', price: '$10' },
};

const FoodDetails = () => {
  const { id } = useParams();
  const food = foodDetails[id];

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold">{food.name}</h2>
      <p className="mt-4">{food.description}</p>
      <p className="mt-2 font-semibold">Price: {food.price}</p>
    </div>
  );
};

export default FoodDetails;
