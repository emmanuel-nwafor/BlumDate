import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; // Import AnimatePresence for conditional rendering
import logo from '../assets/fav.png';

export default function Header2() {
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
        <Link to="/" className="flex items-center ">
          <motion.img
            src={logo}
            alt="Blum-date Logo"
            className="h-10"
            variants={logoVariants}
            initial="hidden"
            animate="visible"
          />
          <p className="text-xl text-black font-bold m-1">
            Blumdate
          </p>
        </Link>

        {/* Desktop Links with Animation */}
        <motion.div
          className="hidden md:flex space-x-4"
          variants={linkVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={linkVariants}>
            <Link to="/contact" className="max-md:text-sm m-2 text-black">
              Contact Us
            </Link>
          </motion.div>
          <motion.div variants={linkVariants}>
            <Link to="/about" className="max-md:text-sm m-2 text-black">
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
            className="text-white bg-purple-700 px-6 py-3 max-md:py-1 max-md:px-[6px] rounded-full"
          >
            Download App
          </motion.a>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <motion.button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none text-3xl text-black"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          <i className='bx bx-menu text-black'></i>
        </motion.button>

        {/* Mobile Dropdown Menu with AnimatePresence */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden fixed top-0 left-0 w-full h-screen bg-white text-black p-6 z-50 flex flex-col"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Top Row: Logo and Close Button */}
              <div className="flex justify-between items-center mb-6">
                <Link to="/" className="flex items-center">
                  <motion.img
                    src={logo}
                    alt="Blum-date Logo"
                    className="h-8"
                    variants={logoVariants}
                    initial="hidden"
                    animate="visible"
                  />
                  <p className="text-xl text-black font-bold m-1">
                    Blumdate
                  </p>
                </Link>
                <motion.button
                  onClick={toggleMenu}
                  className="text-3xl"
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <i className='bx bx-x text-black'></i>
                </motion.button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col space-y-6 mb-auto pl-1 text-[17px] font-medium">
                <motion.div variants={linkVariants}>
                  <Link to="/about" className="hover:underline" onClick={toggleMenu}>
                    About Us
                  </Link>
                </motion.div>
                <motion.div variants={linkVariants}>
                  <Link to="/contact" className="hover:underline" onClick={toggleMenu}>
                    Contact Us
                  </Link>
                </motion.div>
              </div>

              {/* Socials + App Stores + Footer */}
              <div className="space-y-6">
                {/* Social Icons */}
                <div className="flex space-x-4 text-2xl">
                  <a href="#"><i className='bx bxl-facebook'></i></a>
                  <a href="#"><i className='bx bxl-linkedin'></i></a>
                  <a href="#"><i className='bx bxl-instagram'></i></a>
                  <a href="#"><i className='bx bxl-twitter'></i></a>
                  <a href="#"><i className='bx bxl-youtube'></i></a>
                  <a href="#"><i className='bx bxl-tiktok'></i></a>
                </div>

                {/* App Store Buttons */}
                <div className="flex justify- gap-4">
                  <a href="#" class="bg-black rounded-lg p-2 flex items-center justify-center animate-fade-in-up delay-200">
                      <i className='bx bxl-apple text-white text-4xl'></i>            
                      <p className="text-white text-[10px] ml-2">
                          Download on the <br />
                          <span className="text-sm">App Store</span>
                      </p>
                  </a>
                  <a href="#" className="bg-black rounded-lg p-2 flex items-center justify-center animate-fade-in-up delay-400">
                      <i className='bx bxl-play-store text-white text-4xl'></i>            
                      <p className="text-white text-[10px] ml-2">
                          Get it on <br />
                          <span className="text-sm">Google Play</span>
                      </p>
                  </a>
                </div>

                {/* Copyright */}
                <p className="text-xs text-gray-600">
                  Copyright © 2025. Blumdate. All rights reserved.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </header>
    </>
  );
}