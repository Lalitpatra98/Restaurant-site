import React from "react";
import { Link } from "react-router";
import img from "../assets/fooditem/burger.jpg";
import img2 from "../assets/fooditem/pizza.jpg";
import img3 from "../assets/fooditem/pasta.jpg";
import Footer from "../Components/HomeSection/Footer";
const foodList = [
  { id: 1, name: "Pizza", image: img2 },
  { id: 2, name: "Burger", image: img },
  { id: 3, name: "Pasta", image: img3 },
];

const FoodItems = () => {
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-6 p-8">
        {foodList.map((food) => (
          <div
            key={food.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg">{food.name}</h3>
              <Link
                to={`/food-items/${food.id}`}
                className="text-blue-500 hover:underline"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default FoodItems;
