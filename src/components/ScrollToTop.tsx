import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { Button } from './ui/button';

declare global {
  interface Window {
    fbq: any;
  }
}

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show button when user has scrolled down more than 100px
      if (currentScrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const throttledHandleScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', throttledHandleScroll);
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Track Meta Pixel event
    if (window.fbq) {
      window.fbq('trackCustom', 'ScrollToTop');
    }
  };

  if (!isVisible) return null;

  return (
    <Button
      onClick={scrollToTop}
      className="fixed bottom-[30px] right-[20px] z-50 w-14 h-14 rounded-full 
                 bg-gradient-to-br from-primary via-primary/90 to-primary/80
                 hover:from-primary/90 hover:via-primary/80 hover:to-primary/70
                 text-primary-foreground shadow-2xl shadow-primary/30
                 hover:shadow-primary/40 transition-all duration-500 
                 hover:scale-110 border-2 border-primary/20 hover:border-primary/40
                 backdrop-blur-sm animate-bounce hover:animate-none
                 hover:rotate-12 transform-gpu"
      size="icon"
      aria-label="Scroll to top"
    >
      <ChevronUp className="h-7 w-7 stroke-[2.5]" />
    </Button>
  );
};

export default ScrollToTop;