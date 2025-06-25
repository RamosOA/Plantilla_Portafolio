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
            className="text-center group mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 * index }}
        >
            <div className="flex flex-col items-center">
                <IconComponent
                    className="text-2xl mb-2 transition-all duration-300 group-hover:scale-110"
                    style={{ color: '#AD991B' }}
                />
                <h4 className="text-sm font-semibold mb-3 text-center leading-tight" style={{ color: '#FFFFFF' }}>
                    {skill.name}
                </h4>

                <div className="w-full bg-gray-700 rounded-full h-2 mb-2 overflow-hidden">
                    <motion.div
                        className="h-full rounded-full"
                        style={{
                            background: `linear-gradient(90deg, ${skill.color} 0%, #8e7d00 100%)`,
                            boxShadow: `0 0 8px rgba(173, 153, 27, 0.4)`
                        }}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ delay: 0.2 + (0.1 * index), duration: 1 }}
                    />
                </div>

                <span className="text-sm font-medium" style={{ color: '#e0e0e0' }}>
                    {skill.level}%
                </span>
            </div>
        </motion.div>
    );
};

export default SkillItem;
