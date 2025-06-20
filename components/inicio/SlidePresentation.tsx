'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import SlideContent from './SlideContent';
import SlideControls from './SlideControls';
import SlideIndicators from './SlideIndicators';

const SlidePresentation = ({ className, delay = 0 }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
    const [isSlideHovered, setIsSlideHovered] = useState(false);
    const presentacionScrollRef = useRef(null);

    const slides = [
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

    const titles = ["Desarrollador Full Stack", "Programador Móvil en Curso"];

    // Auto-cambio de slides con pausa
    useEffect(() => {
        const slideInterval = setInterval(() => {
            if (!isSlideHovered) {
                setCurrentSlide((prev) => (prev + 1) % 2);
            }
        }, 8000);
        return () => clearInterval(slideInterval);
    }, [isSlideHovered]);

    // Auto-cambio de títulos
    useEffect(() => {
        const titleInterval = setInterval(() => {
            setCurrentTitleIndex((prev) => (prev === 0 ? 1 : 0));
        }, 3000);
        return () => clearInterval(titleInterval);
    }, []);

    const handleSlideChange = (newSlide) => {
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
                background: 'rgba(173, 153, 27, 0.08)',
                borderColor: 'rgba(173, 153, 27, 0.2)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay }}
            onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(173, 153, 27, 0.12)';
                e.currentTarget.style.borderColor = 'rgba(173, 153, 27, 0.4)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(173, 153, 27, 0.15)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(173, 153, 27, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(173, 153, 27, 0.2)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
            }}
        >
            {/* Controles de slide */}
            <SlideControls onSlideChange={handleSlideChange} />

            {/* Contenido del slide */}
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

            {/* Indicadores de slide */}
            <SlideIndicators 
                slides={slides}
                currentSlide={currentSlide}
                onSlideChange={handleSlideChange}
            />
        </motion.div>
    );
};

export default SlidePresentation;