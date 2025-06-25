'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaInfoCircle } from 'react-icons/fa';
import PersonalInfoItem from './PersonalInfoItem';
import { personalInfo } from './aboutData';

interface PersonalInfoCardProps {
    className: string;
    delay: number;
    handleWheel: (e: React.WheelEvent, scrollRef: React.RefObject<HTMLDivElement>) => void;
}

const PersonalInfoCard: React.FC<PersonalInfoCardProps> = ({ className, delay, handleWheel }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    return (
        <motion.div
            className={`${className} border rounded-xl p-6 flex flex-col overflow-hidden cursor-default`}
            style={{
                background: 'color-mix(in srgb, var(--primary-100) 8%, transparent)',
                borderColor: 'color-mix(in srgb, var(--primary-100) 20%, transparent)',
                backdropFilter: 'blur(20px)'
            }}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay }}
            onWheel={(e) => handleWheel(e, scrollRef)}
        >
            <div className="flex items-center mb-6">
                <FaInfoCircle className="text-2xl mr-3" style={{ color: 'var(--primary-200)' }} />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--primary-100)' }}>
                    Información Personal
                </h4>
            </div>
            
            <div 
                ref={scrollRef}
                className="flex-1 overflow-y-auto pr-2 custom-scrollbar scroll-smooth"
            >
                <div className="space-y-6">
                    {personalInfo.map((info, index) => (
                        <PersonalInfoItem 
                            key={info.label}
                            info={info}
                            index={index}
                            delay={0.5}
                        />
                    ))}
                    
                    {}
                    <motion.div
                        className="pt-4 border-t border-opacity-20"
                        style={{ borderColor: 'var(--primary-100)' }}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.9 }}
                    >
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-300)' }}>
                            Comprometido con el aprendizaje continuo y la mejora constante 
                            de mis habilidades técnicas y profesionales.
                        </p>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default PersonalInfoCard;
