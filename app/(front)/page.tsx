'use client'
import Carousel from '@/components/FrontEnd/Carousel'
import Footer from '@/components/FrontEnd/Footer'
import Hero from '@/components/FrontEnd/Hero'
import Navbar from '@/components/FrontEnd/Navbar'
import React from 'react'

export default function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  )
}