import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import ProgrammerModel from './ProgrammerModel';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaJava, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiVite, SiCsharp, SiCplusplus, SiTypescript } from 'react-icons/si';
import { OrbitControls } from '@react-three/drei';

const technologies = [
  { icon: <FaHtml5 size={48} className="text-orange-600" />, name: "HTML5" },
  { icon: <FaCss3Alt size={48} className="text-blue-600" />, name: "CSS3" },
  { icon: <FaJsSquare size={48} className="text-yellow-500" />, name: "JavaScript" },
  { icon: <SiTypescript size={48} className="text-blue-500" />, name: "TypeScript" },
  { icon: <FaReact size={48} className="text-cyan-500" />, name: "ReactJS" },
  { icon: <FaNodeJs size={48} className="text-green-500" />, name: "NodeJS" },
  { icon: <SiTailwindcss size={48} className="text-cyan-400" />, name: "TailwindCSS" },
  { icon: <SiVite size={48} className="text-purple-600" />, name: "Vite" },
  { icon: <FaJava size={48} className="text-red-600" />, name: "Java" },
  { icon: <SiCsharp size={48} className="text-purple-700" />, name: "C#" },
  { icon: <SiCplusplus size={48} className="text-blue-600" />, name: "C++" },
  { icon: <FaGitAlt size={48} className="text-orange-600" />, name: "Git" },
  { icon: <FaDatabase size={48} className="text-red-500" />, name: "Database" }
];

const About = () => {
  const [tooltip, setTooltip] = useState({ visible: false, name: '', x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setTooltip({
        ...tooltip,
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [tooltip]);

  const handleMouseEnter = (name, e) => {
    setTooltip({
      visible: true,
      name: name,
      x: e.clientX,
      y: e.clientY
    });
  };

  const handleMouseLeave = () => {
    setTooltip({
      visible: false,
      name: '',
      x: 0,
      y: 0
    });
  };

  return (
    <motion.div
      className="bg-black text-white py-20"
      id="about"
      style={{ paddingTop: '100px' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="w-72 h-80 mb-8 md:mb-0">
            <Canvas>
              <ambientLight intensity={0.5} />
              <directionalLight position={[0, 0, 5]} intensity={1} />
              <ProgrammerModel />
              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>
          <div className="flex-1">
            <p className="text-lg mb-8">
              I am a passionate full-stack developer with a focus on building modern and responsive web applications. With a strong foundation in both frontend and backend technologies, I strive to create seamless and efficient user experiences.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-3/12">Web Development</label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-3/12">Backend Development</label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12"></div>
                </div>
              </div>
            </div>
            <div className="mt-12 flex justify-between text-center">
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">2+</h3>
                <p>Years Experience</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">30+</h3>
                <p>Projects Completed</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">5.5/6</h3>
                <p>Average Grade</p>
              </div>
            </div>
          </div>
        </div>
        {/* Technologies Section */}
        <div className="mt-16">
          <h2 className="text-4xl font-bold text-center mb-8">Technologies</h2>
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.1 }} // Faster animation
                className="transition-transform duration-150"
                onMouseEnter={(e) => handleMouseEnter(tech.name, e)}
                onMouseLeave={handleMouseLeave}
              >
                {tech.icon}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {tooltip.visible && (
        <div
          style={{
            position: 'fixed',
            top: tooltip.y + 20,
            left: tooltip.x + 20,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            padding: '5px 10px',
            borderRadius: '4px',
            pointerEvents: 'none',
            zIndex: 1000
          }}
        >
          {tooltip.name}
        </div>
      )}
    </motion.div>
  );
};

export default About;
