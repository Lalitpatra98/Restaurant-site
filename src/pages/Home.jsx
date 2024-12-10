import React from 'react';
import Hero from '../Components/HomeSection/Hero';
import PopularFood from '../Components/HomeSection/PopularFood';
import RestarantAbout from '../Components/HomeSection/RestarantAbout';
import Menu from '../Components/HomeSection/Menu';
import FooterWithSocialLinks from '../Components/HomeSection/Footer';
const Home = () => {
  return (
    <div className="text-center p-10 ">

      <Hero/>
      <PopularFood/>
      <RestarantAbout/>
      <Menu/>
      <FooterWithSocialLinks/>
    </div>
  );
};

export default Home;
