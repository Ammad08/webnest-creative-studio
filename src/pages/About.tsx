
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { setupScrollAnimations } from '../utils/animations';
import { Link } from 'react-router-dom';

type TeamMember = {
  name: string;
  position: string;
  bio: string;
  image: string;
};

const AboutPage = () => {
  useEffect(() => {
    const cleanup = setupScrollAnimations();
    return cleanup;
  }, []);

  const teamMembers: TeamMember[] = [
    {
      name: "David Chen",
      position: "Founder & CEO",
      bio: "David founded WebNest Solutions with a vision to make quality web development accessible to businesses of all sizes. With over 15 years of experience in tech and digital strategy, he leads the company's direction and growth.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    },
    {
      name: "Emily Johnson",
      position: "Creative Director",
      bio: "Emily oversees the creative vision of all projects, ensuring each design is not only beautiful but also purposeful. Her background in both traditional and digital design brings a unique perspective to every project.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop",
    },
    {
      name: "Michael Rodriguez",
      position: "Lead Developer",
      bio: "With expertise in multiple programming languages and frameworks, Michael leads our development team in building robust, scalable web applications that exceed client expectations.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
    },
    {
      name: "Sarah Wilson",
      position: "Project Manager",
      bio: "Sarah ensures that all projects run smoothly from start to finish. Her meticulous attention to detail and excellent communication skills keep projects on time and within budget.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop",
    },
    {
      name: "James Thompson",
      position: "UX Specialist",
      bio: "James is passionate about creating user experiences that are intuitive, accessible, and delightful. His user-centered approach helps clients connect with their audiences effectively.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
    },
    {
      name: "Olivia Parker",
      position: "Marketing Strategist",
      bio: "Olivia helps clients maximize their online presence through strategic digital marketing. She specializes in SEO, content marketing, and analytics-driven growth strategies.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop",
    },
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
                About Us
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-display">
                Our Story
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Get to know the team behind WebNest Solutions and our approach to building exceptional web experiences.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16 bg-dark-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="animate-on-scroll">
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                    alt="WebNest Solutions Team"
                    className="w-full"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-dark-200/60 to-transparent"></div>
                </div>
              </div>
              
              {/* Content */}
              <div className="animate-on-scroll">
                <h2 className="text-3xl font-bold text-white mb-6 font-display">From Idea to Industry Leader</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded in 2018, WebNest Solutions began with a simple mission: to make quality web development accessible to businesses of all sizes. What started as a small team of passionate developers has grown into a full-service digital agency with expertise across web development, design, and digital marketing.
                  </p>
                  <p>
                    Our journey hasn't been about becoming the biggest agency, but rather the most impactful one for our clients. We've deliberately maintained a boutique approach that allows us to provide personalized service and attention to detail that larger agencies often cannot match.
                  </p>
                  <p>
                    Today, we're proud to have worked with over 200 clients across various industries, helping them achieve their business goals through effective digital solutions. Our approach combines technical excellence with strategic thinking to create websites and applications that not only look great but also deliver real results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 bg-dark-200">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
              <h2 className="section-title">Our Core Values</h2>
              <p className="section-subtitle">
                These principles guide every decision we make and every project we undertake. They define who we are as a company and the experience you can expect when working with us.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Quality First",
                  description: "We never compromise on quality. From clean code to pixel-perfect designs, excellence is our standard.",
                  icon: "🏆",
                },
                {
                  title: "Client Partnership",
                  description: "We see our clients as partners, not just projects. Your success is our success, and we're invested in your long-term growth.",
                  icon: "🤝",
                },
                {
                  title: "Continuous Innovation",
                  description: "Technology evolves rapidly, and so do we. We're constantly learning and implementing new approaches to deliver the best solutions.",
                  icon: "💡",
                },
                {
                  title: "Transparency",
                  description: "Clear communication and honest advice are foundational to our process. No surprises, just straightforward collaboration.",
                  icon: "🔍",
                },
                {
                  title: "Results-Driven",
                  description: "We focus on outcomes, not just outputs. Every feature and design choice is made with your business goals in mind.",
                  icon: "📈",
                },
                {
                  title: "Accessibility",
                  description: "We believe the web should be accessible to everyone. Inclusive design practices are integrated into all our projects.",
                  icon: "♿",
                },
              ].map((value, index) => (
                <div key={index} className="glass-card p-6 text-center animate-on-scroll">
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center text-3xl bg-dark-300 rounded-full">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Team */}
        <section className="py-16 bg-dark-100">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-medium text-blue-light bg-blue/10 rounded-full">
                Our Team
              </span>
              <h2 className="section-title">Meet the Experts Behind WebNest</h2>
              <p className="section-subtitle">
                Our talented team combines technical expertise, creative thinking, and industry experience to deliver exceptional results for our clients.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="glass-card overflow-hidden animate-on-scroll">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-blue-light text-sm mb-4">{member.position}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
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
              <h2 className="text-3xl font-bold text-white mb-6 font-display">Want to Work With Us?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals to join our team. Check out our current openings or send us your resume for future opportunities.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/careers" className="neo-button px-8 py-3">
                  View Openings
                </Link>
                <Link 
                  to="/contact" 
                  className="px-8 py-3 text-white border border-white/20 rounded-lg
                            hover:border-white/40 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
