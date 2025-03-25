
// Observer utility for animations on scroll
export const setupScrollAnimations = () => {
  if (typeof window !== 'undefined') {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with the animate-on-scroll class
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      animateElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }
  
  return () => {};
};
