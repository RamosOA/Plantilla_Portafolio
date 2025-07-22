'use client';

import React, { useRef, useState, useEffect } from 'react';
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
    const [hasOverflow, setHasOverflow] = useState(false);
    const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);

    useEffect(() => {
        const checkOverflow = () => {
            if (scrollRef.current) {
                const element = scrollRef.current;
                const hasScroll = element.scrollHeight > element.clientHeight;
                setHasOverflow(hasScroll);
                setIsScrolledToBottom(element.scrollTop >= element.scrollHeight - element.clientHeight - 2);
            }
        };

        // Verificar overflow después de que se rendericen los elementos
        const timeoutId = setTimeout(checkOverflow, 100);
        
        window.addEventListener('resize', checkOverflow);
        return () => {
            window.removeEventListener('resize', checkOverflow);
            clearTimeout(timeoutId);
        };
    }, [skills]);

    const handleScroll = () => {
        if (scrollRef.current) {
            const element = scrollRef.current;
            const isAtBottom = element.scrollTop >= element.scrollHeight - element.clientHeight - 2;
            setIsScrolledToBottom(isAtBottom);
        }
    };

    return (
        <motion.div
            className={`${className} ultra-neumo-raised ultra-inner-border p-4 flex flex-col cursor-default bg-opacity-90 overflow-hidden`}
            style={{
                background: 'var(--ultra-raised-gradient)',
                boxShadow: 'var(--shadow-neumorphic)',
                borderRadius: '1.2rem',
                border: '2px solid rgba(198, 167, 0, 0.13)',
                minHeight: '100%'
            }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay }}
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

            
            {/* Contenedor de scroll con altura fija */}
            <div className="relative" style={{ height: 'calc(100% - 120px)' }}>
                <div
                    ref={scrollRef}
                    className={`grid ${gridCols} gap-3 h-full overflow-y-auto overflow-x-hidden pr-2 custom-scrollbar scroll-smooth`}
                    onScroll={handleScroll}
                    onWheel={(e) => {
                        
                        e.stopPropagation();
                        const element = e.currentTarget;
                        const atTop = element.scrollTop === 0;
                        const atBottom = element.scrollTop >= element.scrollHeight - element.clientHeight - 1;
                        
                        
                        if ((e.deltaY < 0 && atTop) || (e.deltaY > 0 && atBottom)) {
                            handleWheel(e, scrollRef);
                        }
                    }}
                >
                    {skills.map((skill, index) => (
                        <SkillItem key={skill.name} skill={skill} index={index} />
                    ))}
                </div>
                
                {/* Indicador de scroll disponible */}
                {hasOverflow && !isScrolledToBottom && (
                    <motion.div 
                        className="absolute bottom-2 right-3 flex items-center justify-center w-5 h-5 rounded-full pointer-events-none z-10"
                        style={{
                            background: 'linear-gradient(135deg, var(--accent-100), var(--accent-200))',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 0.8, scale: 1 }}
                        transition={{ delay: delay + 0.5 }}
                    >
                        <span className="text-xs" style={{ color: 'var(--text-100)' }}>⬇</span>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
};

export default SkillCategory;
