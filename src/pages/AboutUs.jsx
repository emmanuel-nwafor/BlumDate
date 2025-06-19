import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

export default function AboutUs() {
  return (
    <div>
      <div className="justify-center items-center flex h-72 sm:h-96 bg-[url(https://res.cloudinary.com/dbczfoqnc/image/upload/v1749845337/4b28601c830887a7f8ec2ba8ad92a5f3586b8c05_1_gzs0lt.jpg)] bg-cover bg-center hero-overlay">
       <Header />
       <h1 className="text-3xl text-white font-bold text-center">
        About us
       </h1>
      </div>

      <h1 className="text-4xl">
        Hello
      </h1>
    </div>
  )
}
