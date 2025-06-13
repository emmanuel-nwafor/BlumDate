import React from 'react';

export default function SectionOne() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center p-4 md:p-20 bg-gray-50">
      <div className="md:text-left mb-6 md:mb-0 md:mr-6 w-full md:w-1/2">
        <h1 className="text-5xl max-md:text-2xl">
          Love Isn’t Waiting — It’s Happening <br /> Right Now…
        </h1>
        <p className="mt-4">
          The right person could be one message away. Don’t let today end without finding them.
        </p>
      </div>
      <div className="w-full md:w-1/2 mb-4 md:mb-0">
        <div
          className="rounded-xl m-2 md:m-5 bg-[url('/src/assets/section1.jpg')] bg-cover bg-center h-[500px] w-auto "
        ></div>
      </div>
    </div>
  );
}