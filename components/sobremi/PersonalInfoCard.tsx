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
                background: 'rgba(173, 153, 27, 0.08)',
                borderColor: 'rgba(173, 153, 27, 0.2)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay }}
            onWheel={(e) => handleWheel(e, scrollRef)}
        >
            <div className="flex items-center mb-6">
                <FaInfoCircle className="text-2xl mr-3" style={{ color: 'rgba(173, 153, 27, 0.4)' }} />
                <h4 className="text-xl font-semibold" style={{ color: '#AD991B' }}>
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
                    
                    {/* Información adicional para demostrar el scroll */}
                    <motion.div
                        className="pt-4 border-t border-opacity-20"
                        style={{ borderColor: '#AD991B' }}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.9 }}
                    >
                        <p className="text-sm leading-relaxed" style={{ color: '#e0e0e0' }}>
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
