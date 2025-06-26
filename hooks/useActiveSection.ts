'use client';

import { useState, useEffect } from 'react';

const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const isMobile = window.innerWidth <= 950;
      
      if (sections.length === 0) {
        setActiveSection('inicio');
        return;
      }
      
      if (isMobile) {
        // Mobile: Improved vertical scroll detection
        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;
        const viewportMiddle = scrollY + viewportHeight / 2;
        
        let bestSection = 'inicio';
        let maxVisibility = 0;
        let closestToCenter = Infinity;

        sections.forEach((section) => {
          const element = section as HTMLElement;
          const sectionTop = element.offsetTop;
          const sectionBottom = sectionTop + element.offsetHeight;
          const sectionCenter = sectionTop + (element.offsetHeight / 2);
          
          // Calculate what portion of the section is visible
          const visibleStart = Math.max(scrollY, sectionTop);
          const visibleEnd = Math.min(scrollY + viewportHeight, sectionBottom);
          const visibleHeight = Math.max(0, visibleEnd - visibleStart);
          const visibilityRatio = visibleHeight / viewportHeight;
          
          // Distance from viewport center to section center
          const distanceToCenter = Math.abs(viewportMiddle - sectionCenter);
          
          // Priority: Section with highest visibility ratio, or closest to center if tied
          if (visibilityRatio > maxVisibility || 
              (visibilityRatio === maxVisibility && distanceToCenter < closestToCenter)) {
            maxVisibility = visibilityRatio;
            closestToCenter = distanceToCenter;
            bestSection = element.id;
          }
        });

        setActiveSection(bestSection);
      } else {
        // Desktop: horizontal scroll detection
        const scrollX = window.scrollX;
        const viewportWidth = window.innerWidth;
        const viewportMiddle = scrollX + viewportWidth / 2;
        
        let bestSection = 'inicio';
        let maxVisibility = 0;
        let closestToCenter = Infinity;

        sections.forEach((section) => {
          const element = section as HTMLElement;
          const sectionLeft = element.offsetLeft;
          const sectionRight = sectionLeft + element.offsetWidth;
          const sectionCenter = sectionLeft + (element.offsetWidth / 2);
          
          // Calculate what portion of the section is visible
          const visibleStart = Math.max(scrollX, sectionLeft);
          const visibleEnd = Math.min(scrollX + viewportWidth, sectionRight);
          const visibleWidth = Math.max(0, visibleEnd - visibleStart);
          const visibilityRatio = visibleWidth / viewportWidth;
          
          // Distance from viewport center to section center
          const distanceToCenter = Math.abs(viewportMiddle - sectionCenter);
          
          // Priority: Section with highest visibility ratio, or closest to center if tied
          if (visibilityRatio > maxVisibility || 
              (visibilityRatio === maxVisibility && distanceToCenter < closestToCenter)) {
            maxVisibility = visibilityRatio;
            closestToCenter = distanceToCenter;
            bestSection = element.id;
          }
        });

        setActiveSection(bestSection);
      }
    };

    // Initial detection
    const initialDetection = () => {
      setTimeout(handleScroll, 100);
    };

    // Throttled scroll handler
    let scrollTimeout: NodeJS.Timeout;
    const throttledScroll = () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      scrollTimeout = setTimeout(handleScroll, 16);
    };

    // Resize handler
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }
      resizeTimeout = setTimeout(handleScroll, 100);
    };

    // Event listeners
    window.addEventListener('scroll', throttledScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    
    // Listen for hash changes (URL navigation)
    const handleHashChange = () => {
      setTimeout(handleScroll, 300);
    };
    window.addEventListener('hashchange', handleHashChange);
    
    // Initial detection
    initialDetection();

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('hashchange', handleHashChange);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }
    };
  }, []);

  return activeSection;
};

export default useActiveSection;
