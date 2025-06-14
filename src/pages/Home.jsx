import React from 'react'
import Hero from '../components/Hero'
import SectionOne from '../components/SectionOne'
import SectionTwo from '../components/SectionTwo'
import SectionThree from '../components/SectionThree'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}
