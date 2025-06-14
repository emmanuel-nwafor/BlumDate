import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonials = [
    {
      image: 'https://res.cloudinary.com/dbczfoqnc/image/upload/v1749845337/4b28601c830887a7f8ec2ba8ad92a5f3586b8c05_1_gzs0lt.jpg', 
      quote: '"We both Liked Each Other on Blumdate. Our first date was a picnic under the trees. He made me laugh so hard I forgot to be nervous."',
      author: 'Sarah & Daniel',
    },
    {
      image: 'https://res.cloudinary.com/dbczfoqnc/image/upload/v1749845376/b70f4a9032e8465bc13270fcda99dbda81951ca6_ju3vlb.jpg',
      quote: '"We got chatting and he complimented my smile, and I nearly didn’t reply. Now we text every morning before work."',
      author: 'Rachel & James',
    },
    {
      image: '/src/assets/testimonial3.jpg', // Replace with the third image path (couple with pet)
      quote: '"We paired on Blumdate. Our first date was natural, a walk in the park, the conversations deeper. Now he loves my pet."',
      author: 'Lina & Ethan',
    },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-12 px-4 bg-black text-white text-center relative rounded-2xl">
      {motion}
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-4 text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        We Found Something <span className="text-purple-500">Beautiful</span>
      </motion.h2>
      <motion.p
        className="text-lg text-gray-400 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Three couples. Three stories. One thing in common – it all started here.
      </motion.p>
      <div className="relative max-w-4xl mx-auto">
        <motion.div
          className="overflow-hidden rounded-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex"
            animate={{ x: `-${currentSlide * 100}%` }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div
                  className="relative w-full h-[600px] bg-cover bg-center rounded-xl"
                  style={{ backgroundImage: `url(${testimonial.image})` }}
                >
                  <motion.p
                    className="m-3 max-md:-translate-x-[150px] -translate-x-[300px] inline-block bg-gray-300 text-purple-600 font-semibold p-2 rounded-full mb-4 transition"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    LOVE STORY
                  </motion.p>
                  <div className="absolute bottom-0 left-0 w-full p-6 backdrop-blur-sm rounded-b-xl">
                    <div className="text-center">
                      <p className="text-lg italic mb-4 text-white">{testimonial.quote}</p>
                      <p className="text-sm font-bold">{testimonial.author}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
        {/* Desktop Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-x-[100px] bg-white bg-opacity-50 text-black rounded-full p-3 hover:bg-opacity-75 transition md:flex hidden"
        >
          <i className='bx bx-arrow-back text-purple-700'></i>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform translate-x-[100px] bg-white bg-opacity-50 text-black rounded-full p-3 hover:bg-opacity-75 transition md:flex hidden"
        >
          <i className='bx bx-arrow-back bx-rotate-180 text-purple-700' ></i>
        </button>
        {/* Mobile Buttons */}
        <div className="mt-4 flex items-center justify-center md:hidden">
          <button
            onClick={prevSlide}
            className="bg-white bg-opacity-50 text-purple-800 rounded-full p-3 px-3 py-2 hover:bg-opacity-75 transition mr-2"
          >
            <i className='bx bx-arrow-back'></i>
          </button>
          <button
            onClick={nextSlide}
            className="bg-white bg-opacity-50 text-purple-800 rounded-full p-3 px-3 py-2 hover:bg-opacity-75 transition"
          >
            <i className='bx bx-arrow-back bx-rotate-180' ></i>
          </button>
        </div>
      </div>
    </section>
  );
}