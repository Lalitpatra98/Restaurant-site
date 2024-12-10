import React from "react";
import img1 from "../../assets/foodImage.jpg";
const Hero = () => {
  return (
    <div className=" md:flex flex-row-reverse items-center justify-between md:px-40 md:gap-4 ">
      <div >
        {/* right side */}
        <img
          src={img1}
          alt="image of restarant"
          className="w-64 rounded-md shadow-2xl mx-auto"
        />
      </div>
      <div className="w-40 mx-auto md:mx-0 mt-4 md:text-left">
        {/* left side */}
        <h1 className="text-xl font-bold">Hero section</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam ab fugit
          voluptas?
        </p>
      </div>
    </div>
  );
};

export default Hero;
