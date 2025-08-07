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
                 bg-gradient-to-br from-purple-500 via-blue-600 to-indigo-700 
                 hover:from-purple-400 hover:via-blue-500 hover:to-indigo-600
                 text-white shadow-lg hover:shadow-2xl shadow-purple-500/30
                 hover:shadow-purple-400/40 transition-all duration-300 
                 hover:scale-110 border border-white/10 backdrop-blur-sm
                 animate-pulse hover:animate-none"
      size="icon"
      aria-label="Scroll to top"
    >
      <ChevronUp className="h-6 w-6" />
    </Button>
  );
};

export default ScrollToTop;