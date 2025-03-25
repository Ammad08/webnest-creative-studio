
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { setupScrollAnimations } from '../utils/animations';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  useEffect(() => {
    const cleanup = setupScrollAnimations();
    return cleanup;
  }, []);

  const services = [
    {
      id: "web-development",
      title: "Web Development",
      description: "Custom websites built for your specific business needs, with cutting-edge technologies.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      benefits: [
        "Responsive & mobile-friendly design",
        "SEO optimization built-in",
        "High performance & speed",
        "Content management system",
        "Integration with third-party services",
        "Secure hosting & maintenance",
      ],
      tech: ["React", "Angular", "Vue.js", "Node.js", "WordPress", "Shopify"],
      process: [
        "Discovery & Requirements Gathering",
        "Information Architecture & Wireframing",
        "Visual Design & Prototyping",
        "Development & Testing",
        "Deployment & Training",
        "Ongoing Support & Maintenance"
      ]
    },
    {
      id: "mobile-development",
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      image: "https://images.unsplash.com/photo-1481887328591-3e277f9473dc",
      benefits: [
        "Intuitive user interfaces",
        "Performance optimization",
        "Offline functionality",
        "App store submission assistance",
        "Analytics integration",
        "Push notifications"
      ],
      tech: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AWS Amplify"],
      process: [
        "Mobile Strategy & Requirements",
        "UX/UI Design for Mobile",
        "App Development",
        "Testing & QA",
        "App Store Submission",
        "Post-Launch Support"
      ]
    },
    {
      id: "ui-ux-design",
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that enhance user experience and engagement.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
      benefits: [
        "User research & personas",
        "Wireframing & prototyping",
        "Visual design & branding",
        "Usability testing",
        "Design systems",
        "Accessibility-focused design"
      ],
      tech: ["Figma", "Adobe XD", "Sketch", "InVision", "Zeplin", "Principle"],
      process: [
        "User Research & Analysis",
        "Information Architecture",
        "Wireframing & Prototyping",
        "Visual Design",
        "User Testing",
        "Design Handoff"
      ]
    },
    {
      id: "ecommerce",
      title: "E-Commerce Solutions",
      description: "Fully-featured online stores that drive sales and provide great customer experiences.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      benefits: [
        "Secure payment gateway integration",
        "Inventory management",
        "Mobile-optimized checkout",
        "Marketing & analytics tools",
        "Product catalog management",
        "Order processing & fulfillment"
      ],
      tech: ["Shopify", "WooCommerce", "Magento", "BigCommerce", "Custom Solutions", "Headless Commerce"],
      process: [
        "Store Planning & Setup",
        "Product Catalog Configuration",
        "Payment & Shipping Integration",
        "Store Design & Branding",
        "Testing & Launch",
        "Marketing & Growth Support"
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-dark-100">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero */}
        <section className="py-16 md:py-20 bg-dark-100">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-on-scroll">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-medium text-blue-light bg-blue/10 rounded-full">
                Our Services
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-display">
                Tailored Web Solutions for Your Business Needs
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                From custom web development to e-commerce solutions, we provide the digital tools you need to succeed.
                Discover how our services can help your business grow.
              </p>
            </div>
          </div>
        </section>
        
        {/* Services Detail */}
        <section className="py-12 md:py-16 bg-dark-100">
          <div className="container mx-auto px-4">
            <div className="space-y-32">
              {services.map((service, index) => (
                <div 
                  key={service.id} 
                  id={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  {/* Image */}
                  <div className={`animate-on-scroll ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-dark-200/60 to-transparent"></div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="animate-on-scroll">
                    <span className="inline-block px-3 py-1 mb-4 text-xs font-medium text-blue-light bg-blue/10 rounded-full">
                      Service
                    </span>
                    <h2 className="text-3xl font-bold text-white mb-4 font-display">{service.title}</h2>
                    <p className="text-muted-foreground mb-8">{service.description}</p>
                    
                    <h3 className="text-lg font-semibold text-white mb-4">Key Benefits</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check size={16} className="text-blue-light mt-1 flex-shrink-0" />
                          <span className="text-sm text-white/80">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-white mb-4">Technologies We Use</h3>
                      <div className="flex flex-wrap gap-2">
                        {service.tech.map((tech, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 bg-dark-300 text-white/80 rounded-full text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-4">Our Process</h3>
                    <ol className="space-y-2 mb-8">
                      {service.process.map((step, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue/10 flex items-center justify-center text-blue-light text-xs">
                            {i + 1}
                          </span>
                          <span className="text-sm text-white/80">{step}</span>
                        </li>
                      ))}
                    </ol>
                    
                    <Link 
                      to="/contact" 
                      className="neo-button inline-flex items-center gap-2 px-6 py-3 mt-4"
                    >
                      Discuss Your Project
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-16 bg-dark-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-on-scroll">
              <h2 className="text-3xl font-bold text-white mb-6 font-display">Ready to Start Your Project?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Contact us today to discuss your project requirements and get a free consultation. 
                Our team is ready to help you bring your ideas to life.
              </p>
              <Link to="/contact" className="neo-button inline-flex items-center gap-2 px-8 py-3">
                Get a Free Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
