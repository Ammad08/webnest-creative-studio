
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import { setupScrollAnimations } from '../utils/animations';

const ContactPage = () => {
  useEffect(() => {
    const cleanup = setupScrollAnimations();
    return cleanup;
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-dark-100">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero */}
        <section className="py-16 md:py-20 bg-dark-100">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-on-scroll">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-medium text-blue-light bg-blue/10 rounded-full">
                Contact Us
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-display">
                Let's Build Something Amazing Together
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Have a project in mind or questions about our services? We'd love to hear from you. 
                Reach out to discuss how we can help bring your ideas to life.
              </p>
            </div>
          </div>
        </section>
        
        {/* Map */}
        <section className="py-8 bg-dark-100">
          <div className="container mx-auto px-4">
            <div className="w-full h-80 rounded-xl overflow-hidden animate-on-scroll">
              {/* Placeholder for map - in a real project, you'd implement Google Maps or another mapping solution */}
              <div className="w-full h-full bg-dark-300 flex items-center justify-center">
                <p className="text-muted-foreground">Interactive Map Would Be Here</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <Contact />
        
        {/* FAQ */}
        <section className="py-16 bg-dark-200">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-subtitle">
                Find answers to common questions about our services, process, and working with us.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6 animate-on-scroll">
                {[
                  {
                    question: "How much does a website typically cost?",
                    answer: "Website costs vary based on complexity, features, and specific requirements. Our projects typically range from $5,000 for simple websites to $50,000+ for complex web applications. We provide detailed quotes after understanding your needs during our initial consultation."
                  },
                  {
                    question: "How long does it take to build a website?",
                    answer: "The timeline depends on the scope and complexity of your project. Simple websites might take 4-6 weeks, while complex web applications can take 3-6 months. We'll provide a specific timeline during our project planning phase."
                  },
                  {
                    question: "Do you offer website maintenance services?",
                    answer: "Yes, we offer various maintenance packages to keep your website secure, updated, and performing optimally. Our maintenance services include regular updates, security monitoring, performance optimization, and content updates."
                  },
                  {
                    question: "What is your design process like?",
                    answer: "Our design process starts with understanding your business goals and target audience. We then create wireframes and mockups, gather feedback, refine the designs, and proceed to development once approved. We involve you at every stage to ensure the final product meets your expectations."
                  },
                  {
                    question: "Do you offer hosting services?",
                    answer: "Yes, we offer reliable, secure hosting solutions for all websites we build. Our hosting packages include regular backups, security updates, and technical support to ensure your website remains online and performs optimally."
                  },
                ].map((faq, index) => (
                  <div key={index} className="glass-card p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
