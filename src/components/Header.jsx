import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; // Import AnimatePresence for conditional rendering
import logo from '../assets/logo.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Animation variants
  const logoVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, staggerChildren: 0.1 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "backOut" } },
  };

  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeInOut" } },
    exit: { opacity: 0, x: "100%", transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <>
      <header className="absolute top-0 left-0 w-full flex justify-between items-center p-4 z-10">
        {motion}
        <motion.img
          src={logo}
          alt="Blum-date Logo"
          className="h-10"
          variants={logoVariants}
          initial="hidden"
          animate="visible"
        />

        {/* Desktop Links with Animation */}
        <motion.div
          className="hidden md:flex space-x-4"
          variants={linkVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={linkVariants}>
            <Link to="/" className="max-md:text-sm m-2 text-white">
              Contact Us
            </Link>
          </motion.div>
          <motion.div variants={linkVariants}>
            <Link to="/" className="max-md:text-sm m-2 text-white">
              About Us
            </Link>
          </motion.div>
        </motion.div>

        {/* Desktop Download Button with Animation */}
        <motion.div
          className="hidden md:flex space-x-4"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.a
            href="#"
            variants={buttonVariants}
            className="text-pink-500 hover:text-purple-700 bg-gray-200 px-6 py-3 max-md:py-1 max-md:px-[6px] rounded-full"
          >
            Download App
          </motion.a>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <motion.button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none text-3xl text-white"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          <i className='bx bx-menu'></i>
        </motion.button>

        {/* Mobile Dropdown Menu with AnimatePresence */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden fixed top-0 left-0 w-full h-screen backdrop-blur-3xl text-white p-4 z-50 flex flex-col items-center justify-center space-y-6"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.button
                onClick={toggleMenu}
                className="absolute top-4 right-4 text-3xl"
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
              >
                <i className='bx bx-x text-white'></i>
              </motion.button>
              <motion.div variants={linkVariants}>
                <Link to="/" className="text-xl hover:text-purple-400 text-white" onClick={toggleMenu}>
                  Contact Us
                </Link>
                <hr />
              </motion.div>
              <motion.div variants={linkVariants}>
                <Link to="/" className="text-xl hover:text-purple-400 text-white" onClick={toggleMenu}>
                  About Us
                </Link>
                <hr />
              </motion.div>
              <motion.div variants={buttonVariants}>
                <a href="#" className="text-pink-500 hover:text-purple-700 bg-gray-200 px-6 py-3 rounded-full" onClick={toggleMenu}>
                  Download App
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}