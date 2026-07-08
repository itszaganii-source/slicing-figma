import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Testimonial from './components/Testimonial'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Services />
      <Testimonial />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
