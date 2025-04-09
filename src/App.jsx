import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/Header';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Pricing from './components/Pricing';
import Features from './components/Features';
import LandlordDashboard from './components/LandlordDashboard';
import TenantDashboard from './components/TenantDashboard'


function App() {

  return (
    <>
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Pricing" element={<Pricing/>}/>
        <Route path="/Feature" element={<Features/>}/>
        <Route path="/landlord/dashboard" element={<LandlordDashboard />} />
        <Route path="/tenant/dashboard" element={<TenantDashboard />} />
      </Routes>
    <Footer />
    </Router>

      
    </>
  )
}

export default App

