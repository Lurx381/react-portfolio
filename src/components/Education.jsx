import React from 'react';
import { motion } from 'framer-motion';
import SchoolImage1 from '../assets/school1.png';
import SchoolImage2 from '../assets/school2.png';
import SchoolImage3 from '../assets/school3.png';
import SchoolImage4 from '../assets/school4.png';

// Array of timeline items representing different education stages
const timelineItems = [
  { year: 'November 2017 - September 2018', title: 'Part of 5th - Start of 6th Grade', description: 'Transferred to Switzerland and continued there at "Schule Höheweg Langnaue i.E."', image: SchoolImage1 },
  { year: 'September 2018 - July 2019', title: '6th Grade', description: 'Completed Swiss Primary School at "Schule Neumarkt Biel"', image: SchoolImage2 },
  { year: 'August 2019 - July 2022', title: '7th - 9th Grade', description: 'Completed Swiss Secondary School at "Sekundarschule Burgerbeunden Nidau"', image: SchoolImage3 },
  { year: 'August 2022 - present', title: '1st - 3rd Year', description: 'Mid way through IMS at "BWD Bern"', image: SchoolImage4 }
];

const Education = () => {
  return (
    // Motion div to animate the whole section
    <motion.div
      className="bg-black text-white py-20" // Background color and padding
      id="education" // ID for scroll targeting
      initial={{ opacity: 0 }} // Initial state: invisible
      whileInView={{ opacity: 1 }} // Final state: visible when in view
      viewport={{ once: true }} // Animation triggers only once
      transition={{ duration: 0.8 }} // Animation duration
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24 w-full"> {/* Container with full width */}
        <h2 className="text-4xl font-bold text-center mb-12">Education</h2> {/* Section title */}
        <div className="relative flex"> {/* Flex container for alignment */}
          {/* Vertical timeline line */}
          <div className="absolute top-0 left-4 sm:left-8 md:left-20 lg:left-24 w-1 bg-gradient-to-b from-green-400 to-blue-500 h-full"></div> {/* Adjust left position */}
          <div className="flex-grow ml-8 sm:ml-12 md:ml-16 lg:ml-36 space-y-12"> {/* Responsive margin-left */}
            {timelineItems.map((item, index) => (
              <motion.div
                key={index} // Unique key for each timeline item
                className="flex justify-start" // Align all items to the left
                initial={{ opacity: 0 }} // Initial state: invisible
                whileInView={{ opacity: 1 }} // Final state: visible when in view
                viewport={{ once: true }} // Animation triggers only once
                transition={{ duration: 0.8 }} // Animation duration
              >
                <div className={`flex items-center ${index === 0 ? '' : 'mt-8'}`}>
                  {item.image && (
                    <motion.img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full object-cover mr-4 transform transition-transform duration-300 hover:scale-110" 
                    />
                  )}
                  <div className="bg-gray-800 p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg text-left">
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold mb-2">{item.title}</h3> {/* Timeline item title */}
                    <p className="text-sm sm:text-base md:text-lg lg:text-lg mb-2">{item.year}</p> {/* Timeline item year */}
                    <p className="text-sm sm:text-base md:text-lg lg:text-lg">{item.description}</p> {/* Timeline item description */}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
