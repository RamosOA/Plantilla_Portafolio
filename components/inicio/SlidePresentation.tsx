'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
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
            name: "Oscar Ramos",
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

    return (
        <motion.div
            className={`${className} border rounded-xl p-6 flex flex-col overflow-hidden cursor-default relative group`}
            style={{
                background: 'color-mix(in srgb, var(--primary-100) 8%, transparent)',
                borderColor: 'color-mix(in srgb, var(--primary-100) 20%, transparent)',
                backdropFilter: 'blur(20px)'
            }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay }}
            onMouseEnter={(e) => {
                e.currentTarget.style.background = 'color-mix(in srgb, var(--primary-100) 12%, transparent)';
                e.currentTarget.style.borderColor = 'color-mix(in srgb, var(--primary-100) 40%, transparent)';
                e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.background = 'color-mix(in srgb, var(--primary-100) 8%, transparent)';
                e.currentTarget.style.borderColor = 'color-mix(in srgb, var(--primary-100) 20%, transparent)';
                e.currentTarget.style.transform = 'translateY(0)';
            }}
        >
            
            <SlideControls onSlideChange={handleSlideChange} />

            
            <SlideContent
                slides={slides}
                titles={titles}
                currentSlide={currentSlide}
                currentTitleIndex={currentTitleIndex}
                isSlideHovered={isSlideHovered}
                onMouseEnter={handleSlideMouseEnter}
                onMouseLeave={handleSlideMouseLeave}
                presentacionScrollRef={presentacionScrollRef}
            />

            
            <div suppressHydrationWarning={true}>
                <SlideIndicators 
                    slides={slides}
                    currentSlide={currentSlide}
                    onSlideChange={handleSlideChange}
                />
            </div>
        </motion.div>
    );
};

export default SlidePresentation;