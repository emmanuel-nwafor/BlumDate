import React from 'react';
import DontMissOutButton from './DontMissOutButton';

export default function SectionThree() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center p-4 md:p-20 bg-gray-50">
      <div className="md:text-left mb-6 md:mb-0 md:mr-6 w-full md:w-1/2">
        <h1 className="text-5xl max-md:text-2xl uppercase">
          The one you’ve been <br /> thinking about… is thinking about you too — on Blumdate                
        </h1>
        <DontMissOutButton />
      </div>
      <div className="w-full md:w-1/2 mb-4 md:mb-0">
        <div
          className="rounded-xl m-2 md:m-5 bg-[url('/src/assets/section3.jpg')] bg-cover bg-center h-[500px] w-auto "
        ></div>
      </div>
    </div>
  );
}