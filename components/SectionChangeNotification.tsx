'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SectionChangeNotificationProps {
  currentSection: string;
}

const SectionChangeNotification: React.FC<SectionChangeNotificationProps> = ({ currentSection }) => {
  const [showNotification, setShowNotification] = useState(false);
  const [previousSection, setPreviousSection] = useState(currentSection);

  const sectionNames = {
    inicio: 'Inicio',
    sobremi: 'Sobre Mí',
    habilidades: 'Habilidades',
    proyectos: 'Proyectos',
    contacto: 'Contacto'
  };

  useEffect(() => {
    if (currentSection !== previousSection && previousSection !== '') {
      setShowNotification(true);
      setPreviousSection(currentSection);

      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 2000);

      return () => clearTimeout(timer);
    } else if (previousSection === '') {
      setPreviousSection(currentSection);
    }
  }, [currentSection, previousSection]);

  return (
    <AnimatePresence>
      {showNotification && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.8 }}
          transition={{ 
            type: "spring", 
            damping: 20, 
            stiffness: 300,
            duration: 0.3 
          }}
          className="fixed top-16 left-1/2 transform -translate-x-1/2 z-50 px-4 py-2 rounded-full shadow-lg show-on-mobile-950"
          style={{
            background: 'linear-gradient(135deg, rgba(173, 153, 27, 0.95), rgba(173, 153, 27, 0.85))',
            backdropFilter: 'blur(15px)',
            border: '1px solid rgba(173, 153, 27, 0.6)',
            color: '#fff',
            fontSize: '14px',
            fontWeight: '500',
            letterSpacing: '0.5px',
            minWidth: '120px',
            textAlign: 'center'
          }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1, duration: 0.2 }}
            className="flex items-center justify-center space-x-2"
          >
            <motion.span
              className="w-2 h-2 bg-white rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            <span>{sectionNames[currentSection as keyof typeof sectionNames] || currentSection}</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SectionChangeNotification;
