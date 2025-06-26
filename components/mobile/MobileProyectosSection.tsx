'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFilter, FaSort } from 'react-icons/fa';
import MobileProjectCard from './MobileProjectCard';
import { proyectosData } from '../proyectos/proyectosData';

const MobileProyectosSection = () => {
  const [sortBy, setSortBy] = useState<'nombre' | 'fecha'>('nombre');
  const [showFilters, setShowFilters] = useState(false);

  const sortedProjects = [...proyectosData].sort((a, b) => {
    if (sortBy === 'nombre') {
      return a.nombre.localeCompare(b.nombre);
    }
    return 0; // Por fecha - puede implementarse más tarde
  });

  return (
    <div className="flex flex-col min-h-screen p-6 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-2 pt-8"
      >
        <h1 
          className="text-3xl font-bold"
          style={{ color: 'var(--primary-100)' }}
        >
          Proyectos
        </h1>
        <p 
          className="text-base"
          style={{ color: 'var(--text-200)' }}
        >
          Mis trabajos y desarrollos destacados
        </p>
      </motion.div>

      {/* Controls */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex items-center justify-between"
      >
        <div className="flex items-center space-x-2">
          <span 
            className="text-sm font-medium"
            style={{ color: 'var(--text-200)' }}
          >
            {proyectosData.length} proyectos
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="p-2 rounded-lg transition-all duration-300"
            title="Filtros"
            style={{
              background: showFilters ? 'rgba(173, 153, 27, 0.2)' : 'rgba(173, 153, 27, 0.1)',
              color: 'var(--primary-100)'
            }}
          >
            <FaFilter className="text-sm" />
          </button>

          <button
            onClick={() => setSortBy(sortBy === 'nombre' ? 'fecha' : 'nombre')}
            className="flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300"
            style={{
              background: 'rgba(173, 153, 27, 0.1)',
              color: 'var(--text-200)'
            }}
          >
            <FaSort className="text-sm" />
            <span className="text-xs">
              {sortBy === 'nombre' ? 'A-Z' : 'Fecha'}
            </span>
          </button>
        </div>
      </motion.div>

      {/* Filter Panel */}
      {showFilters && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="border rounded-lg p-4"
          style={{
            background: 'rgba(173, 153, 27, 0.05)',
            borderColor: 'rgba(173, 153, 27, 0.2)'
          }}
        >
          <h3 
            className="text-sm font-medium mb-3"
            style={{ color: 'var(--text-100)' }}
          >
            Filtrar por tecnología
          </h3>
          <div className="flex flex-wrap gap-2">
            {['React.js', 'Node.js', 'JavaScript', 'TypeScript', 'Python'].map((tech) => (
              <button
                key={tech}
                className="px-3 py-1 rounded-md text-xs border transition-all duration-300"
                style={{
                  borderColor: 'rgba(173, 153, 27, 0.3)',
                  color: 'var(--text-200)'
                }}
              >
                {tech}
              </button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Projects Grid */}
      <div className="flex-1 space-y-4 overflow-y-auto custom-scroll">
        {sortedProjects.map((proyecto, index) => (
          <MobileProjectCard
            key={proyecto.nombre}
            nombre={proyecto.nombre}
            descripcion={proyecto.descripcion}
            descripcionExtendida={proyecto.descripcionExtendida}
            icono={proyecto.icono}
            link={proyecto.link}
            tecnologias={proyecto.tecnologias}
            delay={index * 0.1}
          />
        ))}
      </div>

      {/* Stats Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid grid-cols-2 gap-4 pt-4"
      >
        <div
          className="text-center p-3 rounded-lg border"
          style={{
            background: 'rgba(173, 153, 27, 0.05)',
            borderColor: 'rgba(173, 153, 27, 0.2)'
          }}
        >
          <div className="text-lg font-bold" style={{ color: 'var(--primary-100)' }}>
            {proyectosData.length}
          </div>
          <div className="text-xs" style={{ color: 'var(--text-300)' }}>
            Proyectos totales
          </div>
        </div>

        <div
          className="text-center p-3 rounded-lg border"
          style={{
            background: 'rgba(173, 153, 27, 0.05)',
            borderColor: 'rgba(173, 153, 27, 0.2)'
          }}
        >
          <div className="text-lg font-bold" style={{ color: 'var(--primary-100)' }}>
            {new Set(proyectosData.flatMap(p => p.tecnologias)).size}
          </div>
          <div className="text-xs" style={{ color: 'var(--text-300)' }}>
            Tecnologías usadas
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MobileProyectosSection;
