'use client';

import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface SlideControlsProps {
    onSlideChange: (slideIndex: number) => void;
    isDarkMode: boolean;
}

const SlideControls: React.FC<SlideControlsProps> = ({ onSlideChange, isDarkMode }) => {
    const buttonBaseStyle = {
        background: isDarkMode 
            ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
            : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)',
        border: isDarkMode 
            ? '2px solid #ffd700'
            : '2px solid #94a3b8',
        color: isDarkMode ? '#ffd700' : '#374151',
        boxShadow: isDarkMode 
            ? 'inset 4px 4px 8px #0a0a1a, inset -4px -4px 8px #2a2a3e, 0 0 15px rgba(255, 215, 0, 0.3)'
            : 'inset 4px 4px 8px #d1d5db, inset -4px -4px 8px #ffffff, 0 2px 8px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease'
    };

    const buttonHoverStyle = {
        boxShadow: isDarkMode 
            ? 'inset 6px 6px 12px #0a0a1a, inset -6px -6px 12px #2a2a3e, 0 0 25px rgba(255, 215, 0, 0.5), 0 4px 16px rgba(255, 215, 0, 0.2)'
            : 'inset 6px 6px 12px #d1d5db, inset -6px -6px 12px #ffffff, 0 4px 16px rgba(0, 0, 0, 0.15)',
        transform: 'scale(1.05)'
    };

    return (
        <div className="absolute top-4 right-4 flex gap-2 z-20">
            <button
                onClick={() => onSlideChange(0)}
                className="p-2 rounded-full transition-all duration-300"
                style={buttonBaseStyle}
                title="Slide anterior"
                aria-label="Ir al slide anterior"
                onMouseEnter={(e) => {
                    Object.assign(e.currentTarget.style, buttonHoverStyle);
                }}
                onMouseLeave={(e) => {
                    Object.assign(e.currentTarget.style, buttonBaseStyle);
                }}
            >
                <FaChevronLeft className="text-sm" />
            </button>
            <button
                onClick={() => onSlideChange(1)}
                className="p-2 rounded-full transition-all duration-300"
                style={buttonBaseStyle}
                title="Slide siguiente"
                aria-label="Ir al slide siguiente"
                onMouseEnter={(e) => {
                    Object.assign(e.currentTarget.style, buttonHoverStyle);
                }}
                onMouseLeave={(e) => {
                    Object.assign(e.currentTarget.style, buttonBaseStyle);
                }}
            >
                <FaChevronRight className="text-sm" />
            </button>
        </div>
    );
};

export default SlideControls;