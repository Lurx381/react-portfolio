import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import Image1 from '../assets/musiccollection.png';
import Image2 from '../assets/row.png';
import Image3 from '../assets/pixy.png';

// Variants for the container to control child animations
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Stagger animation for child items
    },
  },
};

// Variants for each item in the container
const itemVariants = {
  hidden: { opacity: 0, y: 50 }, // Start hidden and slightly below
  show: { opacity: 1, y: 0 },    // Fade in and move to the original position
};

const MyWork = () => {
  // Handles tilt effect only when hovering
  const handleMouseEnter = (e) => {
    const tiltElement = e.currentTarget;
    tiltElement.style.transform = 'perspective(1000px) rotateX(15deg) rotateY(15deg)'; // Example values, adjust as needed
  };

  const handleMouseLeave = (e) => {
    const tiltElement = e.currentTarget;
    tiltElement.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <motion.div
      variants={containerVariants}  // Use containerVariants to control animations
      initial='hidden'              // Initial state for animation
      whileInView='show'            // Animate when the component is in view
      viewport={{ once: true }}     // Animation triggers only once
      className='bg-black text-white py-20'
      id='mywork'
    >
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>My Work</h2>
        <div className='flex flex-col md:flex-row md:justify-center md:space-x-8'>
          <Tilt
            glareEnable={false}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            transitionSpeed={250}
            className="rounded-3xl mb-8 md:mb-0"
            trackOnWindow={false} // Ensure tilt effect stays within bounds
            style={{ flex: '0 1 auto' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              variants={itemVariants} // Use itemVariants for individual item animations
              className='bg-gray-800 p-4 rounded-3xl transition-transform duration-300'
              style={{ height: 'auto', width: 'auto' }}
            >
              <img 
                src={Image1} 
                alt='MusicCollection' 
                className='project-image mb-4 rounded-xl'
              />
              <h3 className='text-2xl font-bold'>MusicCollection</h3>
              <p className='text-lg mt-2 text-gray-400'>Have all your favourite songs in one place.</p>
              <a
                href='https://github.com/MinenMaster/react-music'
                target="_blank"
                rel="noopener noreferrer"
                className='bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full inline-flex items-center mt-4 mb-0'
              >
                <FaGithub className='mr-2' />
                GitHub
              </a>
            </motion.div>
          </Tilt>

          <Tilt
            glareEnable={false}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            transitionSpeed={250}
            className="rounded-3xl mb-8 md:mb-0"
            trackOnWindow={false} // Ensure tilt effect stays within bounds
            style={{ flex: '0 1 auto' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              variants={itemVariants} // Use itemVariants for individual item animations
              className='bg-gray-800 p-4 rounded-3xl transition-transform duration-300'
              style={{ height: 'auto', width: 'auto' }}
            >
              <img 
                src={Image2} 
                alt='ComApp' 
                className='project-image mb-4 rounded-xl'
              />
              <h3 className='text-2xl font-bold'>ComApp</h3>
              <p className='text-lg mt-2 text-gray-400'>Bring your Community together.</p>
              <a
                href='https://github.com/Lurx381/comapp'
                target="_blank"
                rel="noopener noreferrer"
                className='bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full inline-flex items-center mt-4 mb-0'
              >
                <FaGithub className='mr-2' />
                GitHub
              </a>
            </motion.div>
          </Tilt>

          <Tilt
            glareEnable={false}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            transitionSpeed={250}
            className="rounded-3xl"
            trackOnWindow={false} // Ensure tilt effect stays within bounds
            style={{ flex: '0 1 auto' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              variants={itemVariants} // Use itemVariants for individual item animations
              className='bg-gray-800 p-4 rounded-3xl transition-transform duration-300'
              style={{ height: 'auto', width: 'auto' }}
            >
              <img 
                src={Image3} 
                alt='Pixy' 
                className='project-image mb-4 rounded-xl'
              />
              <h3 className='text-2xl font-bold'>Pixy</h3>
              <p className='text-lg mt-2 text-gray-400'>The Next-gen Discord Bot.</p>
              <a
                href='https://github.com/yourusername/project-three'
                target="_blank"
                rel="noopener noreferrer"
                className='bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full inline-flex items-center mt-4 mb-0'
              >
                <FaGithub className='mr-2' />
                GitHub
              </a>
            </motion.div>
          </Tilt>
        </div>
      </div>
    </motion.div>
  );
};

export default MyWork;
