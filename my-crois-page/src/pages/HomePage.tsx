// import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import BusinessSection from '../components/BusinessSection'

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <BusinessSection />
    </div>
  )
}