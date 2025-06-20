'use client';

import React from 'react';

const SlideIndicators = ({ slides, currentSlide, onSlideChange }) => {
    return (
        <div className="flex justify-center gap-2 mt-4">
            {slides.map((_, index) => (
                <button
                    key={index}
                    onClick={() => onSlideChange(index)}
                    className="w-2 h-2 rounded-full transition-all duration-300"
                    style={{
                        backgroundColor: index === currentSlide 
                            ? '#AD991B' 
                            : 'rgba(173, 153, 27, 0.3)'
                    }}
                />
            ))}
        </div>
    );
};

export default SlideIndicators;