'use client';

import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const SlideControls = ({ onSlideChange }) => {
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
            >
                <FaChevronRight className="text-sm" />
            </button>
        </div>
    );
};

export default SlideControls;