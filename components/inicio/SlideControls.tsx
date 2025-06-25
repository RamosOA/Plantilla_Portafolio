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
                    background: 'color-mix(in srgb, var(--primary-100) 10%, transparent)',
                    borderColor: 'color-mix(in srgb, var(--primary-100) 30%, transparent)',
                    color: 'var(--primary-100)'
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
                    background: 'color-mix(in srgb, var(--primary-100) 10%, transparent)',
                    borderColor: 'color-mix(in srgb, var(--primary-100) 30%, transparent)',
                    color: 'var(--primary-100)'
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