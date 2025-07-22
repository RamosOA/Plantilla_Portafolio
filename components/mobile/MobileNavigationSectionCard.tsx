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
      color: 'var(--accent-100)', // Dorado Arceus
      bgGradient: 'linear-gradient(135deg, rgba(198, 167, 0, 0.4) 0%, rgba(198, 167, 0, 0.05) 100%)'
    },
    {
      id: 'habilidades',
      label: 'Habilidades',
      icon: FaCode,
      description: 'Tecnologías y herramientas',
      color: 'var(--accent-200)', // Verde esmeralda
      bgGradient: 'linear-gradient(135deg, rgba(80, 200, 120, 0.4) 0%, rgba(80, 200, 120, 0.05) 100%)'
    },
    {
      id: 'proyectos',
      label: 'Proyectos',
      icon: FaProjectDiagram,
      description: 'Mis trabajos y creaciones',
      color: 'var(--accent-100)', // Dorado Arceus
      bgGradient: 'linear-gradient(135deg, rgba(198, 167, 0, 0.4) 0%, rgba(198, 167, 0, 0.05) 100%)'
    },
    {
      id: 'contacto',
      label: 'Contacto',
      icon: FaEnvelope,
      description: 'Hablemos de tu proyecto',
      color: 'var(--accent-200)', // Verde esmeralda
      bgGradient: 'linear-gradient(135deg, rgba(80, 200, 120, 0.4) 0%, rgba(80, 200, 120, 0.05) 100%)'
    }
  ];

  const quickActions = [
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      color: 'var(--accent-200)', // Verde esmeralda
      action: () => {
        const phoneNumber = '1234567890';
        const message = encodeURIComponent('¡Hola! Me interesa conocer más sobre tus servicios.');
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
      }
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      color: 'var(--accent-100)', // Dorado Arceus
      action: () => window.open('https://github.com/tu-usuario-github', '_blank')
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      color: 'var(--accent-200)', // Verde esmeralda
      action: () => window.open('https://www.linkedin.com/in/tu-perfil-linkedin/', '_blank')
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      window.dispatchEvent(new CustomEvent('sectionScrollStart', { 
        detail: { 
          targetSection: sectionId,
          duration: 3000
        } 
      }));
    }
  };

  return (
    <div className="space-y-6 p-4" style={{ background: 'var(--bg-100)' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="space-y-4"
      >
        <h3 
          className="text-lg font-semibold mb-6 text-center px-4 py-3 rounded-2xl"
          style={{ 
            color: 'var(--primary-100)',
            background: 'var(--bg-200)',
            boxShadow: 'var(--shadow-neumorphic-inset)',
            fontWeight: '600',
            letterSpacing: '0.5px'
          }}
        >
          Explora Mi Portafolio
        </h3>
        
        <div className="grid grid-cols-1 gap-4">
          {navigationItems.map((item, index) => {
            return (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group relative overflow-hidden rounded-3xl p-5 transition-all duration-300"
                style={{
                  background: 'var(--bg-200)',
                  boxShadow: 'var(--shadow-neumorphic)',
                  border: 'none'
                }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.03, 
                  y: -3,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ 
                  scale: 0.97,
                  transition: { duration: 0.1 }
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = 'var(--shadow-neumorphic-hover)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'var(--shadow-neumorphic)';
                  e.currentTarget.style.transform = 'translateY(0px)';
                }}
                onMouseDown={(e) => {
                  e.currentTarget.style.boxShadow = 'var(--shadow-neumorphic-pressed)';
                  e.currentTarget.style.transform = 'translateY(1px)';
                }}
                onMouseUp={(e) => {
                  e.currentTarget.style.boxShadow = 'var(--shadow-neumorphic-hover)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
              >
                <div className="flex items-center space-x-5 relative z-10">
                  <div 
                    className="p-4 rounded-2xl transition-all duration-300"
                    style={{ 
                      background: 'var(--bg-100)',
                      boxShadow: 'var(--shadow-neumorphic-inset)',
                      color: item.color 
                    }}
                  >
                    <item.icon size={26} />
                  </div>
                  
                  <div className="flex-1 text-left">
                    <h4 
                      className="font-semibold text-lg mb-2"
                      style={{ 
                        color: 'var(--text-100)',
                        fontWeight: '600'
                      }}
                    >
                      {item.label}
                    </h4>
                    <p 
                      className="text-sm opacity-70"
                      style={{ 
                        color: 'var(--text-200)',
                        fontWeight: '400'
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                  
                  <motion.div
                    className="p-2 rounded-full transition-all duration-300"
                    style={{ 
                      background: 'var(--bg-100)',
                      boxShadow: 'var(--shadow-neumorphic-subtle)',
                      color: item.color
                    }}
                    whileHover={{
                      rotate: 360,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <FaArrowRight size={18} />
                  </motion.div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="pt-8"
      >        <div className="relative mb-6">
          <div 
            className="absolute inset-0 h-px rounded-full"
            style={{
              background: 'linear-gradient(90deg, transparent, var(--bg-300), transparent)',
              top: '50%',
              transform: 'translateY(-50%)'
            }}
          />
          <h4 
            className="text-sm font-semibold text-center px-4 py-2 rounded-xl mx-auto w-fit relative"
            style={{ 
              color: 'var(--text-100)',
              background: 'var(--bg-200)',
              boxShadow: 'var(--shadow-neumorphic-subtle)'
            }}
          >
            Contacto Rápido
          </h4>
        </div>
        
        <div className="flex justify-center space-x-6">
          {quickActions.map((action, index) => (
            <motion.button
              key={index}
              onClick={action.action}
              className="p-5 rounded-3xl transition-all duration-300 group"
              style={{
                background: 'var(--bg-200)',
                boxShadow: 'var(--shadow-neumorphic)',
                color: action.color,
                border: 'none'
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
              whileHover={{ 
                scale: 1.15, 
                y: -4,
                transition: { duration: 0.2 }
              }}
              whileTap={{ 
                scale: 0.9,
                transition: { duration: 0.1 }
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-neumorphic-hover)';
                e.currentTarget.style.transform = 'translateY(-6px) scale(1.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-neumorphic)';
                e.currentTarget.style.transform = 'translateY(0px) scale(1)';
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-neumorphic-pressed)';
                e.currentTarget.style.transform = 'translateY(2px) scale(0.95)';
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-neumorphic-hover)';
                e.currentTarget.style.transform = 'translateY(-6px) scale(1.15)';
              }}
            >
              <action.icon size={24} />
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="grid grid-cols-2 gap-4"
      >
        <motion.button
          className="p-5 rounded-2xl transition-all duration-300 group"
          style={{
            background: 'var(--bg-200)',
            boxShadow: 'var(--shadow-neumorphic)',
            color: 'var(--primary-100)',
            border: 'none'
          }}
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
          whileTap={{ 
            scale: 0.95,
            transition: { duration: 0.1 }
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = 'var(--shadow-neumorphic-hover)';
            e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = 'var(--shadow-neumorphic)';
            e.currentTarget.style.transform = 'translateY(0px) scale(1)';
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.boxShadow = 'var(--shadow-neumorphic-pressed)';
            e.currentTarget.style.transform = 'translateY(1px) scale(0.98)';
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.boxShadow = 'var(--shadow-neumorphic-hover)';
            e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
          }}
          onClick={() => {
            alert('Descarga de CV próximamente');
          }}
        >
          <div className="flex items-center justify-center space-x-3">
            <FaDownload size={18} />
            <span className="text-sm font-semibold">CV</span>
          </div>
        </motion.button>

        <motion.button
          className="p-5 rounded-2xl transition-all duration-300 group"
          style={{
            background: 'var(--bg-200)',
            boxShadow: 'var(--shadow-neumorphic)',
            color: 'var(--primary-200)',
            border: 'none'
          }}
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
          whileTap={{ 
            scale: 0.95,
            transition: { duration: 0.1 }
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = 'var(--shadow-neumorphic-hover)';
            e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = 'var(--shadow-neumorphic)';
            e.currentTarget.style.transform = 'translateY(0px) scale(1)';
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.boxShadow = 'var(--shadow-neumorphic-pressed)';
            e.currentTarget.style.transform = 'translateY(1px) scale(0.98)';
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.boxShadow = 'var(--shadow-neumorphic-hover)';
            e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
          }}
          onClick={() => scrollToSection('proyectos')}
        >
          <div className="flex items-center justify-center space-x-3">
            <FaPlay size={18} />
            <span className="text-sm font-semibold">Demo</span>
          </div>
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        className="flex items-center justify-center space-x-3 p-4 rounded-2xl mx-4"
        style={{
          background: 'var(--bg-100)',
          boxShadow: 'var(--shadow-neumorphic-inset)',
          border: 'none'
        }}
      >
        <motion.div
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: 'var(--primary-200)' }}
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span 
          className="text-sm font-semibold"
          style={{ color: 'var(--primary-200)' }}
        >
          Disponible para nuevos proyectos
        </span>
      </motion.div>
    </div>
  );
};

export default MobileNavigationSectionCard;
