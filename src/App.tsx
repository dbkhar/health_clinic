import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Doctors from './components/Doctors';
import Testimonials from './components/Testimonials';
import Appointment from './components/Appointment';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update the page title
    document.title = 'MediCare - Expert Healthcare Services';
    
    // Find the title element and update it
    const titleElement = document.querySelector('title[data-default]');
    if (titleElement) {
      titleElement.textContent = 'MediCare - Expert Healthcare Services';
    }
  }, []);

  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <About />
      <Services />
      <Doctors />
      <Testimonials />
      <Appointment />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;