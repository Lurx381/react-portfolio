import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import Logo from '../assets/logotransparent1.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white px-8 md:px-16 lg:px-24 z-50 font-inter">
      <div className="container py-2 flex justify-between items-center">
      <div className="text-2xl font-bold flex items-center">
        <Link to="home" smooth={true} duration={500} className="cursor-pointer flex items-center">
          <img src={Logo} alt="Logo" className="w-8 h-8 mr-2 shadow-lg" />
          <span>Luka Ljubisavljevic</span>
        </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link to="about" smooth={true} duration={500} className="hover:text-gray-400 cursor-pointer">About Me</Link>
          <Link to="education" smooth={true} duration={500} className="hover:text-gray-400 cursor-pointer">Education</Link>
          <Link to="mywork" smooth={true} duration={500} className="hover:text-gray-400 cursor-pointer">My Work</Link>
          <Link to="contact" smooth={true} duration={500} className="hover:text-gray-400 cursor-pointer">Contact</Link>
          <RouterLink to="/documents" className="hover:text-gray-400 cursor-pointer">Documents</RouterLink>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-black text-white px-8 py-4 space-y-4 animate-fade-in-down font-kanit">
          <Link to="about" smooth={true} duration={500} className="block hover:text-gray-400 cursor-pointer" onClick={closeMenu}>About Me</Link>
          <Link to="education" smooth={true} duration={500} className="block hover:text-gray-400 cursor-pointer" onClick={closeMenu}>Education</Link>
          <Link to="mywork" smooth={true} duration={500} className="block hover:text-gray-400 cursor-pointer" onClick={closeMenu}>My Work</Link>
          <Link to="contact" smooth={true} duration={500} className="block hover:text-gray-400 cursor-pointer" onClick={closeMenu}>Contact</Link>
          <RouterLink to="/documents" className="block hover:text-gray-400 cursor-pointer" onClick={closeMenu}>Documents</RouterLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
