'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ContactTitle: React.FC = () => {
    return (
        <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10">
            <div className="pt-20">
                <motion.h2 
                    className="text-4xl md:text-5xl font-bold transform -rotate-90 origin-center whitespace-nowrap transition-colors duration-300"
                    style={{ 
                        color: 'var(--primary-100)',
                        writingMode: 'vertical-lr',
                        textOrientation: 'mixed'
                    }}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    Contacto
                </motion.h2>
            </div>
        </div>
    );
};

export default ContactTitle;