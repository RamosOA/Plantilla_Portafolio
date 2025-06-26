'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

interface MobileSkillItemProps {
  name: string;
  icon: IconType;
  level: number;
  color: string;
  delay?: number;
}

const MobileSkillItem: React.FC<MobileSkillItemProps> = ({
  name,
  icon: Icon,
  level,
  color,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-opacity-10 border rounded-lg p-4 transition-all duration-300 active:scale-95"
      style={{
        background: 'rgba(173, 153, 27, 0.08)',
        borderColor: 'rgba(173, 153, 27, 0.2)',
        backdropFilter: 'blur(15px)'
      }}
    >
      <div className="flex items-center space-x-3 mb-3">
        <div className="flex-shrink-0">
          <Icon 
            className="text-xl"
            style={{ color }}
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 
            className="font-medium text-sm truncate"
            style={{ color: 'var(--text-100)' }}
          >
            {name}
          </h3>
        </div>
        <div className="flex-shrink-0">
          <span 
            className="text-xs font-bold"
            style={{ color }}
          >
            {level}%
          </span>
        </div>
      </div>
      
      {/* Progress bar */}
      <div className="relative">
        <div 
          className="w-full h-2 rounded-full bg-opacity-20"
          style={{ backgroundColor: 'rgba(173, 153, 27, 0.1)' }}
        >
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: color }}
            initial={{ width: 0 }}
            animate={{ width: `${level}%` }}
            transition={{ duration: 1, delay: delay + 0.2 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default MobileSkillItem;
