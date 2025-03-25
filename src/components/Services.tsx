
import React, { useEffect } from 'react';
import { setupScrollAnimations } from '../utils/animations';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon, title, description, features, link }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  link: string;
}) => (
  <div className="glass-card p-6 md:p-8 card-hover animate-on-scroll">
    <div className="w-12 h-12 rounded-xl bg-blue/10 flex items-center justify-center text-blue-light mb-5">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-muted-foreground mb-6">{description}</p>
    
    <ul className="space-y-2 mb-6">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start gap-2">
          <Check size={16} className="text-blue-light mt-1 flex-shrink-0" />
          <span className="text-sm text-white/80">{feature}</span>
        </li>
      ))}
    </ul>
    
    <Link to={link} className="group flex items-center gap-2 text-sm font-medium text-blue-light hover:text-white transition-colors">
      Learn more 
      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
    </Link>
  </div>
);

const Services = () => {
  useEffect(() => {
    const cleanup = setupScrollAnimations();
    return cleanup;
  }, []);

  const services = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>,
      title: "Web Development",
      description: "Custom websites built for your specific business needs, with cutting-edge technologies.",
      features: [
        "Responsive & mobile-friendly design",
        "SEO optimization built-in",
        "High performance & speed",
        "Content management system",
      ],
      link: "/services#web-development"
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: [
        "Intuitive user interfaces",
        "Performance optimization",
        "Offline functionality",
        "App store submission assistance"
      ],
      link: "/services#mobile-development"
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that enhance user experience and engagement.",
      features: [
        "User research & personas",
        "Wireframing & prototyping",
        "Visual design & branding",
        "Usability testing"
      ],
      link: "/services#ui-ux-design"
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>,
      title: "E-Commerce Solutions",
      description: "Fully-featured online stores that drive sales and provide great customer experiences.",
      features: [
        "Secure payment gateway integration",
        "Inventory management",
        "Mobile-optimized checkout",
        "Marketing & analytics tools"
      ],
      link: "/services#ecommerce"
    }
  ];
  
  return (
    <section id="services" className="py-20 bg-dark-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium text-blue-light bg-blue/10 rounded-full">
            Our Services
          </span>
          <h2 className="section-title">
            Comprehensive Web Solutions for Your Business
          </h2>
          <p className="section-subtitle">
            We deliver innovative, tailored solutions that help businesses establish a powerful online presence.
            Everything you need to succeed online, under one roof.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        
        <div className="mt-16 text-center animate-on-scroll">
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 neo-button px-8 py-3"
          >
            View All Services
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
