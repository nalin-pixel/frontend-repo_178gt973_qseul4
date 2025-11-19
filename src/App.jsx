import React from 'react'
import Hero from './components/Hero'
import LocalTrust from './components/LocalTrust'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import About from './components/About'
import Testimonials from './components/Testimonials'
import LocalSEO from './components/LocalSEO'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Hero with Spline asset */}
      <Hero />

      {/* Local trust & authority */}
      <LocalTrust />

      {/* Services overview */}
      <Services />

      {/* Why choose us */}
      <WhyChooseUs />

      {/* About */}
      <About />

      {/* Testimonials */}
      <Testimonials />

      {/* Local SEO */}
      <LocalSEO />

      {/* Footer */}
      <Footer />

      {/* Floating mobile CTA */}
      <a
        href="tel:01926336951"
        className="fixed bottom-5 right-5 sm:hidden inline-flex items-center gap-2 px-4 py-3 rounded-full bg-rose-600 text-white shadow-lg"
      >
        Call Now
      </a>
    </div>
  )
}

export default App
