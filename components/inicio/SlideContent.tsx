'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SlideData {
    name?: string;
    title: string;
    subtitle?: string;
    description?: string;
    highlight?: string;
}

interface SlideContentProps {
    slides: SlideData[];
    titles: string[];
    currentSlide: number;
    currentTitleIndex: number;
    isSlideHovered: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    presentacionScrollRef: React.RefObject<HTMLDivElement>;
}

const SlideContent: React.FC<SlideContentProps> = ({
    slides,
    titles,
    currentSlide,
    currentTitleIndex,
    isSlideHovered,
    onMouseEnter,
    onMouseLeave,
    presentacionScrollRef
}) => {

    
    useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
            .slide-scroll-custom::-webkit-scrollbar {
                width: 6px;
            }
            .slide-scroll-custom::-webkit-scrollbar-track {
                background: color-mix(in srgb, var(--primary-100) 5%, transparent);
                border-radius: 3px;
            }
            .slide-scroll-custom::-webkit-scrollbar-thumb {
                background: color-mix(in srgb, var(--primary-100) 20%, transparent);
                border-radius: 3px;
            }
            .slide-scroll-custom::-webkit-scrollbar-thumb:hover {
                background: color-mix(in srgb, var(--primary-100) 35%, transparent);
            }
        `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    const handleSlideWheel = (e: React.WheelEvent<HTMLDivElement>) => {
        const container = e.currentTarget;
        const { scrollTop, scrollHeight, clientHeight } = container;
        
        e.preventDefault();
        e.stopPropagation();
        
        if (scrollHeight > clientHeight) {
            const isAtTop = scrollTop === 0;
            const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
            
            if (e.deltaY > 0 && !isAtBottom) {
                container.scrollTop += e.deltaY;
            }
            else if (e.deltaY < 0 && !isAtTop) {
                container.scrollTop += e.deltaY;
            }
        }
    };

    return (
        <div 
            ref={presentacionScrollRef}
            className="flex-1 overflow-hidden pr-2"
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="h-full flex flex-col justify-center"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    
                    {currentSlide === 0 ? (
                        <>
                            <motion.h1
                                className="text-4xl font-bold mb-4"
                                style={{ 
                                    color: 'var(--text-100)',
                                    fontFamily: 'Inter, system-ui, sans-serif',
                                    fontWeight: '700',
                                    lineHeight: '1.2'
                                }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                {slides[currentSlide].name}
                            </motion.h1>

                            <div className="h-16 flex items-center overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.h2
                                        key={`title-${currentTitleIndex}`}
                                        className="text-2xl font-semibold"
                                        style={{ 
                                            color: 'var(--primary-100)',
                                            fontFamily: 'Inter, system-ui, sans-serif',
                                            fontWeight: '600'
                                        }}
                                        initial={{ opacity: 0, y: -30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 30 }}
                                        transition={{ 
                                            duration: 0.7,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        {titles[currentTitleIndex]}
                                    </motion.h2>
                                </AnimatePresence>
                            </div>
                        </>
                    ) : (
                        
                        <div className="h-full relative">
                            
                            {isSlideHovered && (
                                <motion.div 
                                    className="absolute top-2 right-2 z-20 px-2 py-1 rounded-full text-xs font-medium"
                                    style={{
                                        background: 'color-mix(in srgb, var(--primary-100) 20%, transparent)',
                                        color: 'var(--primary-100)',
                                        border: '1px solid color-mix(in srgb, var(--primary-100) 30%, transparent)'
                                    }}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                >
                                    ⏸ Pausado
                                </motion.div>
                            )}

                            
                            <div 
                                className="h-full overflow-y-auto slide-scroll-custom pr-2"
                                onWheel={handleSlideWheel}
                            >
                                <div className="py-2">
                                    <motion.h1
                                        className="text-3xl font-bold mb-4"
                                        style={{ 
                                            color: 'var(--text-100)',
                                            fontFamily: 'Inter, system-ui, sans-serif',
                                            fontWeight: '700'
                                        }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        {slides[currentSlide].title}
                                    </motion.h1>

                                    <motion.h2
                                        className="text-xl font-semibold mb-6"
                                        style={{ 
                                            color: 'var(--primary-100)',
                                            fontFamily: 'Inter, system-ui, sans-serif',
                                            fontWeight: '600'
                                        }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        {slides[currentSlide].subtitle}
                                    </motion.h2>

                                    <motion.p
                                        className="text-base leading-relaxed mb-6"
                                        style={{ 
                                            color: 'var(--text-200)',
                                            fontFamily: 'Inter, system-ui, sans-serif',
                                            fontWeight: '400',
                                            lineHeight: '1.6',
                                            letterSpacing: '0.01em'
                                        }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        {slides[currentSlide].description}
                                    </motion.p>

                                    <motion.div 
                                        className="flex items-center mb-6"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        <div 
                                            className="w-8 h-px mr-3"
                                            style={{ backgroundColor: 'var(--primary-100)' }}
                                        />
                                        <span 
                                            className="text-sm font-medium"
                                            style={{ 
                                                color: 'var(--primary-100)',
                                                fontFamily: 'Inter, system-ui, sans-serif',
                                                fontWeight: '500'
                                            }}
                                        >
                                            {slides[currentSlide].highlight}
                                        </span>
                                    </motion.div>

                                    
                                    <motion.div 
                                        className="space-y-4"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <div 
                                            className="pt-4"
                                            style={{ borderTop: '1px solid color-mix(in srgb, var(--primary-100) 20%, transparent)' }}
                                        >
                                            <h4 className="text-lg font-semibold mb-3" style={{ color: 'var(--primary-100)' }}>
                                                Tecnologías Principales
                                            </h4>
                                            <p className="text-sm leading-relaxed mb-4" 
                                               style={{ 
                                                   color: 'var(--text-300)',
                                                   fontFamily: 'Inter, system-ui, sans-serif',
                                                   lineHeight: '1.5'
                                               }}>
                                                Especializado en React, Next.js, Node.js, TypeScript y bases de datos modernas. 
                                                Mi enfoque se centra en crear arquitecturas escalables y mantenibles.
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-semibold mb-3" style={{ color: 'var(--primary-100)' }}>
                                                Metodología de Trabajo
                                            </h4>
                                            <p className="text-sm leading-relaxed mb-4" 
                                               style={{ 
                                                   color: 'var(--text-300)',
                                                   fontFamily: 'Inter, system-ui, sans-serif',
                                                   lineHeight: '1.5'
                                               }}>
                                                Aplico metodologías ágiles, desarrollo orientado a pruebas (TDD) y principios 
                                                de clean code para garantizar la calidad del software.
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-semibold mb-3" style={{ color: 'var(--primary-100)' }}>
                                                Objetivos
                                            </h4>
                                            <p className="text-sm leading-relaxed" 
                                               style={{ 
                                                   color: 'var(--text-300)',
                                                   fontFamily: 'Inter, system-ui, sans-serif',
                                                   lineHeight: '1.5'
                                               }}>
                                                Mi objetivo es crear soluciones que no solo resuelvan problemas técnicos, 
                                                sino que también aporten valor real al negocio y mejoren la experiencia del usuario final.
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default SlideContent;