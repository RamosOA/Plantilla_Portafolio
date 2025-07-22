'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MobileSkillItem from './MobileSkillItem';
import { frontendSkills, backendSkills, toolsSkills } from '../habilidades/skillsData';
import { IconType } from 'react-icons';

interface Skill {
  name: string;
  icon: IconType;
  level: number;
  color: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
  emoji: string;
  color: string;
}

const MobileHabilidadesSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories: SkillCategory[] = [
    {
      title: 'Frontend',
      skills: frontendSkills,
      emoji: '🎨',
      color: '#00F0FF' // Azul eléctrico
    },
    {
      title: 'Backend',
      skills: backendSkills,
      emoji: '⚙️',
      color: '#8e7d00'
    },
    {
      title: 'Herramientas',
      skills: toolsSkills,
      emoji: '🛠️',
      color: '#4c4100'
    }
  ];

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
          Habilidades
        </h1>
        <p 
          className="text-base"
          style={{ color: 'var(--text-200)' }}
        >
          Tecnologías y herramientas que domino
        </p>
      </motion.div>

      {/* Category Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex bg-opacity-10 rounded-xl p-1"
        style={{
          background: 'rgba(173, 153, 27, 0.05)',
          backdropFilter: 'blur(15px)'
        }}
      >
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(index)}
            className={`flex-1 py-3 px-4 rounded-lg transition-all duration-300 ${
              activeCategory === index ? 'transform scale-105' : ''
            }`}
            style={{
              background: activeCategory === index 
                ? 'rgba(173, 153, 27, 0.2)' 
                : 'transparent',
              color: activeCategory === index 
                ? 'var(--primary-100)' 
                : 'var(--text-200)'
            }}
          >
            <div className="flex flex-col items-center space-y-1">
              <span className="text-lg">{category.emoji}</span>
              <span className="text-xs font-medium">{category.title}</span>
            </div>
          </button>
        ))}
      </motion.div>

      {/* Skills Grid */}
      <div className="flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="h-full"
          >
            <div className="grid grid-cols-1 gap-3 max-h-full overflow-y-auto custom-scroll">
              {categories[activeCategory].skills.map((skill, index) => (
                <MobileSkillItem
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  level={skill.level}
                  color={skill.color}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Stats Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid grid-cols-3 gap-4 pt-4"
      >
        {categories.map((category, index) => {
          const avgLevel = Math.round(
            category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length
          );
          
          return (
            <div
              key={index}
              className="text-center p-3 rounded-lg border"
              style={{
                background: 'rgba(173, 153, 27, 0.05)',
                borderColor: 'rgba(173, 153, 27, 0.2)'
              }}
            >
              <div className="text-lg font-bold" style={{ color: category.color }}>
                {avgLevel}%
              </div>
              <div className="text-xs" style={{ color: 'var(--text-300)' }}>
                {category.title}
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default MobileHabilidadesSection;
