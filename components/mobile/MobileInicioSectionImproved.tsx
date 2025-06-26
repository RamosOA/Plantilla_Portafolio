'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import MobileHeroSection from './MobileHeroSection';
import MobileNavigationSectionCard from './MobileNavigationSectionCard';

const MobileInicioSectionImproved = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isMobile) return null;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Takes 60% of screen */}
      <motion.div 
        className="flex-1 flex items-center justify-center p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <MobileHeroSection 
          name="Oscar Ramos"
          title="Desarrollador Full Stack"
          subtitle="Creador de Experiencias Digitales"
          description="Desarrollo aplicaciones web modernas que combinan diseño atractivo con funcionalidad robusta y experiencia de usuario excepcional."
        />
      </motion.div>
      
      {/* Navigation Section - Takes remaining space */}
      <motion.div 
        className="p-6 pb-24"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <MobileNavigationSectionCard />
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 z-10"
      >
        <p className="text-xs" style={{ color: 'var(--text-300)' }}>
          Desliza para explorar
        </p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-1 h-8 rounded-full"
          style={{ background: 'var(--primary-100)' }}
        />
      </motion.div>
    </div>
  );
};

export default MobileInicioSectionImproved;
