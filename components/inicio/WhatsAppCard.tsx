'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

interface WhatsAppCardProps {
    className: string;
    onClick: () => void;
    delay?: number;
}

const WhatsAppCard: React.FC<WhatsAppCardProps> = ({ className, onClick, delay = 0 }) => {
    return (
        <motion.div
            className={`${className} border rounded-xl p-4 cursor-pointer group relative overflow-hidden`}
            style={{
                background: 'rgba(37, 211, 102, 0.08)',
                borderColor: 'rgba(37, 211, 102, 0.2)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay }}
            onClick={onClick}
            onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(37, 211, 102, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(37, 211, 102, 0.5)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(37, 211, 102, 0.2)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(37, 211, 102, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(37, 211, 102, 0.2)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            {/* Efectos de ondas */}
            <div className="absolute inset-0 overflow-hidden rounded-xl">
                <motion.div
                    className="absolute -top-2 -left-2 w-12 h-12 rounded-full opacity-15"
                    style={{ backgroundColor: '#25D366' }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.15, 0.05, 0.15]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full opacity-10"
                    style={{ backgroundColor: '#25D366' }}
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.1, 0.03, 0.1]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                />
            </div>

            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
                {/* Icono con efectos */}
                <motion.div
                    className="relative mb-6"
                    whileHover={{ 
                        rotate: [0, -3, 3, -3, 0],
                        scale: 1.05
                    }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        className="absolute inset-0 rounded-full border opacity-20"
                        style={{ borderColor: '#25D366' }}
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.2, 0, 0.2]
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeOut"
                        }}
                    />
                    
                    <div 
                        className="w-16 h-16 flex items-center justify-center rounded-full relative z-10"
                        style={{ backgroundColor: 'rgba(37, 211, 102, 0.2)' }}
                    >
                        <FaWhatsapp className="text-3xl" style={{ color: '#25D366' }} />
                    </div>
                </motion.div>

                {/* Título */}
                <motion.h3 
                    className="text-xl font-bold mb-4" 
                    style={{ 
                        color: '#25D366',
                        fontFamily: 'Inter, system-ui, sans-serif',
                        fontWeight: '700'
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: delay + 0.1 }}
                >
                    Hablemos
                </motion.h3>

                {/* Badge de estado */}
                <motion.div 
                    className="flex items-center px-3 py-2 rounded-full" 
                    style={{ 
                        backgroundColor: 'rgba(37, 211, 102, 0.15)',
                        border: '1px solid rgba(37, 211, 102, 0.3)'
                    }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: delay + 0.2 }}
                >
                    <div 
                        className="w-2 h-2 rounded-full mr-2"
                        style={{ backgroundColor: '#25D366' }}
                    />
                    <span 
                        className="text-sm font-semibold" 
                        style={{ 
                            color: '#25D366',
                            fontFamily: 'Inter, system-ui, sans-serif',
                            fontWeight: '600'
                        }}
                    >
                        En línea
                    </span>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default WhatsAppCard;