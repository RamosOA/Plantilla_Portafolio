'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCode, FaCalendar } from 'react-icons/fa';

interface MobileProjectCardProps {
  nombre: string;
  descripcion: string;
  descripcionExtendida?: string;
  icono: React.ReactElement;
  link: string;
  tecnologias: string[];
  delay?: number;
}

const MobileProjectCard: React.FC<MobileProjectCardProps> = ({
  nombre,
  descripcion,
  descripcionExtendida,
  icono,
  link,
  tecnologias,
  delay = 0
}) => {
  const [expanded, setExpanded] = React.useState(false);

  const getTechColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      'React.js': '#61DAFB',
      'Node.js': '#339933',
      'JavaScript': '#F7DF1E',
      'TypeScript': '#3178C6',
      'Express': '#000000',
      'MongoDB': '#47A248',
      'MySQL': '#4479A1',
      'Python': '#3776AB',
      'Java': '#ED8B00',
      'HTML': '#E34F26',
      'CSS': '#1572B6',
      'Tailwind': '#06B6D4',
      'Socket.io': '#010101',
      'Vercel': '#000000',
      'Git': '#F05032'
    };
    return colors[tech] || '#00F0FF'; // Azul eléctrico como color por defecto
  };

  const openProject = () => {
    window.open(link, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="w-full"
    >
      <div
        className="border rounded-xl p-4 transition-all duration-300 active:scale-98"
        style={{
          background: 'rgba(173, 153, 27, 0.08)',
          borderColor: 'rgba(173, 153, 27, 0.2)',
          backdropFilter: 'blur(20px)'
        }}
      >
        {/* Header */}
        <div className="flex items-start space-x-4 mb-4">
          <div className="flex-shrink-0 pt-1">
            {icono}
          </div>
          <div className="flex-1 min-w-0">
            <h3 
              className="font-bold text-lg mb-1"
              style={{ color: 'var(--text-100)' }}
            >
              {nombre}
            </h3>
            <p 
              className="text-sm leading-relaxed"
              style={{ color: 'var(--text-200)' }}
            >
              {descripcion}
            </p>
          </div>
        </div>

        {/* Expandable description */}
        {descripcionExtendida && (
          <motion.div
            initial={false}
            animate={{ height: expanded ? 'auto' : 0 }}
            className="overflow-hidden"
          >
            <div className="pb-4">
              <p 
                className="text-xs leading-relaxed whitespace-pre-line"
                style={{ color: 'var(--text-300)' }}
              >
                {descripcionExtendida}
              </p>
            </div>
          </motion.div>
        )}

        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {tecnologias.slice(0, 4).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 rounded-md text-xs font-medium border"
                style={{
                  backgroundColor: `${getTechColor(tech)}20`,
                  borderColor: `${getTechColor(tech)}40`,
                  color: getTechColor(tech)
                }}
              >
                {tech}
              </span>
            ))}
            {tecnologias.length > 4 && (
              <span
                className="px-2 py-1 rounded-md text-xs font-medium"
                style={{
                  backgroundColor: 'rgba(173, 153, 27, 0.2)',
                  color: 'var(--primary-100)'
                }}
              >
                +{tecnologias.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <div className="flex space-x-3">
            <button
              onClick={openProject}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 active:scale-95"
              style={{
                background: 'rgba(173, 153, 27, 0.2)',
                color: 'var(--primary-100)'
              }}
            >
              <FaGithub className="text-sm" />
              <span className="text-xs font-medium">Ver código</span>
            </button>

            {descripcionExtendida && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg border transition-all duration-300 active:scale-95"
                style={{
                  borderColor: 'rgba(173, 153, 27, 0.3)',
                  color: 'var(--text-200)'
                }}
              >
                <FaCode className="text-sm" />
                <span className="text-xs">
                  {expanded ? 'Menos' : 'Más info'}
                </span>
              </button>
            )}
          </div>

          <div className="flex items-center space-x-1 text-xs" style={{ color: 'var(--text-300)' }}>
            <FaCalendar className="text-xs" />
            <span>2024</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileProjectCard;
