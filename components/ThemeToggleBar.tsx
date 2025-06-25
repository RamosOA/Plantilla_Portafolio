'use client';

import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ThemeToggleBar = () => {
    const [isDark, setIsDark] = useState(true);

    
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme) {
            setIsDark(savedTheme === 'dark');
        } else {
            setIsDark(prefersDark);
        }
    }, []);

    
    useEffect(() => {
        const htmlElement = document.documentElement;
        const theme = isDark ? 'dark' : 'light';
        
        if (isDark) {
            htmlElement.removeAttribute('data-theme');
        } else {
            htmlElement.setAttribute('data-theme', 'light');
        }
        
        localStorage.setItem('theme', theme);
    }, [isDark]);

    const toggleToLight = () => {
        setIsDark(false);
    };

    const toggleToDark = () => {
        setIsDark(true);
    };

    return (
        <motion.div 
            className="fixed-bars top-0 left-0 right-0 z-50"
            style={{
                background: isDark 
                    ? 'rgba(60, 60, 60, 0.3)' 
                    : 'rgba(254, 255, 254, 0.9)',
                backdropFilter: 'blur(20px)',
                borderBottom: isDark 
                    ? '1px solid rgba(173, 153, 27, 0.2)'
                    : '1px solid rgba(196, 168, 52, 0.3)',
                transition: 'all 0.3s ease'
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-[90%] mx-auto py-4 px-6 flex justify-between items-center">
                
                <motion.button
                    onClick={toggleToLight}
                    title="Cambiar a modo claro"
                    className="p-3 rounded-full transition-all duration-300"
                    style={{
                        color: !isDark ? '#C4A834' : isDark ? 'rgba(224, 224, 224, 0.5)' : 'rgba(28, 28, 30, 0.5)',
                        background: !isDark ? 'rgba(196, 168, 52, 0.15)' : 'transparent',
                        border: `1px solid ${!isDark ? '#C4A834' : 'transparent'}`
                    }}
                    whileHover={{ 
                        scale: 1.1,
                        backgroundColor: !isDark ? 'rgba(196, 168, 52, 0.25)' : 'rgba(173, 153, 27, 0.1)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    onMouseEnter={(e) => {
                        if (isDark) {
                            e.currentTarget.style.color = '#e0e0e0';
                        }
                    }}
                    onMouseLeave={(e) => {
                        if (isDark) {
                            e.currentTarget.style.color = 'rgba(224, 224, 224, 0.5)';
                        }
                    }}
                >
                    <FaSun className="text-xl" />
                </motion.button>

                
                <motion.button
                    onClick={toggleToDark}
                    title="Cambiar a modo oscuro"
                    className="p-3 rounded-full transition-all duration-300"
                    style={{
                        color: isDark ? '#AD991B' : !isDark ? 'rgba(28, 28, 30, 0.5)' : 'rgba(224, 224, 224, 0.5)',
                        background: isDark ? 'rgba(173, 153, 27, 0.1)' : 'transparent',
                        border: `1px solid ${isDark ? '#AD991B' : 'transparent'}`
                    }}
                    whileHover={{ 
                        scale: 1.1,
                        backgroundColor: isDark ? 'rgba(173, 153, 27, 0.2)' : 'rgba(45, 90, 61, 0.1)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    onMouseEnter={(e) => {
                        if (!isDark) {
                            e.currentTarget.style.color = 'rgba(28, 28, 30, 0.8)';
                        }
                    }}
                    onMouseLeave={(e) => {
                        if (!isDark) {
                            e.currentTarget.style.color = 'rgba(28, 28, 30, 0.5)';
                        }
                    }}
                >
                    <FaMoon className="text-xl" />
                </motion.button>
            </div>
        </motion.div>
    );
};

export default ThemeToggleBar;