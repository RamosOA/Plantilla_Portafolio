'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBars, 
  FaTimes, 
  FaHome, 
  FaUser, 
  FaCode, 
  FaProjectDiagram, 
  FaEnvelope,
  FaWhatsapp,
  FaMoon,
  FaSun,
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';

interface MobileMenuProps {
  currentSection?: string;
  onSectionChange?: (section: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ currentSection = 'inicio', onSectionChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const checkTheme = () => {
      const theme = document.documentElement.getAttribute('data-theme');
      setIsDark(theme !== 'light');
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
    const newTheme = isDark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const scrollToSection = (sectionId: string) => {
    // Immediately update the section state
    if (onSectionChange) {
      onSectionChange(sectionId);
    }
    
    const section = document.getElementById(sectionId);
    if (section) {
      const isMobile = window.innerWidth <= 950;
      
      if (isMobile) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      } else {
        window.scrollTo({
          left: section.offsetLeft,
          behavior: 'smooth'
        });
      }
    }
    setIsOpen(false);
  };

  const menuItems = [
    { id: 'inicio', label: 'Inicio', icon: FaHome, color: '#4F46E5' },
    { id: 'sobremi', label: 'Sobre Mí', icon: FaUser, color: '#06B6D4' },
    { id: 'habilidades', label: 'Habilidades', icon: FaCode, color: '#10B981' },
    { id: 'proyectos', label: 'Proyectos', icon: FaProjectDiagram, color: '#F59E0B' },
    { id: 'contacto', label: 'Contacto', icon: FaEnvelope, color: '#EF4444' },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      label: 'GitHub',
      url: 'https://github.com/oscar-ramos',
      color: '#333'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/oscar-ramos',
      color: '#0077B5'
    }
  ];

