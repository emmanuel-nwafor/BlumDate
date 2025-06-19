import React from 'react'
import Header2 from '../components/Header2'
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function ContactUs() {
  return (
    <>
      <Header2 />
      <div className="bg-gray-100 h-screen">
        <div className="flex">
          <h1 className="font-bold text-black">
            Contact Us
          </h1>
        </div>
      </div>
      <CTA />
      <Footer />
    </>
  )
}
