import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
        <header className="absolute top-0 left-0 w-full flex justify-between items-center p-4 z-10">
            <img src="/src/assets/logo.png" alt="Blum-date Logo" className="h-8 animate-fade-in-up" />

            <div className="flex">
                <Link to="/" className="max-md:text-sm m-2 text-white">
                    Contact Us
                </Link>
                <Link to="/" className="max-md:text-sm m-2 text-white">
                    About Us
                </Link>
            </div>

            <div className="flex space-x-4">
                <a href="#" className="text-pink-500 hover:text-purple-700 bg-gray-200 px-6 py-3 max-md:py-1 max-md:px-[6px] rounded-full">
                Download App
                </a>
            </div>
        </header>
    </>
  )
}
