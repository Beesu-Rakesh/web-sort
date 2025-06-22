
import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <nav className="bg-[#e9edfc] px-8 py-4 flex justify-between items-center nav-bg">
      <div className="flex items-center space-x-2 ml-24">
        <img src={logo} alt="WebSort Logo" className="w-28 h-8" />
      </div>
    <div className='flex items-center justify-between'>
      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-6 text-gray-800 font-medium">
        <li className="hover:text-blue-700 cursor-pointer font-inter"><Link to="/">About Us</Link></li>
        <li className="hover:text-blue-700 cursor-pointer font-inter">
          <Link to="/services">Services</Link>
        </li>
        <li className="hover:text-blue-700 cursor-pointer font-inter"><Link to="/projects">Projects</Link></li>
        <li className="hover:text-blue-700 cursor-pointer font-inter">Careers</li>
      </ul>

      {/* Contact Button */}
      <button className="bg-[#292662] text-white px-5 py-2 rounded-full hover:bg-[#1f1c4f] transition-all ml-24">
        Contact us
      </button>
    </div>
    </nav>
    </>
  );
};

export default Navbar;
