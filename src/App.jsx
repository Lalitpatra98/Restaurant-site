import React from "react";
import { Routes, Route } from "react-router";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import FoodItems from "./pages/FoodItem";
import Contact from "./pages/Contact";
import About from "./pages/About";
import FoodDetails from "./pages/FoodDetail";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food-items" element={<FoodItems />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/food-items/:id" element={<FoodDetails />} />
      </Routes>
    </>
  );
};

export default App;
