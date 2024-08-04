import React from 'react';
import { motion } from 'framer-motion';
import HeroImage from '../assets/lukabild.jpg';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Hero = () => {
  // Scroll to the element with the specified ID
  const scrollToContent = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      id="home"
      className="bg-black text-white text-center py-32"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ duration: 1 }} // Adjust duration as needed
    >
      <img 
        src={HeroImage} 
        alt="" 
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105" 
      />
      <h1 className="text-6xl font-bold">
        I'm {" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Luka Ljubisavljevic
        </span>,
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        an IT Student that thrives to get better.
      </p>
      <div className="mt-8 space-x-4">
        <button 
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
          onClick={scrollToContent} // Add the onClick handler
        >
          Contact Me
        </button>
      </div>
    </motion.div>
  );
};

export default Hero;
