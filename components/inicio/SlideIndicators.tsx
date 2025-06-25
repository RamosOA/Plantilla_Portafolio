'use client';

import React from 'react';

interface SlideData {
    name?: string;
    title: string;
    subtitle?: string;
    description?: string;
    highlight?: string;
}

interface SlideIndicatorsProps {
    slides: SlideData[];
    currentSlide: number;
    onSlideChange: (slideIndex: number) => void;
}

const SlideIndicators: React.FC<SlideIndicatorsProps> = ({ slides, currentSlide, onSlideChange }) => {
    return (
        <div className="flex justify-center gap-2 mt-4">
            {slides.map((_, index: number) => (
                <button
                    key={index}
                    onClick={() => onSlideChange(index)}
                    className="w-2 h-2 rounded-full transition-all duration-300"
                    style={{
                        backgroundColor: index === currentSlide 
                            ? '#AD991B' 
                            : 'rgba(173, 153, 27, 0.3)'
                    }}
                    title={`Ir al slide ${index + 1}`}
                    aria-label={`Indicador del slide ${index + 1}`}
                />
            ))}
        </div>
    );
};

export default SlideIndicators;