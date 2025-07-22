'use client';

import { useState, useEffect } from 'react';

const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const detectActiveSection = () => {
      const sections = document.querySelectorAll('section[id]');
      const isMobile = window.innerWidth <= 950;
      
      if (sections.length === 0) {
        setActiveSection('inicio');
        return;
      }
      
      if (isMobile) {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        
        let currentSection = 'inicio';
        let bestMatch = 0;
        
        sections.forEach((section) => {
          const element = section as HTMLElement;
          const rect = element.getBoundingClientRect();
          const elementTop = scrollY + rect.top;
          const elementBottom = elementTop + rect.height;
          
          const viewportTop = scrollY;
          const viewportBottom = scrollY + windowHeight;
          
          const visibleTop = Math.max(viewportTop, elementTop);
          const visibleBottom = Math.min(viewportBottom, elementBottom);
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);
          const visibilityPercent = visibleHeight / windowHeight;
          
          if (visibilityPercent > bestMatch) {
            bestMatch = visibilityPercent;
            currentSection = element.id;
          }
        });
        
        setActiveSection(currentSection);
      } else {
        const scrollX = window.scrollX;
        const windowWidth = window.innerWidth;
        
        let currentSection = 'inicio';
        let bestMatch = 0;
        
        sections.forEach((section) => {
          const element = section as HTMLElement;
          const rect = element.getBoundingClientRect();
          const elementLeft = scrollX + rect.left;
          const elementRight = elementLeft + rect.width;
          
          const viewportLeft = scrollX;
          const viewportRight = scrollX + windowWidth;
          
          const visibleLeft = Math.max(viewportLeft, elementLeft);
          const visibleRight = Math.min(viewportRight, elementRight);
          const visibleWidth = Math.max(0, visibleRight - visibleLeft);
          const visibilityPercent = visibleWidth / windowWidth;
          
          if (visibilityPercent > bestMatch) {
            bestMatch = visibilityPercent;
            currentSection = element.id;
          }
        });
        
        setActiveSection(currentSection);
      }
    };

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          detectActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleResize = () => {
      setTimeout(detectActiveSection, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    
    setTimeout(detectActiveSection, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return activeSection;
};

export default useActiveSection;
