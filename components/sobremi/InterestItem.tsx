'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface InterestItemProps {
    interest: string;
    index: number;
    delay: number;
}

const InterestItem: React.FC<InterestItemProps> = ({ interest, index, delay }) => {
    return (
        <motion.div
            className="px-4 py-3 rounded-lg text-center border transition-all duration-300 hover:scale-105 flex items-center justify-center"
            style={{
                background: 'color-mix(in srgb, var(--primary-100) 10%, transparent)',
                borderColor: 'color-mix(in srgb, var(--primary-100) 30%, transparent)',
                color: 'var(--text-200)'
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: delay + index * 0.1 }}
            whileHover={{
                background: 'color-mix(in srgb, var(--primary-100) 20%, transparent)',
                borderColor: 'color-mix(in srgb, var(--primary-100) 50%, transparent)'
            }}
        >
            <span className="text-sm font-medium text-center leading-tight">{interest}</span>
        </motion.div>
    );
};

export default InterestItem;
