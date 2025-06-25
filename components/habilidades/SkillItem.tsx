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
                    style={{ color: 'var(--primary-100)' }}
                />
                <h4 className="text-sm font-semibold mb-3 text-center leading-tight" style={{ color: 'var(--text-200)' }}>
                    {skill.name}
                </h4>

                <div className="w-full rounded-full h-2 mb-2 overflow-hidden" style={{ 
                    backgroundColor: 'var(--bg-300)' 
                }}>
                    <motion.div
                        className="h-full rounded-full"
                        style={{
                            background: `linear-gradient(90deg, var(--primary-100) 0%, var(--primary-200) 100%)`
                        }}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ delay: 0.2 + (0.1 * index), duration: 1 }}
                    />
                </div>

                <span className="text-sm font-medium" style={{ color: 'var(--text-300)' }}>
                    {skill.level}%
                </span>
            </div>
        </motion.div>
    );
};

export default SkillItem;
