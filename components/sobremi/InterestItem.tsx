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
                background: 'rgba(173, 153, 27, 0.1)',
                borderColor: 'rgba(173, 153, 27, 0.3)',
                color: '#ffffff'
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: delay + index * 0.1 }}
            whileHover={{
                background: 'rgba(173, 153, 27, 0.2)',
                borderColor: 'rgba(173, 153, 27, 0.5)'
            }}
        >
            <span className="text-sm font-medium text-center leading-tight">{interest}</span>
        </motion.div>
    );
};

export default InterestItem;
