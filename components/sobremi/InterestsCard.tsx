'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import InterestItem from './InterestItem';
import { interests } from './aboutData';

interface InterestsCardProps {
    className: string;
    delay: number;
    handleWheel: (e: React.WheelEvent, scrollRef: React.RefObject<HTMLDivElement>) => void;
}

const InterestsCard: React.FC<InterestsCardProps> = ({ className, delay, handleWheel }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    return (
        <motion.div
            className={`${className} border rounded-xl p-6 flex flex-col overflow-hidden cursor-default`}
            style={{
                background: 'color-mix(in srgb, var(--primary-100) 8%, transparent)',
                borderColor: 'color-mix(in srgb, var(--primary-100) 20%, transparent)',
                backdropFilter: 'blur(20px)'
            }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay }}
            onWheel={(e) => handleWheel(e, scrollRef)}
        >
            <div className="flex items-center mb-6">
                <FaHeart className="text-2xl mr-3" style={{ color: 'var(--primary-200)' }} />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--primary-100)' }}>
                    Mis Intereses
                </h4>
            </div>
            
            <div 
                ref={scrollRef}
                className="flex-1 overflow-y-auto pr-2 custom-scrollbar scroll-smooth"
            >
                <div className="grid grid-cols-2 gap-3">
                    {interests.map((interest, index) => (
                        <InterestItem 
                            key={interest}
                            interest={interest}
                            index={index}
                            delay={0.6}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default InterestsCard;
