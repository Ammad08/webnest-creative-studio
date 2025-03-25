
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-dark-100">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center pt-16">
        <div className="container px-4 py-20">
          <div className="max-w-lg mx-auto text-center">
            <div className="relative mb-8 mx-auto">
              <div className="w-40 h-40 bg-blue/10 rounded-full flex items-center justify-center mx-auto animate-pulse">
                <span className="text-8xl font-bold text-white/10">404</span>
              </div>
              <h1 className="absolute inset-0 flex items-center justify-center text-5xl font-bold text-white">404</h1>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Page Not Found</h2>
            
            <p className="text-muted-foreground mb-8">
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back on track.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/" 
                className="neo-button px-6 py-3 flex items-center justify-center gap-2"
              >
                <ArrowLeft size={16} />
                Return to Home
              </Link>
              
              <Link 
                to="/contact" 
                className="px-6 py-3 border border-white/20 rounded-lg hover:border-white/40 transition-colors text-white"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
