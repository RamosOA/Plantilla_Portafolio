'use client';

import { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ThemeToggleBar = () => {
    const [isDark, setIsDark] = useState(true);

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <motion.div 
            className="fixed-bars top-0 left-0 right-0 z-50"
            style={{
                background: 'rgba(189, 190, 192, 0.1)',
                backdropFilter: 'blur(20px)',
                borderBottom: '1px solid rgba(173, 153, 27, 0.2)'
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-[90%] mx-auto py-4 px-6 flex justify-between items-center">
                <button
                    onClick={toggleTheme}
                    title="Switch to light theme"
                    className="p-3 rounded-full transition-all duration-300 hover:scale-110"
                    style={{
                        color: !isDark ? '#AD991B' : 'rgba(224, 224, 224, 0.5)',
                        background: !isDark ? 'rgba(173, 153, 27, 0.1)' : 'transparent',
                        border: `1px solid ${!isDark ? '#AD991B' : 'transparent'}`
                    }}
                    onMouseEnter={(e) => {
                        if (isDark) {
                            e.currentTarget.style.color = '#e0e0e0';
                            e.currentTarget.style.background = 'rgba(173, 153, 27, 0.05)';
                        }
                    }}
                    onMouseLeave={(e) => {
                        if (isDark) {
                            e.currentTarget.style.color = 'rgba(224, 224, 224, 0.5)';
                            e.currentTarget.style.background = 'transparent';
                        }
                    }}
                >
                    <FaSun className="text-xl" />
                </button>

                <button
                    onClick={toggleTheme}
                    title="Switch to dark theme"
                    className="p-3 rounded-full transition-all duration-300 hover:scale-110"
                    style={{
                        color: isDark ? '#AD991B' : 'rgba(224, 224, 224, 0.5)',
                        background: isDark ? 'rgba(173, 153, 27, 0.1)' : 'transparent',
                        border: `1px solid ${isDark ? '#AD991B' : 'transparent'}`
                    }}
                    onMouseEnter={(e) => {
                        if (!isDark) {
                            e.currentTarget.style.color = '#e0e0e0';
                            e.currentTarget.style.background = 'rgba(173, 153, 27, 0.05)';
                        }
                    }}
                    onMouseLeave={(e) => {
                        if (!isDark) {
                            e.currentTarget.style.color = 'rgba(224, 224, 224, 0.5)';
                            e.currentTarget.style.background = 'transparent';
                        }
                    }}
                >
                    <FaMoon className="text-xl" />
                </button>
            </div>
        </motion.div>
    );
};

export default ThemeToggleBar;