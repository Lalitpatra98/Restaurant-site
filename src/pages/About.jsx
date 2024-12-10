import React from 'react';
import Footer from '../Components/HomeSection/Footer'
const About = () => {
  return (
    <div className="p-10">
        <div>
          <div className='text-center text-balance'>
            <h1 className='text-xl font-semibold text-orange-300 '>Delight Restaurant</h1>
            <p className=''>
            "Namastey Kitchen Darbar is a family restaurant offering a royal dining experience with a fusion of traditional flavors and modern cuisine. Enjoy a warm, welcoming atmosphere perfect for family gatherings, where every meal is crafted with care and served with a touch of regal hospitality."
            </p>
          </div>
          <div className=' md:flex items-center gap-8 p-10'>
              <img src="https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img1" className='w-96 mb-4 rounded-lg'/>

              <img src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img2" className='w-96 rounded-lg'/>
          </div>
            <Footer/>
        </div>
    </div>
  );
};

export default About;
