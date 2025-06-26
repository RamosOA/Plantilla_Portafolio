'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaUser, 
  FaCode, 
  FaProjectDiagram, 
  FaEnvelope, 
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaDownload,
  FaPlay
} from 'react-icons/fa';

interface NavigationItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  description: string;
  color: string;
  bgGradient: string;
}

const MobileNavigationSectionCard = () => {
  const navigationItems: NavigationItem[] = [
    {
      id: 'sobremi',
      label: 'Sobre Mí',
      icon: FaUser,
      description: 'Conoce mi historia y experiencia',
      color: '#06B6D4',
      bgGradient: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(6, 182, 212, 0.05) 100%)'
    },
    {
      id: 'habilidades',
      label: 'Habilidades',
      icon: FaCode,
      description: 'Tecnologías y herramientas',
      color: '#10B981',
      bgGradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%)'
    },
    {
      id: 'proyectos',
      label: 'Proyectos',
      icon: FaProjectDiagram,
      description: 'Mis trabajos y creaciones',
      color: '#F59E0B',
      bgGradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(245, 158, 11, 0.05) 100%)'
    },
    {
      id: 'contacto',
      label: 'Contacto',
      icon: FaEnvelope,
      description: 'Hablemos de tu proyecto',
      color: '#EF4444',
      bgGradient: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.05) 100%)'
    }
  ];

  const quickActions = [
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      color: '#25D366',
      action: () => {
        const phoneNumber = '573028488116';
        const message = encodeURIComponent('¡Hola Oscar! Me interesa conocer más sobre tus servicios.');
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
      }
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      color: '#333',
      action: () => window.open('https://github.com/oscar-ramos', '_blank')
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      color: '#0077B5',
      action: () => window.open('https://linkedin.com/in/oscar-ramos', '_blank')
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Main Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="space-y-3"
      >
        <h3 
          className="text-lg font-semibold mb-4 text-center"
          style={{ color: 'var(--primary-100)' }}
        >
          Explora Mi Portafolio
        </h3>
        
        <div className="grid grid-cols-1 gap-3">
          {navigationItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="group relative overflow-hidden rounded-2xl p-4 border transition-all duration-300"
              style={{
                background: item.bgGradient,
                borderColor: `${item.color}30`
              }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Background animation */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-20"
                style={{ background: item.color }}
                transition={{ duration: 0.3 }}
              />
              
              <div className="flex items-center space-x-4 relative z-10">
                <div 
                  className="p-3 rounded-xl"
                  style={{ 
                    backgroundColor: `${item.color}20`,
                    color: item.color 
                  }}
                >
                  <item.icon size={24} />
                </div>
                
                <div className="flex-1 text-left">
                  <h4 
                    className="font-semibold text-base mb-1"
                    style={{ color: 'var(--text-100)' }}
                  >
                    {item.label}
                  </h4>
                  <p 
                    className="text-sm opacity-80"
                    style={{ color: 'var(--text-200)' }}
                  >
                    {item.description}
                  </p>
                </div>
                
                <motion.div
                  className="opacity-60 group-hover:opacity-100 group-hover:translate-x-1"
                  style={{ color: item.color }}
                  transition={{ duration: 0.2 }}
                >
                  <FaArrowRight size={16} />
                </motion.div>
              </div>

              {/* Ripple effect */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 rounded-full"
                style={{ backgroundColor: item.color }}
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="pt-6 border-t"
        style={{ borderColor: 'rgba(173, 153, 27, 0.2)' }}
      >
        <h4 
          className="text-sm font-semibold mb-4 text-center"
          style={{ color: 'var(--text-100)' }}
        >
          Contacto Rápido
        </h4>
        
        <div className="flex justify-center space-x-4">
          {quickActions.map((action, index) => (
            <motion.button
              key={index}
              onClick={action.action}
              className="p-4 rounded-2xl border transition-all duration-300 group"
              style={{
                background: `${action.color}10`,
                borderColor: `${action.color}30`,
                color: action.color
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <action.icon size={20} />
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10"
                style={{ background: action.color }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
        </div>
        
        <motion.p
          className="text-xs text-center mt-3 opacity-70"
          style={{ color: 'var(--text-300)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          ¿Tienes un proyecto en mente? ¡Hablemos!
        </motion.p>
      </motion.div>

      {/* Additional Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="grid grid-cols-2 gap-3"
      >
        <motion.button
          className="p-4 rounded-xl border transition-all duration-300 group"
          style={{
            background: 'rgba(59, 130, 246, 0.1)',
            borderColor: 'rgba(59, 130, 246, 0.3)',
            color: '#3B82F6'
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            // Aquí podrías agregar la lógica para descargar CV
            alert('Descarga de CV próximamente');
          }}
        >
          <div className="flex items-center justify-center space-x-2">
            <FaDownload size={16} />
            <span className="text-sm font-medium">CV</span>
          </div>
        </motion.button>

        <motion.button
          className="p-4 rounded-xl border transition-all duration-300 group"
          style={{
            background: 'rgba(168, 85, 247, 0.1)',
            borderColor: 'rgba(168, 85, 247, 0.3)',
            color: '#A855F7'
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => scrollToSection('proyectos')}
        >
          <div className="flex items-center justify-center space-x-2">
            <FaPlay size={16} />
            <span className="text-sm font-medium">Demo</span>
          </div>
        </motion.button>
      </motion.div>

      {/* Status Indicator */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        className="flex items-center justify-center space-x-2 p-3 rounded-xl"
        style={{
          background: 'rgba(16, 185, 129, 0.1)',
          border: '1px solid rgba(16, 185, 129, 0.3)'
        }}
      >
        <motion.div
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: '#10B981' }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span 
          className="text-xs font-medium"
          style={{ color: '#10B981' }}
        >
          Disponible para nuevos proyectos
        </span>
      </motion.div>
    </div>
  );
};

export default MobileNavigationSectionCard;
