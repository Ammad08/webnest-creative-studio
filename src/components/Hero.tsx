import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { setupScrollAnimations } from '../utils/animations';

const Hero = () => {
  // State for stats numbers
  const [stats, setStats] = useState([
    { number: 0, target: 200, label: 'Projects Completed', suffix: '+' },
    { number: 0, target: 50, label: 'Happy Clients', suffix: '+' },
    { number: 0, target: 99, label: 'Client Satisfaction', suffix: '%' },
    { number: 0, target: 24, label: 'Customer Support', suffix: '/7' },
  ]);

  // Existing scroll animations
  useEffect(() => {
    const cleanup = setupScrollAnimations();
    return cleanup;
  }, []);

  // Counting animation for stats
  useEffect(() => {
    const animateStats = () => {
      setStats((prevStats) =>
        prevStats.map((stat) => {
          if (stat.number < stat.target) {
            return { ...stat, number: Math.min(stat.number + 1, stat.target) };
          }
          return stat;
        })
      );
    };

    const interval = setInterval(animateStats, 20); // Adjust speed here (20ms per increment)
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section className="bg-black text-white pt-24 pb-20"> {/* Increased pt-16 to pt-24 */}
      {/* Top Content Section */}
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium text-blue-300 bg-blue-900 rounded-full">
            IT Services & Web Development
          </span>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="block">Transform Your Business With</span>
            <span className="text-blue-400">Custom Web Solutions</span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            We craft stunning, high-performance websites that drive growth and elevate your brand. 
            Faster delivery. Affordable pricing. Exceptional results.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-blue-500 text-white px-8 py-3 text-base font-medium rounded-lg hover:bg-blue-600 transition"
            >
              Start Your Project
              <ArrowRight className="inline-block ml-2 h-4 w-4" />
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-3 text-base font-medium text-white border border-gray-600 rounded-lg hover:border-gray-500 transition"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-700">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
              alt="WebNest Project Example" 
              className="w-full h-auto"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-900 to-transparent"></div>
          </div>
        </div>

        {/* Stats Section with Counting Animation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                {stat.number}
                {stat.suffix}
              </h3>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Brands Section */}
        <div>
          <p className="text-center text-sm text-gray-400 mb-6">TRUSTED BY INNOVATIVE COMPANIES</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="h-8 w-24 bg-gray-800 rounded-md animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Effect */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;