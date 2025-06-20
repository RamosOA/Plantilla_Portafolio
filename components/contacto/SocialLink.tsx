'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

interface SocialLinkProps {
    link: {
        name: string;
        icon: IconType;
        href: string;
        color: string;
        info: string;
    };
    index: number;
    delay: number;
}

const SocialLink: React.FC<SocialLinkProps> = ({ link, index, delay }) => {
    const IconComponent = link.icon;

    return (
        <motion.div
            className="mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay }}
        >
            <motion.a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 hover:scale-105 group"
                style={{
                    background: 'rgba(173, 153, 27, 0.08)',
                    border: '1px solid rgba(173, 153, 27, 0.2)'
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(173, 153, 27, 0.15)';
                    e.currentTarget.style.borderColor = 'rgba(173, 153, 27, 0.4)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(173, 153, 27, 0.08)';
                    e.currentTarget.style.borderColor = 'rgba(173, 153, 27, 0.2)';
                }}
            >
                <IconComponent 
                    className="text-2xl group-hover:scale-110 transition-transform duration-300" 
                    style={{ color: link.color }}
                />
                <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium" style={{ color: '#FFFFFF' }}>
                        {link.name}
                    </div>
                    <div className="text-xs truncate" style={{ color: '#e0e0e0' }}>
                        {link.info}
                    </div>
                </div>
            </motion.a>
        </motion.div>
    );
};

export default SocialLink;