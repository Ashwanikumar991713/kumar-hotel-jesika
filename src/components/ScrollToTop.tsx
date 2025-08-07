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
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show button only if:
      // 1. User has scrolled down more than 300px
      // 2. User is scrolling up (currentScrollY < lastScrollY)
      if (currentScrollY > 300 && currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else if (currentScrollY <= 100 || currentScrollY > lastScrollY) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    const throttledHandleScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', throttledHandleScroll);
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [lastScrollY]);

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
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-primary to-primary/80 
                 hover:from-primary/90 hover:to-primary/70 text-white shadow-lg hover:shadow-xl 
                 transition-all duration-300 animate-pulse hover:animate-none hover:scale-110
                 border border-white/20"
      size="icon"
      aria-label="Scroll to top"
    >
      <ChevronUp className="h-6 w-6 animate-bounce" />
    </Button>
  );
};

export default ScrollToTop;