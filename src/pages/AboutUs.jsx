import React from 'react';
import Header from '../components/Header';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function AboutUs() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-72 sm:h-96 bg-cover bg-center bg-[url(https://res.cloudinary.com/dbczfoqnc/image/upload/v1749845337/4b28601c830887a7f8ec2ba8ad92a5f3586b8c05_1_gzs0lt.jpg)]">
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />
        <div className="relative z-10 flex flex-col justify-center items-center h-full">
          <Header />
          <h1 className="text-3xl md:text-4xl text-white font-bold mt-6">About us</h1>
        </div>
      </div>

      {/* About Section 1 */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 px-4 py-10 md:px-10">
        <div className="w-full md:w-1/2">
          <div
            className="rounded-xl bg-[url('/src/assets/testimonial3.jpg')] bg-cover bg-center h-[300px] sm:h-[400px] md:h-[500px] w-full"
          />
        </div>
        <div className="w-full md:w-1/2 text-justify text-sm sm:text-base">
          <h2 className="font-bold text-xl">
            Our Story
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Lectus sed enim nunc ultricies posuere
            cursus nisi velit netus. Consectetur tincidunt ullamcorper amet vestibulum 
            in platea turpis pharetra accumsan. Varius etiam nisl nunc semper. Purus 
            rhoncus turpis quis egestas nisl sed ultricies neque morbi. Mauris ut dolor 
            amet sed et ac viverra sagittis. Fames et ut eget sit pellentesque urna. 
            Egestas nulla facilisi mauris platea nunc mattis sagittis duis placerat.
            Massa sit quis elit scelerisque ornare feugiat. Nisl et diam dictum ligula
            tellus eget ridiculus lacus. Accumsan vulputate habitant sagittis volutpat
            id tellus id ut. Ultricies id feugiat metus sed volutpat eleifend. Nec et 
            euismod diam blandit in quis libero a.
            Aliquet imperdiet bibendum pretium sed egestas potenti. Elementum pulvinar 
            libero id ac cum senectus ullamcorper neque. Non tellus sit sed.
          </p>
        </div>
      </div>

      {/* About Section 2 */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-6 px-4 py-10 md:px-10">
        <div className="w-full md:w-1/2">
          <div
            className="rounded-xl bg-[url('/src/assets/testimonial2.jpg')] bg-cover bg-center h-[300px] sm:h-[400px] md:h-[500px] w-full"
          />
        </div>
        <div className="w-full md:w-1/2 text-justify text-sm sm:text-base">
          <h2 className="font-bold text-xl">
            Our Story
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Lectus sed enim nunc ultricies posuere
            cursus nisi velit netus. Consectetur tincidunt ullamcorper amet vestibulum 
            in platea turpis pharetra accumsan. Varius etiam nisl nunc semper. Purus 
            rhoncus turpis quis egestas nisl sed ultricies neque morbi. Mauris ut dolor 
            amet sed et ac viverra sagittis. Fames et ut eget sit pellentesque urna. 
            Egestas nulla facilisi mauris platea nunc mattis sagittis duis placerat.
            Massa sit quis elit scelerisque ornare feugiat. Nisl et diam dictum ligula
            tellus eget ridiculus lacus. Accumsan vulputate habitant sagittis volutpat
            id tellus id ut. Ultricies id feugiat metus sed volutpat eleifend. Nec et 
            euismod diam blandit in quis libero a.
            Aliquet imperdiet bibendum pretium sed egestas potenti. Elementum pulvinar 
            libero id ac cum senectus ullamcorper neque. Non tellus sit sed.
          </p>
        </div>
      </div>

      {/* CTA + Footer */}
      <CTA />
      <Footer />
    </>
  );
}
