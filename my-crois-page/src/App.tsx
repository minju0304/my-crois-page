import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from'./pages/HomePage'
import CompanyPage from './pages/CompanyPage'
import SolutionsPage from './pages/SolutionsPage'
import ServicePage from './pages/ServicePage'
import RnDPage from './pages/RnDPage'
import CommunityPage from './pages/CommunityPage'
import ScrollToTop from './components/ScrollToTop'
import reactLogo from './assets/react.svg'

function App() {

  return (
    <BrowserRouter>
    <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/rnd" element={<RnDPage />} />
        <Route path="/community" element={<CommunityPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}


export default App

