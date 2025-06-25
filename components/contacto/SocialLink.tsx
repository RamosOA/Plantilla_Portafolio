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
                    background: 'color-mix(in srgb, var(--primary-100) 8%, transparent)',
                    border: '1px solid color-mix(in srgb, var(--primary-100) 20%, transparent)'
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'color-mix(in srgb, var(--primary-100) 15%, transparent)';
                    e.currentTarget.style.borderColor = 'color-mix(in srgb, var(--primary-100) 40%, transparent)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'color-mix(in srgb, var(--primary-100) 8%, transparent)';
                    e.currentTarget.style.borderColor = 'color-mix(in srgb, var(--primary-100) 20%, transparent)';
                }}
            >
                <IconComponent 
                    className="text-2xl group-hover:scale-110 transition-all duration-300" 
                    style={{ 
                        color: link.color,
                        filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))',
                        fontWeight: 'bold'
                    }}
                />
                <div className="flex-1 min-w-0">
                    <div 
                        className="text-sm font-medium transition-colors duration-300" 
                        style={{ color: 'var(--text-100)' }}
                    >
                        {link.name}
                    </div>
                    <div 
                        className="text-xs truncate transition-colors duration-300" 
                        style={{ color: 'var(--text-200)' }}
                    >
                        {link.info}
                    </div>
                </div>
            </motion.a>
        </motion.div>
    );
};

export default SocialLink;