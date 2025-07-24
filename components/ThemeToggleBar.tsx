'use client';

import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ThemeToggleBar = () => {
    const [isDark, setIsDark] = useState(true);
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
        
        // Only run on client side after component is mounted
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme) {
            setIsDark(savedTheme === 'dark');
        } else {
            setIsDark(prefersDark);
        }
    }, []);

    useEffect(() => {
        if (!mounted) return;
        
        const htmlElement = document.documentElement;
        const theme = isDark ? 'dark' : 'light';
        
        if (isDark) {
            htmlElement.removeAttribute('data-theme');
        } else {
            htmlElement.setAttribute('data-theme', 'light');
        }
        
        localStorage.setItem('theme', theme);
    }, [isDark, mounted]);

    // Don't render until mounted to prevent hydration mismatch
    if (!mounted) {
        return null;
    }

    const toggleToLight = () => {
        setIsDark(false);
    };

    const toggleToDark = () => {
        setIsDark(true);
    };

    return (
        <motion.div 
            className="fixed-bars top-0 left-0 right-0 z-50 hide-mobile"
            style={{
                background: isDark 
                    ? 'linear-gradient(145deg, #2A2A2F 0%, #1F1F23 50%, #121214 100%)'
                    : 'linear-gradient(145deg, #FFFFFF 0%, #F8F9FA 50%, #F0F0F0 100%)',
                backdropFilter: 'blur(25px)',
                borderBottom: isDark ? '3px solid #C6A700' : '3px solid #C6A700',
                borderRadius: '0 0 24px 24px',
                boxShadow: isDark 
                    ? `
                        16px 16px 32px rgba(0, 0, 0, 0.95),
                        -16px -16px 32px rgba(120, 120, 125, 0.6),
                        inset 0 0 0 2px rgba(198, 167, 0, 0.15),
                        0 0 0 1px rgba(80, 80, 85, 0.3)
                    `
                    : `
                        12px 12px 24px rgba(163, 177, 198, 0.6),
                        -12px -12px 24px rgba(255, 255, 255, 0.9),
                        inset 0 0 0 2px rgba(198, 167, 0, 0.15),
                        0 0 20px rgba(198, 167, 0, 0.3)
                    `,
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                border: isDark ? '2px solid rgba(120, 120, 125, 0.5)' : '2px solid rgba(198, 167, 0, 0.3)'
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-[90%] mx-auto py-4 px-6 flex justify-between items-center">
                
                <motion.button
                    onClick={toggleToLight}
                    title="Cambiar a modo claro"
                    className="relative overflow-hidden group"
                    style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '18px',
                        background: !isDark 
                            ? 'linear-gradient(135deg, #C6A700, #50C878)' 
                            : isDark 
                                ? 'linear-gradient(145deg, #2A2A2F 0%, #1F1F23 50%, #121214 100%)'
                                : 'linear-gradient(145deg, #F8F9FA 0%, #FFFFFF 50%, #F0F0F0 100%)',
                        color: !isDark ? '#1C1C1E' : isDark ? '#C6A700' : '#666666',
                        boxShadow: !isDark 
                            ? '0 0 30px rgba(198, 167, 0, 0.6), 16px 16px 32px rgba(0, 0, 0, 0.95), -16px -16px 32px rgba(120, 120, 125, 0.6)'
                            : isDark 
                                ? '12px 12px 20px rgba(0, 0, 0, 0.9), -12px -12px 20px rgba(100, 100, 105, 0.4)'
                                : '8px 8px 16px rgba(163, 177, 198, 0.6), -8px -8px 16px rgba(255, 255, 255, 0.9)',
                        border: !isDark 
                            ? '2px solid rgba(198, 167, 0, 0.8)' 
                            : isDark 
                                ? '2px solid rgba(120, 120, 125, 0.4)'
                                : '2px solid rgba(198, 167, 0, 0.3)',
                        transition: 'all 0.3s ease'
                    }}
                    whileHover={{ 
                        scale: 1.1,
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.9 }}
                    onMouseEnter={(e) => {
                        if (!isDark) {
                            e.currentTarget.style.boxShadow = '0 0 40px rgba(198, 167, 0, 0.8), 20px 20px 40px rgba(0, 0, 0, 0.98), -20px -20px 40px rgba(140, 140, 145, 0.8)';
                            e.currentTarget.style.transform = 'scale(1.15) translateY(-3px)';
                        } else {
                            e.currentTarget.style.boxShadow = '0 0 30px rgba(198, 167, 0, 0.6), 16px 16px 32px rgba(0, 0, 0, 0.95), -16px -16px 32px rgba(120, 120, 125, 0.6)';
                            e.currentTarget.style.background = 'linear-gradient(135deg, #C6A700, #50C878)';
                            e.currentTarget.style.color = '#1C1C1E';
                            e.currentTarget.style.borderColor = 'rgba(198, 167, 0, 0.8)';
                        }
                    }}
                    onMouseLeave={(e) => {
                        if (!isDark) {
                            e.currentTarget.style.boxShadow = '0 0 30px rgba(198, 167, 0, 0.6), 16px 16px 32px rgba(0, 0, 0, 0.95), -16px -16px 32px rgba(120, 120, 125, 0.6)';
                            e.currentTarget.style.transform = 'scale(1) translateY(0px)';
                        } else {
                            e.currentTarget.style.boxShadow = isDark 
                                ? '12px 12px 20px rgba(0, 0, 0, 0.9), -12px -12px 20px rgba(100, 100, 105, 0.4)'
                                : '8px 8px 16px rgba(163, 177, 198, 0.6), -8px -8px 16px rgba(255, 255, 255, 0.9)';
                            e.currentTarget.style.background = isDark 
                                ? 'linear-gradient(145deg, #2A2A2F 0%, #1F1F23 50%, #121214 100%)'
                                : 'linear-gradient(145deg, #F8F9FA 0%, #FFFFFF 50%, #F0F0F0 100%)';
                            e.currentTarget.style.color = isDark ? '#C6A700' : '#666666';
                            e.currentTarget.style.borderColor = isDark ? 'rgba(120, 120, 125, 0.4)' : 'rgba(198, 167, 0, 0.3)';
                        }
                    }}
                >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-[16px]"
                         style={{ background: 'linear-gradient(45deg, #C6A700, #50C878)' }}
                    />
                    <motion.div
                        className="relative z-10"
                        animate={!isDark ? { 
                            rotate: [0, 360],
                            scale: [1, 1.2, 1]
                        } : {}}
                        transition={!isDark ? { 
                            duration: 2, 
                            repeat: Infinity,
                            ease: "easeInOut"
                        } : {}}
                    >
                        <FaSun className="text-2xl" />
                    </motion.div>
                </motion.button>

                {/* Indicador Central */}
                <motion.div
                    className="px-4 py-2 rounded-xl text-center relative overflow-hidden"
                    style={{
                        background: isDark 
                            ? 'linear-gradient(145deg, #2A2A2F 0%, #1F1F23 50%, #121214 100%)'
                            : 'linear-gradient(145deg, #F8F9FA 0%, #FFFFFF 50%, #F0F0F0 100%)',
                        boxShadow: isDark 
                            ? `
                                inset 12px 12px 24px rgba(0, 0, 0, 0.8),
                                inset -12px -12px 24px rgba(80, 80, 85, 0.4),
                                0 0 0 2px rgba(198, 167, 0, 0.2),
                                0 0 20px rgba(198, 167, 0, 0.1)
                            `
                            : `
                                inset 8px 8px 16px rgba(163, 177, 198, 0.6),
                                inset -8px -8px 16px rgba(255, 255, 255, 0.9),
                                0 0 0 2px rgba(198, 167, 0, 0.3),
                                0 0 15px rgba(198, 167, 0, 0.2)
                            `,
                        minWidth: '100px',
                        border: isDark ? '2px solid rgba(120, 120, 125, 0.3)' : '2px solid rgba(198, 167, 0, 0.4)',
                        transition: 'all 0.3s ease'
                    }}
                    animate={{
                        scale: [1, 1.02, 1],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = isDark 
                            ? `
                                inset 12px 12px 24px rgba(0, 0, 0, 0.9),
                                inset -12px -12px 24px rgba(100, 100, 105, 0.6),
                                0 0 0 3px rgba(198, 167, 0, 0.4),
                                0 0 30px rgba(198, 167, 0, 0.3)
                            `
                            : `
                                inset 8px 8px 16px rgba(163, 177, 198, 0.8),
                                inset -8px -8px 16px rgba(255, 255, 255, 1),
                                0 0 0 3px rgba(198, 167, 0, 0.5),
                                0 0 25px rgba(198, 167, 0, 0.4)
                            `;
                        e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = isDark 
                            ? `
                                inset 12px 12px 24px rgba(0, 0, 0, 0.8),
                                inset -12px -12px 24px rgba(80, 80, 85, 0.4),
                                0 0 0 2px rgba(198, 167, 0, 0.2),
                                0 0 20px rgba(198, 167, 0, 0.1)
                            `
                            : `
                                inset 8px 8px 16px rgba(163, 177, 198, 0.6),
                                inset -8px -8px 16px rgba(255, 255, 255, 0.9),
                                0 0 0 2px rgba(198, 167, 0, 0.3),
                                0 0 15px rgba(198, 167, 0, 0.2)
                            `;
                        e.currentTarget.style.transform = 'scale(1)';
                    }}
                >
                    <motion.div
                        className="flex items-center justify-center space-x-2"
                        key={isDark ? 'dark' : 'light'}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div 
                            className="w-3 h-3 rounded-full relative"
                            style={{ 
                                background: isDark 
                                    ? 'linear-gradient(135deg, #C6A700, #50C878)' 
                                    : 'linear-gradient(135deg, #FF6B35, #F7931E)',
                                boxShadow: isDark 
                                    ? '0 0 15px rgba(198, 167, 0, 0.8), 0 0 30px rgba(80, 200, 120, 0.4)'
                                    : '0 0 15px rgba(255, 107, 53, 0.8), 0 0 30px rgba(247, 147, 30, 0.4)',
                                animation: 'pulse 2s infinite'
                            }}
                        />
                        <span 
                            className="text-sm font-semibold"
                            style={{ 
                                color: isDark ? '#C6A700' : '#666666',
                                textShadow: isDark ? '0 0 10px rgba(198, 167, 0, 0.5)' : '0 0 5px rgba(102, 102, 102, 0.3)',
                                fontWeight: '700'
                            }}
                        >
                            {isDark ? 'Oscuro' : 'Claro'}
                        </span>
                    </motion.div>
                </motion.div>
                
                <motion.button
                    onClick={toggleToDark}
                    title="Cambiar a modo oscuro"
                    className="relative overflow-hidden group"
                    style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '18px',
                        background: isDark 
                            ? 'linear-gradient(135deg, #C6A700, #50C878)' 
                            : 'linear-gradient(145deg, #F8F9FA 0%, #FFFFFF 50%, #F0F0F0 100%)',
                        color: isDark ? '#1C1C1E' : '#666666',
                        boxShadow: isDark 
                            ? '0 0 30px rgba(198, 167, 0, 0.6), 16px 16px 32px rgba(0, 0, 0, 0.95), -16px -16px 32px rgba(120, 120, 125, 0.6)'
                            : '8px 8px 16px rgba(163, 177, 198, 0.6), -8px -8px 16px rgba(255, 255, 255, 0.9)',
                        border: isDark ? '2px solid rgba(198, 167, 0, 0.8)' : '2px solid rgba(198, 167, 0, 0.3)',
                        transition: 'all 0.3s ease'
                    }}
                    whileHover={{ 
                        scale: 1.1,
                        rotate: [0, 10, -10, 0],
                        transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.9 }}
                    onMouseEnter={(e) => {
                        if (isDark) {
                            e.currentTarget.style.boxShadow = '0 0 40px rgba(198, 167, 0, 0.8), 20px 20px 40px rgba(0, 0, 0, 0.98), -20px -20px 40px rgba(140, 140, 145, 0.8)';
                            e.currentTarget.style.transform = 'scale(1.15) translateY(-3px)';
                        } else {
                            e.currentTarget.style.boxShadow = '0 0 30px rgba(198, 167, 0, 0.6), 16px 16px 32px rgba(0, 0, 0, 0.95), -16px -16px 32px rgba(120, 120, 125, 0.6)';
                            e.currentTarget.style.background = 'linear-gradient(135deg, #C6A700, #50C878)';
                            e.currentTarget.style.color = '#1C1C1E';
                            e.currentTarget.style.borderColor = 'rgba(198, 167, 0, 0.8)';
                        }
                    }}
                    onMouseLeave={(e) => {
                        if (isDark) {
                            e.currentTarget.style.boxShadow = '0 0 30px rgba(198, 167, 0, 0.6), 16px 16px 32px rgba(0, 0, 0, 0.95), -16px -16px 32px rgba(120, 120, 125, 0.6)';
                            e.currentTarget.style.transform = 'scale(1) translateY(0px)';
                        } else {
                            e.currentTarget.style.boxShadow = '8px 8px 16px rgba(163, 177, 198, 0.6), -8px -8px 16px rgba(255, 255, 255, 0.9)';
                            e.currentTarget.style.background = 'linear-gradient(145deg, #F8F9FA 0%, #FFFFFF 50%, #F0F0F0 100%)';
                            e.currentTarget.style.color = '#666666';
                            e.currentTarget.style.borderColor = 'rgba(198, 167, 0, 0.3)';
                        }
                    }}
                >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-[16px]"
                         style={{ background: 'linear-gradient(45deg, #C6A700, #50C878)' }}
                    />
                    <motion.div
                        className="relative z-10"
                        animate={isDark ? { 
                            rotate: [0, -15, 15, -15, 0],
                            scale: [1, 1.1, 1]
                        } : {}}
                        transition={isDark ? { 
                            duration: 3, 
                            repeat: Infinity,
                            ease: "easeInOut"
                        } : {}}
                    >
                        <FaMoon className="text-2xl" />
                    </motion.div>
                </motion.button>
            </div>
        </motion.div>
    );
};

export default ThemeToggleBar;