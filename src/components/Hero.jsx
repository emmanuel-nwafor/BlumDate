import React from 'react'
import Header from './Header'

export default function Hero() {
  return (
    <>
        {/* <Header /> */}
        <section className="h-screen bg-cover bg-center z-0 flex flex-col justify-center items-center text-center text-white relative hero-overlay" style={{ backgroundImage: "url('https://res.cloudinary.com/dbczfoqnc/image/upload/v1749846780/6f51e1ab1f8b02de141a00d18e2fa6e8cbf77f8a_d1fkod.jpg')" }}>
            <div className="max-w-3xl mx-auto px-4 z-10">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 custom-font animate-fade-in-up delay-200">
                Every Great Love Story Begins with a Simple Hello
                </h1>
                <p className="text-lg md:text-xl mb-8 animate-fade-in-up delay-400">
                Thousands have already found the spark – why not you?
                </p>
                <button className="text-pink-500 hover:text-purple-700 bg-gray-200 px-4 py-3 rounded-full font-semibold animate-fade-in-up">
                Start Your Love Story Today
                </button>
            </div>
        </section>
    </>
  )
}