  return (
    <>
      {/* Mobile Menu Button - Only visible on mobile */}
      <div className="fixed top-4 right-4 z-50 show-on-mobile-950-flex">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 rounded-full backdrop-blur-lg border transition-all duration-300 shadow-lg"
          style={{
            background: isDark 
              ? 'rgba(60, 60, 60, 0.95)' 
              : 'rgba(254, 255, 254, 0.95)',
            borderColor: isDark 
              ? 'rgba(173, 153, 27, 0.4)' 
              : 'rgba(196, 168, 52, 0.4)',
            color: 'var(--text-accent)'
          }}
          whileHover={{ scale: 1.05, rotate: 90 }}
          whileTap={{ scale: 0.95 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <FaTimes size={20} />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <FaBars size={20} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 show-on-mobile-950"
            style={{
              background: isDark 
                ? 'rgba(0, 0, 0, 0.9)' 
                : 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(15px)'
            }}
            onClick={() => setIsOpen(false)}
          >
            {/* Menu Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 120 }}
              className="absolute top-0 right-0 h-full w-80 max-w-[85vw] p-6 pt-20 overflow-y-auto"
              style={{
                background: isDark 
                  ? 'linear-gradient(135deg, rgba(42, 42, 42, 0.98) 0%, rgba(30, 30, 30, 0.98) 100%)' 
                  : 'linear-gradient(135deg, rgba(254, 255, 254, 0.98) 0%, rgba(249, 249, 247, 0.98) 100%)',
                borderLeft: isDark 
                  ? '1px solid rgba(173, 153, 27, 0.3)' 
                  : '1px solid rgba(196, 168, 52, 0.3)',
                boxShadow: isDark
                  ? '-10px 0 25px rgba(0, 0, 0, 0.3)'
                  : '-10px 0 25px rgba(0, 0, 0, 0.1)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Menu Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-8"
              >
                <h2
                  className="text-2xl font-bold mb-2"
                  style={{ color: 'var(--primary-100)' }}
                >
                  Navegación
                </h2>
                <div className="flex items-center justify-between">
                  <p 
                    className="text-sm"
                    style={{ color: 'var(--text-200)' }}
                  >
                    Explora mi portafolio
                  </p>
                  <motion.button
                    onClick={toggleTheme}
                    className="p-2 rounded-lg transition-all duration-300"
                    style={{
                      background: 'rgba(173, 153, 27, 0.1)',
                      color: 'var(--primary-100)'
                    }}
                    whileHover={{ scale: 1.1, rotate: 180 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {isDark ? <FaSun size={16} /> : <FaMoon size={16} />}
                  </motion.button>
                </div>
              </motion.div>

              {/* Progress Indicator */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="mb-6 p-3 rounded-lg"
                style={{
                  background: 'rgba(173, 153, 27, 0.05)',
                  border: '1px solid rgba(173, 153, 27, 0.2)'
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span 
                    className="text-xs font-medium"
                    style={{ color: 'var(--text-100)' }}
                  >
                    Sección actual
                  </span>
                  <span 
                    className="text-xs font-bold px-2 py-1 rounded"
                    style={{ 
                      color: 'var(--primary-100)',
                      background: 'rgba(173, 153, 27, 0.2)'
                    }}
                  >
                    {menuItems.find(item => item.id === currentSection)?.label || 'Inicio'}
                  </span>
                </div>
                <div 
                  className="w-full h-1 rounded-full"
                  style={{ background: 'rgba(173, 153, 27, 0.2)' }}
                >
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: 'var(--primary-100)' }}
                    initial={{ width: 0 }}
                    animate={{ 
                      width: `${((menuItems.findIndex(item => item.id === currentSection) + 1) / menuItems.length) * 100}%` 
                    }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  />
                </div>
              </motion.div>

              {/* Menu Items */}
              <div className="space-y-3 mb-8">
                {menuItems.map((item, index) => {
                  const isActive = currentSection === item.id;
                  return (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.05 }}
                      onClick={() => scrollToSection(item.id)}
                      className="w-full text-left p-4 rounded-xl transition-all duration-300 border relative overflow-hidden group"
                      style={{
                        background: isActive 
                          ? 'rgba(173, 153, 27, 0.25)' 
                          : 'rgba(173, 153, 27, 0.05)',
                        borderColor: isActive 
                          ? 'rgba(173, 153, 27, 0.8)' 
                          : 'rgba(173, 153, 27, 0.1)',
                        transform: isActive ? 'scale(1.03)' : 'scale(1)',
                        boxShadow: isActive 
                          ? '0 8px 25px rgba(173, 153, 27, 0.2), inset 0 1px 0 rgba(173, 153, 27, 0.3)' 
                          : '0 2px 10px rgba(0, 0, 0, 0.1)'
                      }}
                      whileHover={{ 
                        scale: isActive ? 1.05 : 1.02,
                        boxShadow: isActive 
                          ? '0 12px 30px rgba(173, 153, 27, 0.3), inset 0 1px 0 rgba(173, 153, 27, 0.4)' 
                          : '0 4px 15px rgba(173, 153, 27, 0.1)'
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Active section background glow */}
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 rounded-xl"
                          style={{ 
                            background: 'linear-gradient(135deg, rgba(173, 153, 27, 0.15), rgba(173, 153, 27, 0.08))',
                            zIndex: 1
                          }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4 }}
                        />
                      )}
                      
                      {/* Hover background effect */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-10 rounded-xl"
                        style={{ background: item.color, zIndex: 2 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      <div className="flex items-center space-x-4 relative z-10">
                        <div 
                          className="p-2 rounded-lg transition-all duration-300"
                          style={{ 
                            backgroundColor: isActive ? `${item.color}50` : `${item.color}20`,
                            color: item.color,
                            border: isActive ? `2px solid ${item.color}80` : `1px solid ${item.color}30`,
                            transform: isActive ? 'scale(1.15)' : 'scale(1)',
                            boxShadow: isActive ? `0 4px 12px ${item.color}30` : 'none'
                          }}
                        >
                          <item.icon size={20} />
                        </div>
                        <div className="flex-1">
                          <span 
                            className="text-lg font-medium transition-all duration-300"
                            style={{ 
                              color: isActive ? 'var(--primary-100)' : 'var(--text-100)',
                              fontWeight: isActive ? '700' : '500',
                              textShadow: isActive ? '0 2px 4px rgba(173, 153, 27, 0.4)' : 'none',
                              letterSpacing: isActive ? '0.5px' : '0px'
                            }}
                          >
                            {item.label}
                          </span>
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-xs mt-1 font-medium"
                              style={{ color: 'var(--primary-200)' }}
                            >
                              ✓ Sección actual
                            </motion.div>
                          )}
                        </div>
                        {isActive && (
                          <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            className="w-4 h-4 rounded-full relative flex items-center justify-center"
                            style={{ 
                              backgroundColor: 'var(--primary-100)',
                              boxShadow: '0 2px 8px rgba(173, 153, 27, 0.4)'
                            }}
                          >
                            <motion.div
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: '#fff' }}
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            />
                            <motion.div
                              className="absolute inset-0 rounded-full border-2"
                              style={{ borderColor: 'var(--primary-100)' }}
                              animate={{ scale: [1, 1.8, 1], opacity: [1, 0, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          </motion.div>
                        )}
                      </div>
                      
                      {isActive && (
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          className="h-1 mt-3 rounded-full relative overflow-hidden"
                          style={{ background: 'rgba(173, 153, 27, 0.3)' }}
                        >
                          <motion.div
                            className="h-full rounded-full"
                            style={{ 
                              background: 'linear-gradient(90deg, var(--primary-100), var(--primary-200), var(--primary-100))',
                              backgroundSize: '200% 100%'
                            }}
                            initial={{ x: '-100%' }}
                            animate={{ 
                              x: 0,
                              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                            }}
                            transition={{ 
                              x: { duration: 0.6, delay: 0.2 },
                              backgroundPosition: { duration: 3, repeat: Infinity }
                            }}
                          />
                        </motion.div>
                      )}
                    </motion.button>
                  );
                })}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-6"
              >
                <h3 
                  className="text-sm font-semibold mb-3"
                  style={{ color: 'var(--text-100)' }}
                >
                  Redes Sociales
                </h3>
                <div className="flex space-x-3">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg transition-all duration-300"
                      style={{
                        background: `${link.color}10`,
                        color: link.color,
                        border: `1px solid ${link.color}30`
                      }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                    >
                      <link.icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="pt-6 border-t space-y-3"
                style={{ borderColor: 'rgba(173, 153, 27, 0.2)' }}
              >
                <motion.button
                  onClick={() => {
                    const phoneNumber = '573028488116';
                    const message = encodeURIComponent('¡Hola Oscar! Me interesa conocer más sobre tus servicios de desarrollo web.');
                    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
                    window.open(whatsappUrl, '_blank');
                    setIsOpen(false);
                  }}
                  className="w-full p-4 rounded-xl border transition-all duration-300 group"
                  style={{
                    background: 'linear-gradient(135deg, rgba(37, 211, 102, 0.1) 0%, rgba(37, 211, 102, 0.05) 100%)',
                    borderColor: 'rgba(37, 211, 102, 0.3)',
                    color: '#25D366'
                  }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-center space-x-3">
                    <FaWhatsapp size={20} />
                    <span className="font-medium">Contactar por WhatsApp</span>
                  </div>
                </motion.button>

                <motion.button
                  onClick={() => {
                    scrollToSection('proyectos');
                  }}
                  className="w-full p-3 rounded-xl border transition-all duration-300"
                  style={{
                    background: 'rgba(173, 153, 27, 0.1)',
                    borderColor: 'rgba(173, 153, 27, 0.3)',
                    color: 'var(--primary-100)'
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-sm font-medium">Ver Mis Proyectos</span>
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
