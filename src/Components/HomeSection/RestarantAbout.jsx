import React from "react";

const RestarantAbout = () => {
  return (
    <div className=" mt-10 mx-auto md:flex flex-row-reverse items-center justify-between">
      <div>
        <img
          src="https://cdn.pixabay.com/photo/2015/09/14/11/43/restaurant-939435_640.jpg"
          alt="image"
          className="rounded-2xl size-96 shadow-2xl"
        />
      </div>
      <div className=" text-center md:w-96  mt-4">
        <h2 className="text-xl font-bold">Delight Kitchen </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos iure
          natus debitis vel fuga! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Cum, officiis. Placeat recusandae laudantium
          delectus provident perferendis autem dolorem quibusdam temporibus.
        </p>
      </div>
    </div>
  );
};

export default RestarantAbout;
