import React from 'react';
import Header from '../components/Header';

export default function AboutUs() {
  return (
    <div>
      <div className="relative h-72 sm:h-96 bg-cover bg-center bg-[url(https://res.cloudinary.com/dbczfoqnc/image/upload/v1749845337/4b28601c830887a7f8ec2ba8ad92a5f3586b8c05_1_gzs0lt.jpg)]">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full">
          <Header />
          <h1 className="text-3xl text-white font-bold mt-6">About us</h1>
        </div>
      </div>

      <h1 className="text-4xl">Hello</h1>
    </div>
  );
}
