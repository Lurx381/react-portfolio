import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import Image1 from '../assets/musiccollection.png';

// Array of projects with image, title, description, and GitHub link
const projects = [
  {
    title: 'MusicCollection',
    description: 'Have all your favourite songs in one place,',
    image: Image1,
    github: 'https://github.com/MinenMaster/react-music'
  },
  {
    title: 'ComApp',
    description: 'Bring your Community together.',
    image: 'row.png',
    github: 'https://github.com/Lurx381/comapp'
  },
  {
    title: 'Project Three',
    description: 'Description of project three goes here.',
    image: 'path/to/image3.png',
    github: 'https://github.com/yourusername/project-three'
  },
  // Add more projects as needed
];

const tilt = (e, element) => {
  const { innerWidth: width } = window;
  let perspective, intensity;

  if (width <= 768) {
    // Phones: No tilt
    perspective = 'none';
    intensity = 0;
  } else if (width <= 1200) {
    // Tablets: Less tilt
    perspective = '800px';
    intensity = 10; // Reduced tilt intensity
  } else {
    // Desktops: Full tilt
    perspective = '1000px';
    intensity = 20; // Default tilt intensity
  }

  const { clientX: mouseX, clientY: mouseY } = e;
  const { left, top, width: elemWidth, height } = element.getBoundingClientRect();
  const centerX = left + elemWidth / 2;
  const centerY = top + height / 2;
  const deltaX = (mouseX - centerX) / (elemWidth / 2);
  const deltaY = (mouseY - centerY) / (height / 2);
  
  const rotateX = -deltaY * intensity;
  const rotateY = deltaX * intensity;

  element.style.perspective = perspective;
  element.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
};

const MyWork = () => {
  const handleMouseEnter = (e) => {
    const { innerWidth: width } = window;
    if (width <= 768) return; // Exit if on mobile
    const element = e.currentTarget;
    tilt(e, element);
  };

  const handleMouseMove = (e) => {
    const { innerWidth: width } = window;
    if (width <= 768) return; // Exit if on mobile
    const element = e.currentTarget;
    tilt(e, element);
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };

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

  return (
    <motion.div
      variants={containerVariants}  // Use containerVariants to control animations
      initial='hidden'              // Initial state for animation
      whileInView='show'           // Animate when the component is in view
      viewport={{ once: true }}    // Animation triggers only once
      className='bg-black text-white py-20'
      id='mywork'
    >
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>My Work</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants} // Use itemVariants for individual item animations
              className='bg-gray-800 p-4 rounded-3xl transition-transform duration-300' // Increased border radius
              onMouseEnter={handleMouseEnter}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className='project-image mb-4'
              />
              <h3 className='text-2xl font-bold'>{project.title}</h3>
              <p className='text-lg mt-2 text-gray-400'>{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className='bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full inline-flex items-center mt-4'
              >
                <FaGithub className='mr-2' />
                GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MyWork;
