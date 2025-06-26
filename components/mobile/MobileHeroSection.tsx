'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface MobileHeroSectionProps {
  name: string;
  title: string;
  subtitle?: string;
  description?: string;
}

const MobileHeroSection: React.FC<MobileHeroSectionProps> = ({
  name,
  title,
  subtitle,
  description
}) => {
  return (
    <div className="w-full max-w-md mx-auto text-center space-y-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-2"
      >
        <motion.h1
          className="text-3xl font-bold leading-tight"
          style={{ color: 'var(--primary-100)' }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {name}
        </motion.h1>
        
        <motion.h2
          className="text-xl font-medium"
          style={{ color: 'var(--text-100)' }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {title}
        </motion.h2>
        
        {subtitle && (
          <motion.p
            className="text-lg font-light"
            style={{ color: 'var(--text-200)' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>

      {description && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="w-full"
        >
          <p
            className="text-sm leading-relaxed px-4"
            style={{ color: 'var(--text-300)' }}
          >
            {description}
          </p>
        </motion.div>
      )}

      {/* Decorative element */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="flex justify-center pt-4"
      >
        <div
          className="w-12 h-1 rounded-full"
          style={{ background: 'linear-gradient(90deg, var(--primary-100), transparent)' }}
        />
      </motion.div>
    </div>
  );
};

export default MobileHeroSection;
