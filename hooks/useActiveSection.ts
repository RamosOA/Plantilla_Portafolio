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
        // Mobile: Detect based on scroll position
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        
        // Calculate which section we're currently in
        let currentSection = 'inicio';
        let bestMatch = 0;
        
        sections.forEach((section) => {
          const element = section as HTMLElement;
          const rect = element.getBoundingClientRect();
          const elementTop = scrollY + rect.top;
          const elementBottom = elementTop + rect.height;
          
          // Check if this section is visible in the viewport
          const viewportTop = scrollY;
          const viewportBottom = scrollY + windowHeight;
          
          // Calculate how much of this section is visible
          const visibleTop = Math.max(viewportTop, elementTop);
          const visibleBottom = Math.min(viewportBottom, elementBottom);
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);
          const visibilityPercent = visibleHeight / windowHeight;
          
          // If this section has more visibility than the current best, select it
          if (visibilityPercent > bestMatch) {
            bestMatch = visibilityPercent;
            currentSection = element.id;
          }
        });
        
        setActiveSection(currentSection);
      } else {
        // Desktop: horizontal scroll detection
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

    // Event handlers
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

    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    
    // Initial detection
    setTimeout(detectActiveSection, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return activeSection;
};

export default useActiveSection;
