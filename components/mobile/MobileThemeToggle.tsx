'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa';

const MobileThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const checkTheme = () => {
      try {
        const theme = document.documentElement.getAttribute('data-theme');
        setIsDark(theme !== 'light');
      } catch (error) {
        console.warn('Error checking theme:', error);
        setIsDark(true);
      }
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    if (!mounted) return;
    
    try {
      const newTheme = isDark ? 'light' : 'dark';
      
      if (newTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
      } else {
        document.documentElement.removeAttribute('data-theme');
      }
      
      localStorage.setItem('theme', newTheme);
      setIsDark(newTheme === 'dark');
    } catch (error) {
      console.warn('Error toggling theme:', error);
    }
  };

  // Don't render until mounted
  if (!mounted) {
    return null;
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="mobile-theme-toggle"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{ rotate: isDark ? 0 : 180 }}
      transition={{ duration: 0.3 }}
      aria-label={`Cambiar a tema ${isDark ? 'claro' : 'oscuro'}`}
    >
      <motion.div
        key={isDark ? 'dark' : 'light'}
        initial={{ opacity: 0, rotate: -90 }}
        animate={{ opacity: 1, rotate: 0 }}
        exit={{ opacity: 0, rotate: 90 }}
        transition={{ duration: 0.2 }}
      >
        {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
      </motion.div>
    </motion.button>
  );
};

export default MobileThemeToggle;
