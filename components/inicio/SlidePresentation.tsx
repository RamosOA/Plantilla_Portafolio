'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import SlideContent from './SlideContent';
import SlideControls from './SlideControls';
import SlideIndicators from './SlideIndicators';

interface SlideData {
    name?: string;
    title: string;
    subtitle?: string;
    description?: string;
    highlight?: string;
}

interface SlidePresentationProps {
    className: string;
    delay?: number;
}

const SlidePresentation: React.FC<SlidePresentationProps> = ({ className, delay = 0 }) => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [currentTitleIndex, setCurrentTitleIndex] = useState<number>(0);
    const [isSlideHovered, setIsSlideHovered] = useState<boolean>(false);
    const presentacionScrollRef = useRef<HTMLDivElement>(null);

    const slides: SlideData[] = [
        {
            name: "[Tu Nombre]",
            title: "Desarrollador Full Stack"
        },
        {
            title: "Bienvenido a mi portafolio",
            subtitle: "Creador de Experiencias Digitales",
            description: "Con experiencia en desarrollo frontend y backend, construyo aplicaciones web modernas que combinan diseño atractivo con funcionalidad robusta para ofrecer la mejor experiencia de usuario.",
            highlight: "Innovación en cada línea"
        }
    ];

    const titles: string[] = ["Desarrollador Full Stack", "Programador Móvil en Curso"];

    
    useEffect(() => {
        const slideInterval = setInterval(() => {
            if (!isSlideHovered) {
                setCurrentSlide((prev) => (prev + 1) % 2);
            }
        }, 8000);
        return () => clearInterval(slideInterval);
    }, [isSlideHovered]);

    
    useEffect(() => {
        const titleInterval = setInterval(() => {
            setCurrentTitleIndex((prev) => (prev === 0 ? 1 : 0));
        }, 3000);
        return () => clearInterval(titleInterval);
    }, []);

    const handleSlideChange = (newSlide: number) => {
        setCurrentSlide(newSlide);
        setIsSlideHovered(false);
    };

    const handleSlideMouseEnter = () => {
        if (currentSlide === 1) {
            setIsSlideHovered(true);
        }
    };

    const handleSlideMouseLeave = () => {
        setIsSlideHovered(false);
    };

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const checkDarkMode = () => {
            const theme = (document.documentElement.getAttribute('data-theme') || '').toLowerCase();
            setIsDarkMode(theme === 'dark');
        };

        checkDarkMode();
        
        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme']
        });

        return () => observer.disconnect();
    }, []);

    return (
        <motion.div
            className={`${className} rounded-xl p-6 flex flex-col overflow-hidden cursor-default relative group`}
            style={{
                background: isDarkMode 
                    ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
                    : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)',
                border: isDarkMode 
                    ? '2px solid #ffd700'
                    : '2px solid #94a3b8',
                boxShadow: isDarkMode 
                    ? 'inset 8px 8px 16px #0a0a1a, inset -8px -8px 16px #2a2a3e, 0 0 30px rgba(255, 215, 0, 0.3)'
                    : 'inset 8px 8px 16px #d1d5db, inset -8px -8px 16px #ffffff, 0 4px 20px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(20px)',
                transition: 'all 0.3s ease'
            }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay }}
            onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = isDarkMode 
                    ? 'inset 12px 12px 24px #0a0a1a, inset -12px -12px 24px #2a2a3e, 0 0 50px rgba(255, 215, 0, 0.5), 0 8px 32px rgba(255, 215, 0, 0.2)'
                    : 'inset 12px 12px 24px #d1d5db, inset -12px -12px 24px #ffffff, 0 8px 32px rgba(0, 0, 0, 0.15)';
                e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = isDarkMode 
                    ? 'inset 8px 8px 16px #0a0a1a, inset -8px -8px 16px #2a2a3e, 0 0 30px rgba(255, 215, 0, 0.3)'
                    : 'inset 8px 8px 16px #d1d5db, inset -8px -8px 16px #ffffff, 0 4px 20px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
            }}
        >
            
            <SlideControls onSlideChange={handleSlideChange} isDarkMode={isDarkMode} />

            
            <SlideContent
                slides={slides}
                titles={titles}
                currentSlide={currentSlide}
                currentTitleIndex={currentTitleIndex}
                isSlideHovered={isSlideHovered}
                onMouseEnter={handleSlideMouseEnter}
                onMouseLeave={handleSlideMouseLeave}
                presentacionScrollRef={presentacionScrollRef}
                isDarkMode={isDarkMode}
            />

            
            <div suppressHydrationWarning={true}>
                <SlideIndicators 
                    slides={slides}
                    currentSlide={currentSlide}
                    onSlideChange={handleSlideChange}
                    isDarkMode={isDarkMode}
                />
            </div>
        </motion.div>
    );
};

export default SlidePresentation;