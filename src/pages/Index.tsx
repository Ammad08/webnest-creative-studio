
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { setupScrollAnimations } from '../utils/animations';

const Index = () => {
  useEffect(() => {
    const cleanup = setupScrollAnimations();
    return cleanup;
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-dark-100">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
