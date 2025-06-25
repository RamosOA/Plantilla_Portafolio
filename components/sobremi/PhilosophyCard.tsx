'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';

interface PhilosophyCardProps {
    className: string;
    delay: number;
    handleWheel: (e: React.WheelEvent, scrollRef: React.RefObject<HTMLDivElement>) => void;
}

const PhilosophyCard: React.FC<PhilosophyCardProps> = ({ className, delay, handleWheel }) => {
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
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay }}
            onWheel={(e) => handleWheel(e, scrollRef)}
        >
            <div 
                ref={scrollRef}
                className="text-center flex-1 overflow-y-auto pr-2 custom-scrollbar scroll-smooth"
            >
                <motion.div
                    className="text-6xl mb-4"
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    style={{ color: 'rgba(173, 153, 27, 0.3)' }}
                >
                    📖
                </motion.div>
                
                <h4 className="text-lg font-semibold mb-4" style={{ color: '#AD991B' }}>
                    Mi Filosofía
                </h4>
                
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#e0e0e0' }}>
                    "La simplicidad es la máxima sofisticación. Cada línea de código debe tener un propósito."
                </p>

                <p className="text-sm leading-relaxed" style={{ color: '#e0e0e0' }}>
                    Creo firmemente en escribir código limpio, mantenible y escalable 
                    que pueda ser entendido por cualquier desarrollador.
                </p>
            </div>
        </motion.div>
    );
};

export default PhilosophyCard;
