
import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { setupScrollAnimations } from '../utils/animations';

const Hero = () => {
  useEffect(() => {
    const cleanup = setupScrollAnimations();
    return cleanup;
  }, []);

  return (
    <section className="relative pt-36 md:pt-44 pb-20 overflow-hidden bg-dark-100">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] -left-[10%] w-[500px] h-[500px] rounded-full bg-blue/10 blur-[120px]" />
        <div className="absolute -right-[20%] top-[20%] w-[400px] h-[400px] rounded-full bg-blue-dark/20 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center staggered-fade-in">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium text-blue-light bg-blue/10 rounded-full">
            IT Services & Web Development
          </span>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white font-display mb-6">
            <span className="block">Transform Your Business With</span>
            <span className="text-gradient">
              Custom Web Solutions
            </span>
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
            We craft stunning, high-performance websites that drive growth and elevate your brand. 
            Faster delivery. Affordable pricing. Exceptional results.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link to="/contact" className="neo-button px-8 py-3 text-base font-medium">
              Start Your Project
              <ArrowRight className="inline-block ml-2 h-4 w-4" />
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-3 text-base font-medium text-white border border-white/20 rounded-lg
                         hover:border-white/40 transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Featured project mockup */}
        <div className="relative max-w-5xl mx-auto animate-on-scroll">
          <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-transparent to-dark-100 z-10"></div>
          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
              alt="WebNest Project Example" 
              className="w-full"
              loading="lazy"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-on-scroll">
          {[
            { number: '200+', label: 'Projects Completed' },
            { number: '50+', label: 'Happy Clients' },
            { number: '99%', label: 'Client Satisfaction' },
            { number: '24/7', label: 'Customer Support' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.number}</h3>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Brands */}
        <div className="mt-20 animate-on-scroll">
          <p className="text-center text-sm text-muted-foreground mb-6">TRUSTED BY INNOVATIVE COMPANIES</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="h-8 w-24 bg-white/5 rounded-md animate-pulse-slow"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
