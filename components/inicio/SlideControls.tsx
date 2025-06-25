'use client';

import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface SlideControlsProps {
    onSlideChange: (slideIndex: number) => void;
}

const SlideControls: React.FC<SlideControlsProps> = ({ onSlideChange }) => {
    return (
        <div className="absolute top-4 right-4 flex gap-2 z-20">
            <button
                onClick={() => onSlideChange(0)}
                className="p-2 rounded-full transition-all duration-300 hover:scale-110"
                style={{
                    background: 'rgba(173, 153, 27, 0.1)',
                    borderColor: 'rgba(173, 153, 27, 0.3)',
                    color: '#AD991B'
                }}
                title="Slide anterior"
                aria-label="Ir al slide anterior"
            >
                <FaChevronLeft className="text-sm" />
            </button>
            <button
                onClick={() => onSlideChange(1)}
                className="p-2 rounded-full transition-all duration-300 hover:scale-110"
                style={{
                    background: 'rgba(173, 153, 27, 0.1)',
                    borderColor: 'rgba(173, 153, 27, 0.3)',
                    color: '#AD991B'
                }}
                title="Slide siguiente"
                aria-label="Ir al slide siguiente"
            >
                <FaChevronRight className="text-sm" />
            </button>
        </div>
    );
};

export default SlideControls;