import React, { useState } from 'react';
import { Link,NavLink } from 'react-router';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=''>
       <nav className="  w-full  ">
      <div className=" max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <Link to="/" className="text-2xl font-bold">Restaurant</Link>
        <div className="hidden md:flex space-x-4">
          <NavLink  to="/" className="hover:text-gray-400 "  >Home</NavLink>
          <NavLink to="/food-items" className="hover:text-gray-400">Food Items</NavLink>
          <NavLink to="/about" className="hover:text-gray-400">About</NavLink>
          <NavLink to="/contact" className="hover:text-gray-400">Contact</NavLink>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <span className="hamburger-icon">☰</span>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-orange-50">
          <NavLink to="/" className="block px-4 py-2 hover:bg-gray-600  border-b-[1px] border-gray-600">Home</NavLink>
          <NavLink to="/food-items" className="block px-4 py-2 hover:bg-gray-600 border-b-[1px] border-gray-600">Food Items</NavLink>
          <NavLink to="/about" className="block px-4 py-2 hover:bg-gray-600 border-b-[1px] border-gray-600">About</NavLink>
          <NavLink to="/contact" className="block px-4 py-2 hover:bg-gray-600 border-b-[1px] border-gray-600">Contact</NavLink>
        </div>
      )}
    </nav>
    <div className='md:border-b-[0.5px] border-gray-500 w-[1000px] mx-auto opacity-20'>

    </div>
    </div>
   
  );
};

export default Navbar;
