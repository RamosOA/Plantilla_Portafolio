'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import SkillItem from './SkillItem';

interface SkillCategoryProps {
    title: string;
    icon: IconType;
    description: string;
    skills: Array<{
        name: string;
        icon: IconType;
        level: number;
        color: string;
    }>;
    className: string;
    delay: number;
    gridCols: 'grid-cols-2' | 'grid-cols-3' | 'grid-cols-4';
    handleWheel: (e: React.WheelEvent, scrollRef: React.RefObject<HTMLDivElement>) => void;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({
    title,
    icon: IconComponent,
    description,
    skills,
    className,
    delay,
    gridCols,
    handleWheel
}) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    return (
        <motion.div
            className={`${className} border rounded-lg p-4 flex flex-col overflow-hidden cursor-default`}
            style={{
                background: 'rgba(173, 153, 27, 0.08)',
                borderColor: 'rgba(173, 153, 27, 0.2)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay }}
            onWheel={(e) => handleWheel(e, scrollRef)}
        >
            <div className="flex items-center mb-4">
                <IconComponent className="text-3xl mr-2" style={{ color: 'rgba(173, 153, 27, 0.3)' }} />
                <h3 className="text-lg font-semibold" style={{ color: '#AD991B' }}>
                    {title}
                </h3>
            </div>

            {/* Texto introductorio */}
            <motion.p
                className="text-sm mb-4 leading-relaxed"
                style={{ color: '#e0e0e0' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: delay + 0.2 }}
            >
                {description}
            </motion.p>

            {/* Área con scroll */}
            <div
                ref={scrollRef}
                className={`grid ${gridCols} gap-3 flex-1 overflow-y-auto pr-2 custom-scrollbar scroll-smooth`}
            >
                {skills.map((skill, index) => (
                    <SkillItem key={skill.name} skill={skill} index={index} />
                ))}
            </div>
        </motion.div>
    );
};

export default SkillCategory;
