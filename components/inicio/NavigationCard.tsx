'use client';

import React from 'react';
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
    const getIcon = () => {
        const iconProps = {
            className: layout === 'vertical' ? 'text-5xl' : 'text-4xl',
            style: { color: 'var(--primary-100)' }
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
            className={`${className} border rounded-xl p-6 cursor-pointer group relative overflow-hidden`}
            style={{
                background: 'color-mix(in srgb, var(--primary-100) 8%, transparent)',
                borderColor: 'color-mix(in srgb, var(--primary-100) 20%, transparent)',
                backdropFilter: 'blur(20px)'
            }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay }}
            onClick={onClick}
            onMouseEnter={(e) => {
                e.currentTarget.style.background = 'color-mix(in srgb, var(--primary-100) 12%, transparent)';
                e.currentTarget.style.borderColor = 'color-mix(in srgb, var(--primary-100) 40%, transparent)';
                e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.background = 'color-mix(in srgb, var(--primary-100) 8%, transparent)';
                e.currentTarget.style.borderColor = 'color-mix(in srgb, var(--primary-100) 20%, transparent)';
                e.currentTarget.style.transform = 'translateY(0)';
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            {layout === 'vertical' ? (
                
                <div className="flex flex-col justify-center h-full text-center">
                    <div className="transition-transform duration-300 group-hover:scale-110 mb-4">
                        {getIcon()}
                    </div>
                    <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--primary-100)' }}>
                        {title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-4" 
                       style={{ 
                           color: 'var(--text-200)',
                           fontFamily: 'Inter, system-ui, sans-serif'
                       }}>
                        {description}
                    </p>
                    <div className="flex items-center justify-center">
                        <span className="text-sm mr-2" style={{ color: 'var(--primary-100)' }}>{actionText}</span>
                        <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" 
                                     style={{ color: 'var(--primary-100)' }} />
                    </div>
                </div>
            ) : (
                
                <div className="flex items-center justify-between h-full">
                    <div className="flex items-center">
                        <div className="transition-transform duration-300 group-hover:scale-110 mr-4">
                            {getIcon()}
                        </div>
                        <div>
                            <h3 className={`font-bold mb-2 ${layout === 'horizontal' ? 'text-2xl' : 'text-xl'}`} 
                                style={{ color: 'var(--primary-100)' }}>
                                {title}
                            </h3>
                            <p className="text-base" 
                               style={{ 
                                   color: 'var(--text-200)',
                                   fontFamily: 'Inter, system-ui, sans-serif'
                               }}>
                                {description}
                            </p>
                        </div>
                    </div>
                    <FaArrowRight className="text-2xl transition-transform duration-300 group-hover:translate-x-2" 
                                 style={{ color: 'var(--primary-100)' }} />
                </div>
            )}
        </motion.div>
    );
};

export default NavigationCard;