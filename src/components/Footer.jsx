import React from 'react';
import logo from '/src/assets/logo.png'
import AppStores from './AppStores';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col items-center space-y-6">
          <div className="flex items-center">
            <img src={logo} alt="" className='h-14' />
          </div>
          
          <AppStores />
          <div className="flex flex-col space-y-2 text-center">
            <a href="#" className="hover:text-purple-400">Terms of Service</a>
            <a href="#" className="hover:text-purple-400">Privacy Policy</a>
            <a href="#" className="hover:text-purple-400">Copyright Policy</a>
            <a href="#" className="hover:text-purple-400">Cookies Policy</a>
            <a href="#" className="hover:text-purple-400">Safe Dating Tips</a>
            <a href="#" className="hover:text-purple-400">Reporting Tab</a>
            <a href="#" className="hover:text-purple-400">Community Guidelines</a>
            <a href="#" className="hover:text-purple-400">Contact Us</a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-purple-400">
              <i className='bx bxl-facebook'></i>
            </a>
            <a href="#" className="hover:text-purple-400">
              <i className='bx bxl-linkedin'></i>
            </a>
            <a href="#" className="hover:text-purple-400">
              <i className='bx bxl-instagram'></i>
            </a>
            <a href="#" className="hover:text-purple-400">
              <i className='bx bxl-twitter'></i>
            </a>
            <a href="#" className="hover:text-purple-400">
              <i className='bx bxl-youtube'></i>
            </a>
          </div>
          <p className="text-sm">Copyright © 2025 Blumdate. All rights reserved.</p>
        </div>

        {/* Desktop Layout */}
        <div className="flex justify-between p-6 max-md:hidden">
            <div className="flex items-center">
              <img src={logo} alt="" className='h-14' />
            </div>

            <AppStores />
        </div>

        <hr className='max-md:hidden' />

        <div className="p-6 hidden md:flex md:flex-row md:justify-between md:items-center">
          <div className="flex flex-col space-y-">
            <div className="flex space-x-2">
              <a href="#" className="hover:text-purple-400 m-2">Terms of Service</a>
              <a href="#" className="hover:text-purple-400 m-2">Privacy Policy</a>
              <a href="#" className="hover:text-purple-400 m-2">Copyright Policy</a>
              <a href="#" className="hover:text-purple-400 m-2">Cookies Policy</a>
            </div>
            <div className="flex space-x-2">
              <a href="#" className="hover:text-purple-400 m-2">Safe Dating Tips</a>
              <a href="#" className="hover:text-purple-400 m-2">Reporting Tab</a>
              <a href="#" className="hover:text-purple-400 m-2">Community Guidelines</a>
              <a href="#" className="hover:text-purple-400 m-2">Contact Us</a>
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-purple-400">
              <i className='bx bxl-facebook'></i>
            </a>
            <a href="#" className="hover:text-purple-400">
              <i className='bx bxl-linkedin'></i>
            </a>
            <a href="#" className="hover:text-purple-400">
              <i className='bx bxl-instagram'></i>
            </a>
            <a href="#" className="hover:text-purple-400">
              <i className='bx bxl-twitter'></i>
            </a>
            <a href="#" className="hover:text-purple-400">
              <i className='bx bxl-youtube'></i>
            </a>
          </div>
        </div>
        <p className="text-sm p-5 max-md:hidden">Copyright © 2025 Blumdate. All rights reserved.</p>
      </div>
    </footer>
  );
}