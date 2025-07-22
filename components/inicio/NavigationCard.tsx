'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaCogs, FaBriefcase, FaPhone, FaArrowRight } from 'react-icons/fa';

type IconType = 'user' | 'skills' | 'projects' | 'contact';
type LayoutType = 'horizontal' | 'vertical';

interface NavigationCardProps {
    className: string;
    title: string;
    description: string;
    icon: IconType;
    onClick: () => void;
    layout?: LayoutType;
    actionText?: string;
    delay?: number;
}

const NavigationCard: React.FC<NavigationCardProps> = ({ 
    className, 
    title, 
    description, 
    icon, 
    onClick, 
    layout = 'horizontal',
    actionText = 'Ver más',
    delay = 0 
}) => {
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

    const getIcon = () => {
        const iconProps = {
            className: layout === 'vertical' ? 'text-5xl' : 'text-4xl',
            style: { 
                color: isDark ? '#C6A700' : '#666666',
                filter: isDark 
                    ? 'drop-shadow(0 0 10px rgba(198, 167, 0, 0.5))'
                    : 'drop-shadow(0 0 5px rgba(102, 102, 102, 0.3))'
            }
        };

        switch (icon) {
            case 'user': return <FaUser {...iconProps} />;
            case 'skills': return <FaCogs {...iconProps} />;
            case 'projects': return <FaBriefcase {...iconProps} />;
            case 'contact': return <FaPhone {...iconProps} />;
            default: return <FaUser {...iconProps} />;
        }
    };

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
                scale: 1.03, 
                y: -8,
                transition: { duration: 0.3 } 
            }}
            whileTap={{ scale: 0.97 }}
            onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = isDark 
                    ? '0 0 40px rgba(198, 167, 0, 0.6), 20px 20px 40px rgba(0, 0, 0, 0.95), -20px -20px 40px rgba(140, 140, 145, 0.6)'
                    : '0 0 30px rgba(198, 167, 0, 0.4), 16px 16px 32px rgba(163, 177, 198, 0.8), -16px -16px 32px rgba(255, 255, 255, 1)';
                e.currentTarget.style.borderColor = 'rgba(198, 167, 0, 0.8)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #C6A700, #50C878)';
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
            {/* Efecto de brillo de fondo */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-[18px]"
                 style={{ 
                     background: 'linear-gradient(135deg, #C6A700, #50C878)',
                     filter: 'blur(20px)'
                 }}
            />
            
            {/* Partículas decorativas */}
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <motion.div
                    className="w-2 h-2 rounded-full"
                    style={{ background: '#50C878' }}
                    animate={{
                        scale: [0, 1, 0],
                        rotate: [0, 180, 360]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 0
                    }}
                />
            </div>
            <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <motion.div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: '#C6A700' }}
                    animate={{
                        scale: [0, 1, 0],
                        rotate: [360, 180, 0]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 0.5
                    }}
                />
            </div>

            {layout === 'vertical' ? (
                
                <div className="flex flex-col justify-start h-full text-center relative z-10 py-1">
                    <motion.div 
                        className="w-20 h-44 mx-auto mb-3 text-4xl flex items-center justify-center"
                        style={{ 
                            background: isDark 
                                ? 'linear-gradient(145deg, #2A2A2F 0%, #1F1F23 50%, #121214 100%)'
                                : 'linear-gradient(145deg, #F8F9FA 0%, #FFFFFF 50%, #F0F0F0 100%)',
                            boxShadow: isDark 
                                ? '12px 12px 20px rgba(0, 0, 0, 0.9), -12px -12px 20px rgba(100, 100, 105, 0.4)'
                                : '8px 8px 16px rgba(163, 177, 198, 0.6), -8px -8px 16px rgba(255, 255, 255, 0.9)',
                            borderRadius: '20px',
                            border: isDark ? '2px solid rgba(120, 120, 125, 0.4)' : '2px solid rgba(198, 167, 0, 0.3)',
                            transition: 'all 0.3s ease'
                        }}
                        whileHover={{
                            scale: 1.15,
                            rotate: [0, -5, 5, 0],
                            transition: { duration: 0.4 }
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = isDark 
                                ? '0 0 30px rgba(198, 167, 0, 0.6), 16px 16px 32px rgba(0, 0, 0, 0.95), -16px -16px 32px rgba(120, 120, 125, 0.6)'
                                : '0 0 20px rgba(198, 167, 0, 0.4), 12px 12px 24px rgba(163, 177, 198, 0.8), -12px -12px 24px rgba(255, 255, 255, 1)';
                            e.currentTarget.style.background = 'linear-gradient(135deg, #C6A700, #50C878)';
                            e.currentTarget.style.borderColor = 'rgba(198, 167, 0, 0.8)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = isDark 
                                ? '12px 12px 20px rgba(0, 0, 0, 0.9), -12px -12px 20px rgba(100, 100, 105, 0.4)'
                                : '8px 8px 16px rgba(163, 177, 198, 0.6), -8px -8px 16px rgba(255, 255, 255, 0.9)';
                            e.currentTarget.style.background = isDark 
                                ? 'linear-gradient(145deg, #2A2A2F 0%, #1F1F23 50%, #121214 100%)'
                                : 'linear-gradient(145deg, #F8F9FA 0%, #FFFFFF 50%, #F0F0F0 100%)';
                            e.currentTarget.style.borderColor = isDark ? 'rgba(120, 120, 125, 0.4)' : 'rgba(198, 167, 0, 0.3)';
                        }}
                    >
                        {getIcon()}
                    </motion.div>
                    
                    <motion.h3 
                        className="text-lg font-bold mb-1" 
                        style={{ 
                            color: isDark ? '#C6A700' : '#666666',
                            textShadow: isDark 
                                ? '0 0 10px rgba(198, 167, 0, 0.5)'
                                : '0 0 5px rgba(102, 102, 102, 0.3)'
                        }}
                        whileHover={{
                            scale: 1.05,
                            textShadow: isDark 
                                ? '0 0 20px rgba(198, 167, 0, 0.8)'
                                : '0 0 10px rgba(102, 102, 102, 0.5)',
                            transition: { duration: 0.3 }
                        }}
                    >
                        {title}
                    </motion.h3>
                    
                    <p className="text-xs leading-relaxed mb-2 flex-grow" 
                       style={{ 
                           color: isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(102, 102, 102, 0.8)',
                           fontFamily: 'Inter, system-ui, sans-serif',
                           overflow: 'hidden',
                           display: '-webkit-box',
                           WebkitLineClamp: 3,
                           WebkitBoxOrient: 'vertical' as const
                       }}>
                        {description}
                    </p>
                    
                    <motion.div 
                        className="flex items-center justify-center px-3 py-1 rounded-full mx-auto"
                        style={{ 
                            background: isDark 
                                ? 'linear-gradient(145deg, #2A2A2F 0%, #1F1F23 50%, #121214 100%)'
                                : 'linear-gradient(145deg, #F8F9FA 0%, #FFFFFF 50%, #F0F0F0 100%)',
                            boxShadow: isDark 
                                ? '8px 8px 16px rgba(0, 0, 0, 0.9), -8px -8px 16px rgba(100, 100, 105, 0.4)'
                                : '6px 6px 12px rgba(163, 177, 198, 0.6), -6px -6px 12px rgba(255, 255, 255, 0.9)',
                            border: isDark ? '1px solid rgba(120, 120, 125, 0.4)' : '1px solid rgba(198, 167, 0, 0.3)',
                            transition: 'all 0.3s ease'
                        }}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: isDark 
                                ? '0 0 20px rgba(198, 167, 0, 0.6), 10px 10px 20px rgba(0, 0, 0, 0.95), -10px -10px 20px rgba(120, 120, 125, 0.6)'
                                : '0 0 15px rgba(198, 167, 0, 0.4), 8px 8px 16px rgba(163, 177, 198, 0.8), -8px -8px 16px rgba(255, 255, 255, 1)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = isDark 
                                ? '0 0 20px rgba(198, 167, 0, 0.6), 10px 10px 20px rgba(0, 0, 0, 0.95), -10px -10px 20px rgba(120, 120, 125, 0.6)'
                                : '0 0 15px rgba(198, 167, 0, 0.4), 8px 8px 16px rgba(163, 177, 198, 0.8), -8px -8px 16px rgba(255, 255, 255, 1)';
                            e.currentTarget.style.background = 'linear-gradient(135deg, #C6A700, #50C878)';
                            
                            // Cambiar color del texto en hover
                            const span = e.currentTarget.querySelector('span');
                            const arrow = e.currentTarget.querySelector('svg');
                            if (span) {
                                span.style.color = isDark ? '#FFFFFF' : '#FFDD44';
                            }
                            if (arrow) {
                                arrow.style.color = isDark ? '#FFFFFF' : '#FFDD44';
                            }
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = isDark 
                                ? '8px 8px 16px rgba(0, 0, 0, 0.9), -8px -8px 16px rgba(100, 100, 105, 0.4)'
                                : '6px 6px 12px rgba(163, 177, 198, 0.6), -6px -6px 12px rgba(255, 255, 255, 0.9)';
                            e.currentTarget.style.background = isDark 
                                ? 'linear-gradient(145deg, #2A2A2F 0%, #1F1F23 50%, #121214 100%)'
                                : 'linear-gradient(145deg, #F8F9FA 0%, #FFFFFF 50%, #F0F0F0 100%)';
                            
                            // Restaurar color del texto original
                            const span = e.currentTarget.querySelector('span');
                            const arrow = e.currentTarget.querySelector('svg');
                            if (span) {
                                span.style.color = isDark ? '#C6A700' : '#666666';
                            }
                            if (arrow) {
                                arrow.style.color = isDark ? '#C6A700' : '#666666';
                            }
                        }}
                    >
                        <span className="text-xs mr-1.5 font-semibold" style={{ 
                            color: isDark ? '#C6A700' : '#666666',
                            transition: 'all 0.3s ease'
                        }}>
                            {actionText}
                        </span>
                        <motion.div
                            whileHover={{ x: 5, rotate: 45 }}
                            transition={{ duration: 0.2 }}
                        >
                            <FaArrowRight className="text-xs" style={{ 
                                color: isDark ? '#C6A700' : '#666666',
                                transition: 'all 0.3s ease'
                            }} />
                        </motion.div>
                    </motion.div>
                </div>
            ) : (
                
                <div className="flex items-center justify-between h-full relative z-10">
                    <div className="flex items-center">
                        <motion.div 
                            className="w-20 h-16 mr-6 text-4xl flex items-center justify-center"
                            style={{ 
                                background: isDark 
                                    ? 'linear-gradient(145deg, #2A2A2F 0%, #1F1F23 50%, #121214 100%)'
                                    : 'linear-gradient(145deg, #F8F9FA 0%, #FFFFFF 50%, #F0F0F0 100%)',
                                boxShadow: isDark 
                                    ? '12px 12px 20px rgba(0, 0, 0, 0.9), -12px -12px 20px rgba(100, 100, 105, 0.4)'
                                    : '8px 8px 16px rgba(163, 177, 198, 0.6), -8px -8px 16px rgba(255, 255, 255, 0.9)',
                                borderRadius: '18px',
                                border: isDark ? '2px solid rgba(120, 120, 125, 0.4)' : '2px solid rgba(198, 167, 0, 0.3)',
                                transition: 'all 0.3s ease'
                            }}
                            whileHover={{
                                scale: 1.1,
                                rotate: [0, -3, 3, 0],
                                transition: { duration: 0.3 }
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = 'var(--shadow-neumorphic-glow)';
                                e.currentTarget.style.background = `linear-gradient(135deg, var(--accent-100), var(--accent-200))`;
                                e.currentTarget.style.color = 'var(--color-button-text)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = 'var(--shadow-neumorphic)';
                                e.currentTarget.style.background = 'var(--bg-200)';
                                e.currentTarget.style.color = 'var(--accent-100)';
                            }}
                        >
                            {getIcon()}
                        </motion.div>
                        
                        <div>
                            <motion.h3 
                                className={`font-bold mb-2 ${layout === 'horizontal' ? 'text-2xl' : 'text-xl'}`} 
                                style={{ color: 'var(--text-100)' }}
                                whileHover={{
                                    scale: 1.02,
                                    color: 'var(--accent-100)',
                                    textShadow: '0 0 8px var(--accent-100)'
                                }}
                            >
                                {title}
                            </motion.h3>
                            <p className="text-base" 
                               style={{ 
                                   color: 'var(--text-200)',
                                   fontFamily: 'Inter, system-ui, sans-serif'
                               }}>
                                {description}
                            </p>
                        </div>
                    </div>
                    
                    <motion.div 
                        className="neumo-icon w-12 h-12 text-2xl"
                        style={{ 
                            color: 'var(--accent-100)',
                            background: 'var(--bg-200)',
                            boxShadow: 'var(--shadow-neumorphic)',
                            borderRadius: '16px'
                        }}
                        whileHover={{
                            scale: 1.1,
                            x: 8,
                            rotate: 45,
                            transition: { duration: 0.2 }
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = 'var(--shadow-neumorphic-glow)';
                            e.currentTarget.style.background = `linear-gradient(135deg, var(--accent-100), var(--accent-200))`;
                            e.currentTarget.style.color = 'var(--color-button-text)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = 'var(--shadow-neumorphic)';
                            e.currentTarget.style.background = 'var(--bg-200)';
                            e.currentTarget.style.color = 'var(--accent-100)';
                        }}
                    >
                        <FaArrowRight />
                    </motion.div>
                </div>
            )}
        </motion.div>
    );
};

export default NavigationCard;