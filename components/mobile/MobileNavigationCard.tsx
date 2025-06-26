'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaCogs, FaBriefcase, FaPhone, FaWhatsapp } from 'react-icons/fa';

interface MobileNavigationCardProps {
  title: string;
  description: string;
  icon: 'user' | 'skills' | 'projects' | 'contact' | 'whatsapp';
  onClick: () => void;
  delay?: number;
  className?: string;
}

const MobileNavigationCard: React.FC<MobileNavigationCardProps> = ({ 
  title, 
  description, 
  icon, 
  onClick, 
  delay = 0,
  className = ""
}) => {
  const getIcon = () => {
    const iconProps = {
      className: 'text-2xl',
      style: { color: 'var(--primary-100)' }
    };

    switch (icon) {
      case 'user': return <FaUser {...iconProps} />;
      case 'skills': return <FaCogs {...iconProps} />;
      case 'projects': return <FaBriefcase {...iconProps} />;
      case 'contact': return <FaPhone {...iconProps} />;
      case 'whatsapp': return <FaWhatsapp {...iconProps} />;
      default: return <FaUser {...iconProps} />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={`w-full ${className}`}
    >
      <div
        onClick={onClick}
        className="w-full p-4 rounded-xl border cursor-pointer group transition-all duration-300 active:scale-95"
        style={{
          background: 'rgba(173, 153, 27, 0.08)',
          borderColor: 'rgba(173, 153, 27, 0.2)',
          backdropFilter: 'blur(20px)'
        }}
      >
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            {getIcon()}
          </div>
          <div className="flex-1 min-w-0">
            <h3 
              className="font-semibold text-lg mb-1 truncate"
              style={{ color: 'var(--text-100)' }}
            >
              {title}
            </h3>
            <p 
              className="text-sm leading-tight"
              style={{ color: 'var(--text-200)' }}
            >
              {description}
            </p>
          </div>
          <div className="flex-shrink-0">
            <motion.div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(173, 153, 27, 0.2)' }}
              whileHover={{ scale: 1.1 }}
            >
              <span 
                className="text-sm"
                style={{ color: 'var(--primary-100)' }}
              >
                →
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileNavigationCard;
