'use client';

import React, { useState, useEffect } from 'react';
import MobileMenu from './MobileMenu';

const MobileMenuWrapper = () => {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const detectActiveSection = () => {
      const sections = document.querySelectorAll('section[id]');
      const isMobile = window.innerWidth <= 950;
      
      if (sections.length === 0) return;
      
      if (isMobile) {
        // Mobile: Detección simple basada en scroll
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const viewportHeight = window.innerHeight;
        
        // Determinar qué sección está más cerca del centro de la pantalla
        let closestSection = 'inicio';
        let minDistance = Infinity;
        
        sections.forEach((section) => {
          const element = section as HTMLElement;
          const rect = element.getBoundingClientRect();
          const sectionTop = scrollTop + rect.top;
          const sectionMiddle = sectionTop + (rect.height / 2);
          const viewportMiddle = scrollTop + (viewportHeight / 2);
          
          const distance = Math.abs(sectionMiddle - viewportMiddle);
          
          if (distance < minDistance) {
            minDistance = distance;
            closestSection = element.id;
          }
        });
        
        setActiveSection(closestSection);
      }
    };

    // Detectar inmediatamente
    detectActiveSection();
    
    // Crear un observer simple
    let scrollTimer: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(detectActiveSection, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', detectActiveSection);
    
    // Detectar cada 2 segundos como respaldo
    const intervalId = setInterval(detectActiveSection, 2000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', detectActiveSection);
      clearTimeout(scrollTimer);
      clearInterval(intervalId);
    };
  }, []);

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };
  
  return <MobileMenu currentSection={activeSection} onSectionChange={handleSectionChange} />;
};

export default MobileMenuWrapper;
