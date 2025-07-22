'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TituloSeccionProps {
    titulo: string;
    delay?: number;
}

const TituloSeccion: React.FC<TituloSeccionProps> = ({ titulo, delay = 0.2 }) => {
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
        <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10">
            <div className="pt-20">
                <motion.h2 
                    className="text-4xl md:text-5xl font-bold transform -rotate-90 origin-center whitespace-nowrap"
                    style={{ 
                        color: isDark ? '#C6A700' : '#666666',
                        writingMode: 'vertical-lr',
                        textOrientation: 'mixed',
                        textShadow: isDark 
                            ? '0 0 20px rgba(198, 167, 0, 0.5), 0 0 40px rgba(198, 167, 0, 0.3)'
                            : '0 0 10px rgba(102, 102, 102, 0.3)',
                        fontWeight: '900',
                        letterSpacing: '3px'
                    }}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay }}
                    whileHover={{
                        scale: 1.05,
                        textShadow: isDark 
                            ? '0 0 30px rgba(198, 167, 0, 0.8), 0 0 60px rgba(198, 167, 0, 0.5)'
                            : '0 0 15px rgba(102, 102, 102, 0.5)',
                        transition: { duration: 0.3 }
                    }}
                >
                    {titulo}
                </motion.h2>
            </div>
        </div>
    );
};

export default TituloSeccion;