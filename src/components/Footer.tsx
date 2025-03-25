
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-dark-200 text-white pt-16 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Link to="/" className="text-white font-bold text-xl flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-light to-blue flex items-center justify-center text-white font-bold">
                W
              </div>
              <span className="font-display">WebNest</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              Creating beautiful, functional websites that help businesses grow and succeed in the digital world.
            </p>
            <div className="flex space-x-3 mt-4">
              {['twitter', 'facebook', 'instagram', 'linkedin'].map(social => (
                <a 
                  key={social} 
                  href={`#${social}`} 
                  className="w-8 h-8 rounded-full bg-dark-300 flex items-center justify-center
                            hover:bg-blue transition-colors"
                  aria-label={`Follow on ${social}`}
                >
                  <div className="w-4 h-4 bg-white/70"></div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'About Us', path: '/about' },
                { name: 'Portfolio', path: '/portfolio' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-muted-foreground hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Our Services</h3>
            <ul className="space-y-4">
              {[
                { name: 'Web Development', path: '/services#web-development' },
                { name: 'Mobile Apps', path: '/services#mobile-development' },
                { name: 'UI/UX Design', path: '/services#ui-ux-design' },
                { name: 'E-Commerce', path: '/services#ecommerce' },
                { name: 'Digital Marketing', path: '/services#marketing' },
              ].map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.path} 
                    className="text-muted-foreground hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-muted-foreground text-sm">123 Innovation Drive<br />Tech Center, CA 94103</span>
              </li>
              <li>
                <a href="mailto:info@webnest.com" className="text-muted-foreground hover:text-white transition-colors text-sm">
                  info@webnest.com
                </a>
              </li>
              <li>
                <a href="tel:+11234567890" className="text-muted-foreground hover:text-white transition-colors text-sm">
                  +1 (123) 456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-dark-300 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-xs mb-4 sm:mb-0">
            © {new Date().getFullYear()} WebNest. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-muted-foreground hover:text-white transition-colors text-xs">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-white transition-colors text-xs">
              Terms of Service
            </Link>
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-dark-300 flex items-center justify-center
                         hover:bg-blue transition-colors ml-2"
              aria-label="Back to top"
            >
              <ArrowUp size={16} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
