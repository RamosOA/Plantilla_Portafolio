'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ResponseTimeProps {
    className: string;
    delay: number;
}

const ResponseTime: React.FC<ResponseTimeProps> = ({ className, delay }) => {
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
        >
            {/* Header */}
            <div className="flex items-center mb-4">
                <div className="text-3xl mr-2" style={{ color: 'rgba(173, 153, 27, 0.3)' }}>
                    ⏰
                </div>
                <h3 className="text-lg font-semibold" style={{ color: '#AD991B' }}>
                    Horario de respuesta
                </h3>
            </div>

            {/* Contenido */}
            <div className="flex-1">
                <motion.div 
                    className="mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                >
                    <p 
                        className="text-sm leading-relaxed"
                        style={{ color: '#e0e0e0' }}
                    >
                        Generalmente respondo en un plazo de 24-48 horas.
                    </p>
                </motion.div>
                
                <motion.div 
                    className="mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <p 
                        className="text-sm leading-relaxed"
                        style={{ color: '#e0e0e0' }}
                    >
                        Para proyectos urgentes, no dudes en mencionarlo en tu mensaje.
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ResponseTime;