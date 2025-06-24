import React from 'react'
import Header2 from '../components/Header2'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import contactImage from '../assets/contact.jpg' 

export default function ContactUs() {
  return (
    <>
      <Header2 />
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 mt-20 p-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Contact Us</h2>
            <p className="text-gray-600 mb-6">
              We’d love to hear from you! Whether it’s feedback, questions, or just saying hello –
              drop us a message below
            </p>
            <form className="space-y-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none"
              ></textarea>
              <div className="flex items-start">
                <input type="checkbox" className="mt-1 mr-2" />
                <p className="text-sm text-gray-700">
                  You agree to our friendly{' '}
                  <a href="#" className="text-blue-600 underline">
                    privacy policy
                  </a>
                  .
                </p>
              </div>
              <button
                type="submit"
                className="w-full bg-fuchsia-600 text-white px-6 py-3 rounded-full hover:bg-fuchsia-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center">
            <img
              src={contactImage}
              alt="Contact Visual"
              className="rounded-lg shadow-lg object-cover max-h-[500px] h-[700px] w-[500px]"
            />
          </div>
        </div>
      </div>
      <CTA />
      <Footer />
    </>
  )
}
