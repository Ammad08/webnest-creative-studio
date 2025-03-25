
import React, { useState, useEffect } from 'react';
import { setupScrollAnimations } from '../utils/animations';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { toast } from 'sonner';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Success toast notification
    toast.success('Message sent successfully! We will contact you shortly.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    
    setIsSubmitting(false);
  };

  useEffect(() => {
    const cleanup = setupScrollAnimations();
    return cleanup;
  }, []);

  return (
    <section id="contact" className="py-20 bg-dark-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium text-blue-light bg-blue/10 rounded-full">
            Get In Touch
          </span>
          <h2 className="section-title">Ready to Start Your Project?</h2>
          <p className="section-subtitle">
            Fill out the form below to discuss your project requirements, get a quote, or learn more about our services.
            Our team is ready to help you bring your vision to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact information */}
          <div className="lg:col-span-1 animate-on-scroll">
            <div className="glass-card p-6 md:p-8 h-full">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-blue/10 flex items-center justify-center text-blue-light mr-4">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Email</p>
                    <a href="mailto:info@webnest.com" className="text-white hover:text-blue-light transition-colors">
                      info@webnest.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-blue/10 flex items-center justify-center text-blue-light mr-4">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Phone</p>
                    <a href="tel:+11234567890" className="text-white hover:text-blue-light transition-colors">
                      +1 (123) 456-7890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-blue/10 flex items-center justify-center text-blue-light mr-4">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Address</p>
                    <address className="text-white not-italic">
                      123 Innovation Drive<br />
                      Tech Center, CA 94103
                    </address>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-8 border-t border-white/10">
                <h4 className="text-white font-medium mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
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
            </div>
          </div>
          
          {/* Contact form */}
          <div className="lg:col-span-2 animate-on-scroll">
            <div className="glass-card p-6 md:p-8">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-300 border border-dark-400 rounded-lg
                                text-white focus:outline-none focus:ring-2 focus:ring-blue
                                focus:border-transparent transition-all"
                      placeholder="John Smith"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-300 border border-dark-400 rounded-lg
                                text-white focus:outline-none focus:ring-2 focus:ring-blue
                                focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white/70 mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-300 border border-dark-400 rounded-lg
                                text-white focus:outline-none focus:ring-2 focus:ring-blue
                                focus:border-transparent transition-all"
                      placeholder="+1 (123) 456-7890"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-white/70 mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-300 border border-dark-400 rounded-lg
                                text-white focus:outline-none focus:ring-2 focus:ring-blue
                                focus:border-transparent transition-all"
                    >
                      <option value="" disabled>Select a subject</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Mobile App">Mobile App</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="E-Commerce">E-Commerce</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-dark-300 border border-dark-400 rounded-lg
                              text-white focus:outline-none focus:ring-2 focus:ring-blue
                              focus:border-transparent transition-all"
                    placeholder="Tell us about your project and requirements..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="neo-button w-full md:w-auto px-8 py-3 text-white flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
