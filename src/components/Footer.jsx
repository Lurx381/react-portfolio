import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="text-lg">© 2024 Luka Ljubisavljevic. All rights reserved.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-4 mt-4 md:mt-0"
          >
            <a href="https://github.com/Lurx381" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/luka-ljubisavljevic-799b71312/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="https://x.com/lurxbtw" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FaTwitter size={24} />
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
