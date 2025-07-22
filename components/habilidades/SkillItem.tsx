'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

interface SkillItemProps {
    skill: {
        name: string;
        icon: IconType;
        level: number;
        color: string;
    };
    index: number;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill, index }) => {
    const IconComponent = skill.icon;

    return (
        <motion.div
            className="ultra-neumo-raised neumo-interactive ultra-particle-container ultra-inner-border text-center group relative p-4"
            style={{
                background: 'var(--ultra-raised-gradient)',
                boxShadow: 'var(--shadow-neumorphic)',
                borderRadius: '1rem',
                border: '1px solid rgba(198, 167, 0, 0.1)',
                minHeight: '160px',
                width: '100%',
                maxWidth: '100%'
            }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 * index }}
            whileHover={{
                y: -4,
                scale: 1.02,
                transition: { duration: 0.3 }
            }}
        >
            {/* Efecto de brillo de fondo */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                 style={{ 
                     background: `linear-gradient(135deg, var(--accent-100), var(--accent-200))`,
                     borderRadius: 'inherit'
                 }}
            />
            
            <div className="flex flex-col items-center relative z-10 h-full justify-between">
                <motion.div 
                    className="ultra-neumo-raised neumo-icon ultra-particle-container w-12 h-12 mb-3 text-2xl relative group/icon flex items-center justify-center"
                    style={{ 
                        background: 'var(--ultra-raised-gradient)',
                        boxShadow: 'var(--shadow-neumorphic)',
                        borderRadius: '12px'
                    }}
                    whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.3 }
                    }}
                >
                    <motion.div
                        className="w-full h-full flex items-center justify-center"
                        style={{ 
                            color: 'var(--accent-100)'
                        }}
                    >
                        <IconComponent className="w-6 h-6" />
                    </motion.div>
                </motion.div>
                
                <motion.h4 
                    className="text-xs font-semibold mb-1 text-center leading-tight px-1" 
                    style={{ color: 'var(--text-100)' }}
                >
                    {skill.name}
                </motion.h4>

                {/* Contenedor para porcentaje y barra de progreso */}
                <div className="w-full mb-3">
                    {/* Indicador de porcentaje */}
                    <motion.div
                        className="text-xs font-bold text-center mb-2"
                        style={{ 
                            color: 'var(--accent-100)'
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 + (0.1 * index) }}
                    >
                        {skill.level}%
                    </motion.div>
                    
                    {/* Barra de progreso */}
                    <div 
                        className="ultra-neumo-deep rounded-full h-3 overflow-hidden p-1" 
                        style={{ 
                            background: 'var(--ultra-deep-gradient)',
                            boxShadow: 'inset 2px 2px 4px rgba(0,0,0,0.3)'
                        }}
                    >
                        <motion.div
                            className="h-full rounded-full relative"
                            style={{
                                background: `linear-gradient(90deg, var(--accent-100) 0%, var(--accent-200) 100%)`,
                                boxShadow: '0 0 8px rgba(173, 153, 27, 0.5)'
                            }}
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ delay: 0.2 + (0.1 * index), duration: 1, ease: "easeOut" }}
                        />
                    </div>
                </div>

                {/* Etiqueta de nivel */}
                <motion.span 
                    className="text-xs font-medium px-2 py-1 rounded-lg" 
                    style={{ 
                        color: 'var(--accent-100)',
                        background: 'rgba(173, 153, 27, 0.1)',
                        border: '1px solid rgba(173, 153, 27, 0.2)'
                    }}
                >
                    {skill.level >= 90 ? 'Experto' : skill.level >= 70 ? 'Avanzado' : skill.level >= 50 ? 'Intermedio' : 'Básico'}
                </motion.span>
            </div>
        </motion.div>
    );
};

export default SkillItem;
