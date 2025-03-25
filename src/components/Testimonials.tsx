
import React, { useEffect, useState } from 'react';
import { setupScrollAnimations } from '../utils/animations';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Working with WebNest Solutions transformed our business. Their team delivered a stunning website that perfectly captures our brand identity while providing exceptional user experience. The project was completed ahead of schedule and within budget!",
    author: "Sarah Johnson",
    position: "CEO, Bloom Boutique",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
  },
  {
    id: 2,
    content: "The team at WebNest Solutions exceeded our expectations at every turn. Their attention to detail and technical expertise helped us launch an e-commerce platform that has significantly increased our online sales.",
    author: "Michael Chen",
    position: "Marketing Director, TechGear",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
  },
  {
    id: 3,
    content: "We've worked with several web development agencies before, but WebNest Solutions stands out for their professionalism, creativity, and commitment to results. They don't just build websites; they build digital growth engines.",
    author: "Emma Rodriguez",
    position: "Founder, Fitness Central",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop",
  },
  {
    id: 4,
    content: "The website WebNest created for our law firm has dramatically improved our lead generation. Their understanding of our industry and target audience was evident in every aspect of the design and functionality.",
    author: "David Wilson",
    position: "Partner, Wilson & Associates",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleTestimonials, setVisibleTestimonials] = useState(3);

  useEffect(() => {
    const cleanup = setupScrollAnimations();
    
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleTestimonials(1);
      } else if (window.innerWidth < 1024) {
        setVisibleTestimonials(2);
      } else {
        setVisibleTestimonials(3);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      cleanup();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - visibleTestimonials ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - visibleTestimonials : prevIndex - 1
    );
  };

  const canGoNext = activeIndex < testimonials.length - visibleTestimonials;
  const canGoPrev = activeIndex > 0;

  const displayedTestimonials = testimonials.slice(
    activeIndex,
    activeIndex + visibleTestimonials
  );

  return (
    <section className="py-20 bg-dark-200">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-on-scroll">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium text-blue-light bg-blue/10 rounded-full">
            Testimonials
          </span>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it. Here's what our clients have to say about their experience working with WebNest Solutions.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * (100 / visibleTestimonials)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3 animate-on-scroll"
                >
                  <div className="glass-card p-6 md:p-8 h-full flex flex-col">
                    {/* Stars */}
                    <div className="flex mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    
                    {/* Content */}
                    <p className="text-white/80 mb-6 flex-grow text-sm md:text-base">
                      "{testimonial.content}"
                    </p>
                    
                    {/* Author */}
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">{testimonial.author}</h4>
                        <p className="text-muted-foreground text-sm">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 gap-2">
            <button
              onClick={prevSlide}
              disabled={!canGoPrev}
              className={`p-2 rounded-full ${
                canGoPrev 
                  ? 'bg-dark-300 text-white hover:bg-dark-400 transition-colors' 
                  : 'bg-dark-300/50 text-white/50 cursor-not-allowed'
              }`}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              disabled={!canGoNext}
              className={`p-2 rounded-full ${
                canGoNext 
                  ? 'bg-dark-300 text-white hover:bg-dark-400 transition-colors' 
                  : 'bg-dark-300/50 text-white/50 cursor-not-allowed'
              }`}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
