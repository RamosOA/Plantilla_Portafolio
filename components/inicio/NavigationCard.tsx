'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaCogs, FaBriefcase, FaPhone, FaArrowRight } from 'react-icons/fa';

const NavigationCard = ({ 
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
            style: { color: '#AD991B' }
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
                background: 'rgba(173, 153, 27, 0.08)',
                borderColor: 'rgba(173, 153, 27, 0.2)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay }}
            onClick={onClick}
            onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(173, 153, 27, 0.12)';
                e.currentTarget.style.borderColor = 'rgba(173, 153, 27, 0.4)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(173, 153, 27, 0.15)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(173, 153, 27, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(173, 153, 27, 0.2)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            {layout === 'vertical' ? (
                /* Layout vertical */
                <div className="flex flex-col justify-center h-full text-center">
                    <div className="transition-transform duration-300 group-hover:scale-110 mb-4">
                        {getIcon()}
                    </div>
                    <h3 className="text-xl font-bold mb-3" style={{ color: '#ffffff' }}>
                        {title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-4" 
                       style={{ 
                           color: 'rgba(255, 255, 255, 0.7)',
                           fontFamily: 'Inter, system-ui, sans-serif'
                       }}>
                        {description}
                    </p>
                    <div className="flex items-center justify-center">
                        <span className="text-sm mr-2" style={{ color: '#AD991B' }}>{actionText}</span>
                        <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" 
                                     style={{ color: '#AD991B' }} />
                    </div>
                </div>
            ) : (
                /* Layout horizontal */
                <div className="flex items-center justify-between h-full">
                    <div className="flex items-center">
                        <div className="transition-transform duration-300 group-hover:scale-110 mr-4">
                            {getIcon()}
                        </div>
                        <div>
                            <h3 className={`font-bold mb-2 ${layout === 'horizontal' ? 'text-2xl' : 'text-xl'}`} 
                                style={{ color: '#ffffff' }}>
                                {title}
                            </h3>
                            <p className="text-base" 
                               style={{ 
                                   color: 'rgba(255, 255, 255, 0.7)',
                                   fontFamily: 'Inter, system-ui, sans-serif'
                               }}>
                                {description}
                            </p>
                        </div>
                    </div>
                    <FaArrowRight className="text-2xl transition-transform duration-300 group-hover:translate-x-2" 
                                 style={{ color: '#AD991B' }} />
                </div>
            )}
        </motion.div>
    );
};

export default NavigationCard;