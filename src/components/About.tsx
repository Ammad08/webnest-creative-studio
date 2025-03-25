
import React, { useEffect } from 'react';
import { setupScrollAnimations } from '../utils/animations';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    const cleanup = setupScrollAnimations();
    return cleanup;
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-dark-100 to-dark-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative animate-on-scroll">
            <div className="absolute -top-6 -left-6 w-64 h-64 rounded-full bg-blue/5 blur-[60px]"></div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 rounded-full bg-blue/10 blur-[60px]"></div>
            
            <div className="relative aspect-square max-w-md mx-auto lg:ml-0 rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="WebNest Solutions Team"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-dark-200/60 to-transparent"></div>
              
              {/* Floating stats card */}
              <div className="absolute bottom-4 left-4 right-4 glass-card p-5 backdrop-blur-xl bg-dark-200/70">
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <p className="text-white font-bold text-xl md:text-2xl">5+</p>
                    <p className="text-white/70 text-xs">Years</p>
                  </div>
                  <div>
                    <p className="text-white font-bold text-xl md:text-2xl">200+</p>
                    <p className="text-white/70 text-xs">Projects</p>
                  </div>
                  <div>
                    <p className="text-white font-bold text-xl md:text-2xl">50+</p>
                    <p className="text-white/70 text-xs">Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="animate-on-scroll">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-medium text-blue-light bg-blue/10 rounded-full">
              About Us
            </span>
            <h2 className="section-title">We Build Digital Experiences That Matter</h2>
            <p className="text-muted-foreground mb-6">
              Founded in 2018, WebNest Solutions has been at the forefront of web development, 
              helping businesses of all sizes establish and expand their online presence.
            </p>
            
            <p className="text-muted-foreground mb-8">
              Our team of experienced developers, designers, and digital strategists work collaboratively 
              to deliver solutions that not only look stunning but also drive real business results.
              We believe in creating long-term relationships with our clients, becoming their trusted 
              digital partner.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-dark-300/50 p-5 rounded-xl">
                <h3 className="text-white font-semibold mb-2">Our Mission</h3>
                <p className="text-sm text-white/70">
                  To empower businesses with innovative web solutions that drive growth and success in the digital landscape.
                </p>
              </div>
              <div className="bg-dark-300/50 p-5 rounded-xl">
                <h3 className="text-white font-semibold mb-2">Our Vision</h3>
                <p className="text-sm text-white/70">
                  To be the leading web development partner known for quality, reliability, and exceptional client success.
                </p>
              </div>
            </div>
            
            <Link 
              to="/about" 
              className="inline-flex items-center gap-2 group text-white font-medium"
            >
              Learn more about our team and culture
              <ArrowRight size={16} className="text-blue-light group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
