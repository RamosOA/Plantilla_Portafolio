'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaRocket, 
  FaBrain, 
  FaHeart,
  FaStar,
  FaGem,
  FaBolt,
  FaMagic
} from 'react-icons/fa';

const NeumoShowcase = () => {
  const showcaseItems = [
    {
      icon: FaCode,
      title: 'Desarrollo',
      description: 'Código limpio y escalable',
      delay: 0.1
    },
    {
      icon: FaRocket,
      title: 'Performance',
      description: 'Optimización avanzada',
      delay: 0.2
    },
    {
      icon: FaBrain,
      title: 'Inteligencia',
      description: 'Soluciones creativas',
      delay: 0.3
    },
    {
      icon: FaHeart,
      title: 'Pasión',
      description: 'Amor por la tecnología',
      delay: 0.4
    }
  ];

  const floatingElements = [
    { icon: FaStar, delay: 0, duration: 3 },
    { icon: FaGem, delay: 0.5, duration: 4 },
    { icon: FaBolt, delay: 1, duration: 2.5 },
    { icon: FaMagic, delay: 1.5, duration: 3.5 }
  ];

  return (
    <div className="relative p-8 space-y-8">
      {/* Título Principal */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 
          className="text-4xl font-bold mb-4 neumo-glow"
          style={{ 
            color: 'var(--accent-100)',
            textShadow: '0 0 20px var(--accent-100)'
          }}
        >
          Arceus Portfolio
        </h2>
        <p 
          className="text-lg"
          style={{ color: 'var(--text-200)' }}
        >
          Neumorfismo celestial y divino
        </p>
      </motion.div>

      {/* Grid de Características */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {showcaseItems.map((item, index) => (
          <motion.div
            key={index}
            className="neumo-card neumo-interactive text-center group"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: item.delay }}
            whileHover={{
              y: -10,
              rotateY: 5,
              transition: { duration: 0.3 }
            }}
          >
            <div 
              className="neumo-icon w-16 h-16 mx-auto mb-4 text-3xl group-hover:neumo-pulse"
              style={{ color: 'var(--accent-100)' }}
            >
              <item.icon />
            </div>
            
            <h3 
              className="text-xl font-semibold mb-2"
              style={{ color: 'var(--text-100)' }}
            >
              {item.title}
            </h3>
            
            <p 
              className="text-sm"
              style={{ color: 'var(--text-200)' }}
            >
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Botones de Demostración */}
      <div className="flex flex-wrap justify-center gap-4 mt-12">
        <motion.button
          className="neumo-btn-primary px-8 py-4 text-lg font-semibold"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: 'var(--shadow-neumorphic-floating)'
          }}
          whileTap={{ scale: 0.95 }}
        >
          Ver Proyectos
        </motion.button>

        <motion.button
          className="neumo-btn px-8 py-4 text-lg font-semibold"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          style={{ color: 'var(--accent-100)' }}
        >
          Contactar
        </motion.button>
      </div>

      {/* Elementos Flotantes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className="absolute neumo-icon w-8 h-8 text-xl opacity-30"
            style={{ 
              color: 'var(--accent-200)',
              left: `${20 + index * 20}%`,
              top: `${10 + index * 15}%`
            }}
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <element.icon />
          </motion.div>
        ))}
      </div>

      {/* Panel de Control Neumórfico */}
      <motion.div
        className="neumo-inset p-6 mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h3 
          className="text-lg font-semibold mb-4 text-center"
          style={{ color: 'var(--accent-100)' }}
        >
          Panel de Estado
        </h3>
        
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div 
              className="neumo-surface w-12 h-12 mx-auto mb-2 flex items-center justify-center rounded-full neumo-pulse"
              style={{ background: 'var(--accent-100)' }}
            >
              <span className="text-white font-bold">+</span>
            </div>
            <p className="text-sm" style={{ color: 'var(--text-200)' }}>Activo</p>
          </div>
          
          <div className="text-center">
            <div 
              className="neumo-surface w-12 h-12 mx-auto mb-2 flex items-center justify-center rounded-full"
              style={{ background: 'var(--accent-200)' }}
            >
              <span className="text-white font-bold">✓</span>
            </div>
            <p className="text-sm" style={{ color: 'var(--text-200)' }}>Listo</p>
          </div>
          
          <div className="text-center">
            <div 
              className="neumo-surface w-12 h-12 mx-auto mb-2 flex items-center justify-center rounded-full neumo-float"
              style={{ background: 'var(--accent-100)' }}
            >
              <span className="text-white font-bold">∞</span>
            </div>
            <p className="text-sm" style={{ color: 'var(--text-200)' }}>Disponible</p>
          </div>
        </div>
      </motion.div>

      {/* Separador Decorativo */}
      <div className="neumo-divider my-8" />

      {/* Texto Final */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <p 
          className="text-lg font-medium"
          style={{ 
            color: 'var(--accent-100)',
            textShadow: '0 0 10px var(--accent-100)'
          }}
        >
          &ldquo;El diseño neumórfico llevado a la perfección celestial&rdquo;
        </p>
      </motion.div>
    </div>
  );
};

export default NeumoShowcase;
