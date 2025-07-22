'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

interface WhatsAppCardProps {
    className: string;
    onClick: () => void;
    delay?: number;
}

const WhatsAppCard: React.FC<WhatsAppCardProps> = ({ className, onClick, delay = 0 }) => {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const checkTheme = () => {
            const theme = document.documentElement.getAttribute('data-theme');
            setIsDark(theme !== 'light');
        };

        checkTheme();

        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme']
        });

        return () => observer.disconnect();
    }, []);

    return (
        <motion.div
            className={`${className} cursor-pointer group relative overflow-hidden`}
            style={{
                background: isDark 
                    ? 'linear-gradient(145deg, #2A2A2F 0%, #1F1F23 50%, #121214 100%)'
                    : 'linear-gradient(145deg, #F8F9FA 0%, #FFFFFF 50%, #F0F0F0 100%)',
                borderRadius: '20px',
                boxShadow: isDark 
                    ? '16px 16px 32px rgba(0, 0, 0, 0.9), -16px -16px 32px rgba(100, 100, 105, 0.4)'
                    : '12px 12px 24px rgba(163, 177, 198, 0.6), -12px -12px 24px rgba(255, 255, 255, 0.9)',
                border: isDark ? '2px solid rgba(120, 120, 125, 0.4)' : '2px solid rgba(198, 167, 0, 0.3)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                padding: '20px'
            }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay }}
            onClick={onClick}
            whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
            onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = isDark 
                    ? '0 0 40px rgba(37, 211, 102, 0.6), 20px 20px 40px rgba(0, 0, 0, 0.95), -20px -20px 40px rgba(140, 140, 145, 0.6)'
                    : '0 0 30px rgba(37, 211, 102, 0.4), 16px 16px 32px rgba(163, 177, 198, 0.8), -16px -16px 32px rgba(255, 255, 255, 1)';
                e.currentTarget.style.borderColor = 'rgba(37, 211, 102, 0.8)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #25D366, #128C7E)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = isDark 
                    ? '16px 16px 32px rgba(0, 0, 0, 0.9), -16px -16px 32px rgba(100, 100, 105, 0.4)'
                    : '12px 12px 24px rgba(163, 177, 198, 0.6), -12px -12px 24px rgba(255, 255, 255, 0.9)';
                e.currentTarget.style.borderColor = isDark ? 'rgba(120, 120, 125, 0.4)' : 'rgba(198, 167, 0, 0.3)';
                e.currentTarget.style.background = isDark 
                    ? 'linear-gradient(145deg, #2A2A2F 0%, #1F1F23 50%, #121214 100%)'
                    : 'linear-gradient(145deg, #F8F9FA 0%, #FFFFFF 50%, #F0F0F0 100%)';
            }}
        >
            
            <div className="absolute inset-0 overflow-hidden rounded-xl">
                <motion.div
                    className="absolute -top-2 -left-2 w-12 h-12 rounded-full opacity-15"
                    style={{ backgroundColor: 'var(--accent-200)' }}
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
                    style={{ backgroundColor: 'var(--accent-100)' }}
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
                        style={{ borderColor: 'var(--accent-200)' }}
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
                        className="neumo-icon w-16 h-16 text-3xl neumo-glow group-hover:neumo-pulse"
                        style={{ color: 'var(--accent-200)' }}
                    >
                        <FaWhatsapp />
                    </div>
                </motion.div>

                
                <motion.h3 
                    className="text-xl font-bold mb-4 neumo-glow" 
                    style={{ 
                        color: 'var(--accent-200)',
                        fontFamily: 'Inter, system-ui, sans-serif',
                        fontWeight: '700'
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: delay + 0.1 }}
                >
                    Hablemos
                </motion.h3>

                
                <motion.div 
                    className="neumo-surface flex items-center px-3 py-2 rounded-full" 
                    style={{ 
                        background: 'var(--bg-100)',
                        boxShadow: 'var(--shadow-neumorphic-inset)'
                    }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: delay + 0.2 }}
                >
                    <div 
                        className="w-2 h-2 rounded-full mr-2 neumo-pulse"
                        style={{ backgroundColor: 'var(--accent-200)' }}
                    />
                    <span 
                        className="text-sm font-semibold" 
                        style={{ 
                            color: 'var(--accent-200)',
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