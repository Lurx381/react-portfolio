import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkedAlt, FaPhone, FaCheck, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case 'name':
        if (!value) {
          return 'Name is required.';
        }
        return '';
      case 'email':
        if (!value) {
          return 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          return 'Email address is invalid.';
        }
        return '';
      case 'message':
        if (!value) {
          return 'Message is required.';
        } else if (value.length > 600) {
          return 'Message must be 600 characters or less.';
        }
        return '';
      default:
        return '';
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    let error = validateField(id, value);

    switch (id) {
      case 'name':
        setName(value);
        setErrors((prevErrors) => ({ ...prevErrors, name: error }));
        break;
      case 'email':
        setEmail(value);
        setErrors((prevErrors) => ({ ...prevErrors, email: error }));
        break;
      case 'message':
        setMessage(value);
        setErrors((prevErrors) => ({ ...prevErrors, message: error }));
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = {
      name: validateField('name', name),
      email: validateField('email', email),
      message: validateField('message', message),
    };

    if (Object.values(validationErrors).some((error) => error)) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await axios.post('/contact.php', { name, email, message });
      if (response.data.success) {
        setSuccessMessage('Your message has been sent successfully!');
        setErrorMessage('');
        setName('');
        setEmail('');
        setMessage('');
        setErrors({});
      } else {
        setErrorMessage('There was an error sending your message. Please try again.');
        setSuccessMessage('');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again later.');
      setSuccessMessage('');
    }
  };

  return (
    <motion.div
      className="bg-black text-white py-20"
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4'>
              Let's get in Contact
            </h3>
            <p>Open to discussions about potential job opportunities or projects.</p>
            <div className='mb-4 mt-8'>
              <FaEnvelope className='inline-block text-green-400 mr-2' />
              <a href="mailto:contact@lukaljubisavljevic.com" className='hover:underline'>
                contact@lukaljubisavljevic.com
              </a>
            </div>
            <div className='mb-4'>
              <FaPhone className='inline-block text-green-400 mr-2' />
              <span>+41764902134</span>
            </div>
            <div className='mb-4'>
              <FaMapMarkedAlt className='inline-block text-green-400 mr-2' />
              <span>Bern, Switzerland</span>
            </div>
          </div>
          <div className='flex-1 w-full'>
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div>
                <label htmlFor="name" className='block mb-2'>Your Name</label>
                <input
                  type="text"
                  id="name"
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                  value={name}
                  onChange={handleInputChange}
                  placeholder='Enter Your Name'
                />
                {errors.name && <p className="text-red-500 mt-2">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className='block mb-2'>Email</label>
                <input
                  type="text"
                  id="email"
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                  value={email}
                  onChange={handleInputChange}
                  placeholder='Enter Your Email'
                />
                {errors.email && <p className="text-red-500 mt-2">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="message" className='block mb-2'>Message</label>
                <textarea
                  id="message"
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                  value={message}
                  onChange={handleInputChange}
                  rows="5"
                  placeholder='Enter Your Message'
                />
                {errors.message && <p className="text-red-500 mt-2">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className='bg-gradient-to-r from-green-400 to-blue-500 text-white w-full md:w-auto transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
              >
                Send
              </button>
            </form>
            <motion.div
              className={`mt-4 text-center ${successMessage ? 'text-green-500' : 'text-red-500'}`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: successMessage || errorMessage ? 1 : 0, scale: successMessage || errorMessage ? 1 : 0.5 }}
              transition={{ duration: 0.5 }}
            >
              {successMessage && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaCheck className="inline-block mr-2" />
                  {successMessage}
                </motion.div>
              )}
              {errorMessage && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaTimes className="inline-block mr-2" />
                  {errorMessage}
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
