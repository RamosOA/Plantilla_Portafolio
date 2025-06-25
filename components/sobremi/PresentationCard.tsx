'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaUser } from 'react-icons/fa';

interface PresentationCardProps {
    className: string;
    delay: number;
    handleWheel: (e: React.WheelEvent, scrollRef: React.RefObject<HTMLDivElement>) => void;
}

const PresentationCard: React.FC<PresentationCardProps> = ({ className, delay, handleWheel }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    return (
        <motion.div
            className={`${className} border rounded-xl p-6 flex flex-col overflow-hidden cursor-default`}
            style={{
                background: 'color-mix(in srgb, var(--primary-100) 8%, transparent)',
                borderColor: 'color-mix(in srgb, var(--primary-100) 20%, transparent)',
                backdropFilter: 'blur(20px)'
            }}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay }}
            onWheel={(e) => handleWheel(e, scrollRef)}
        >
            <div className="flex items-center mb-6">
                <FaUser className="text-4xl mr-4" style={{ color: 'var(--primary-200)' }} />
                <h3 className="text-2xl font-bold" style={{ color: 'var(--primary-100)' }}>
                    ¡Hola! Soy Oscar
                </h3>
            </div>
            
            <div 
                ref={scrollRef}
                className="flex-1 overflow-y-auto pr-2 custom-scrollbar scroll-smooth"
            >
                <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-200)' }}>
                    Desarrollador web apasionado por crear experiencias digitales excepcionales. 
                    Me especializo en tecnologías modernas como React, Next.js y Node.js.
                </p>
                
                <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--text-300)' }}>
                    Siempre en busca de nuevos desafíos y oportunidades para crecer profesionalmente. 
                    Me encanta resolver problemas complejos con soluciones elegantes y eficientes.
                </p>

                <p className="text-base leading-relaxed" style={{ color: 'var(--text-300)' }}>
                    Mi objetivo es combinar creatividad y tecnología para construir aplicaciones 
                    que no solo funcionen perfectamente, sino que también brinden una experiencia 
                    de usuario memorable y significativa.
                </p>
            </div>
        </motion.div>
    );
};

export default PresentationCard;
