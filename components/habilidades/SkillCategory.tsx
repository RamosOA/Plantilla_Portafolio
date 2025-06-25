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
                background: 'color-mix(in srgb, var(--primary-100) 8%, transparent)',
                borderColor: 'color-mix(in srgb, var(--primary-100) 20%, transparent)',
                backdropFilter: 'blur(20px)'
            }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay }}
            onWheel={(e) => handleWheel(e, scrollRef)}
        >
            <div className="flex items-center mb-4">
                <IconComponent className="text-3xl mr-2" style={{ color: 'var(--primary-200)' }} />
                <h3 className="text-lg font-semibold" style={{ color: 'var(--primary-100)' }}>
                    {title}
                </h3>
            </div>

            
            <motion.p
                className="text-sm mb-4 leading-relaxed"
                style={{ color: 'var(--text-300)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: delay + 0.2 }}
            >
                {description}
            </motion.p>

            
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
