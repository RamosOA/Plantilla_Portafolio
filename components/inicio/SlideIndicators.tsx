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
    isDarkMode: boolean;
}

const SlideIndicators: React.FC<SlideIndicatorsProps> = ({ slides, currentSlide, onSlideChange, isDarkMode }) => {
    return (
        <div className="flex justify-center gap-2 mt-4">
            {slides.map((_, index: number) => (
                <button
                    key={index}
                    onClick={() => onSlideChange(index)}
                    className="w-3 h-3 rounded-full transition-all duration-300"
                    style={{
                        background: index === currentSlide 
                            ? (isDarkMode 
                                ? 'linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)'
                                : 'linear-gradient(135deg, #374151 0%, #1f2937 100%)')
                            : (isDarkMode 
                                ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)'
                                : 'linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)'),
                        border: index === currentSlide 
                            ? (isDarkMode ? '1px solid #ffd700' : '1px solid #374151')
                            : (isDarkMode ? '1px solid #444' : '1px solid #94a3b8'),
                        boxShadow: index === currentSlide 
                            ? (isDarkMode 
                                ? '0 0 10px rgba(255, 215, 0, 0.5), inset 2px 2px 4px #0a0a1a, inset -2px -2px 4px #2a2a3e'
                                : '0 2px 8px rgba(0, 0, 0, 0.2), inset 2px 2px 4px #d1d5db, inset -2px -2px 4px #ffffff')
                            : (isDarkMode 
                                ? 'inset 2px 2px 4px #0a0a1a, inset -2px -2px 4px #2a2a3e'
                                : 'inset 2px 2px 4px #d1d5db, inset -2px -2px 4px #ffffff'),
                        transform: index === currentSlide ? 'scale(1.2)' : 'scale(1)'
                    }}
                    title={`Ir al slide ${index + 1}`}
                    aria-label={`Indicador del slide ${index + 1}`}
                />
            ))}
        </div>
    );
};

export default SlideIndicators;