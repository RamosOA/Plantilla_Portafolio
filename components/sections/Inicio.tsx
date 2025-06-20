'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import TituloSeccion from '../inicio/TituloSeccion';
import SlidePresentation from '../inicio/SlidePresentation';
import NavigationCard from '../inicio/NavigationCard';
import WhatsAppCard from '../inicio/WhatsAppCard';

const Inicio = () => {
    // Navegación a secciones
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                left: section.offsetLeft,
                behavior: 'smooth'
            });
        }
    };

    // Abrir WhatsApp
    const openWhatsApp = () => {
        const phoneNumber = '573028488116';
        const message = encodeURIComponent('¡Hola Oscar! Me interesa conocer más sobre tus servicios de desarrollo web.');
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <motion.div
            className="w-full h-[75vh] flex items-center justify-center px-6 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            {/* Título lateral */}
            <TituloSeccion titulo="INICIO" />

            {/* Grid principal */}
            <div className="pl-24 pr-8 py-8 h-full w-full max-w-7xl">
                <div className="grid grid-cols-5 grid-rows-5 gap-4 h-full">
                    
                    {/* Div 1 - Presentación Principal */}
                    <SlidePresentation 
                        className="col-span-2 row-span-3"
                        delay={0.3}
                    />

                    {/* Div 2 - Habilidades */}
                    <NavigationCard
                        className="col-span-3 row-span-2 col-start-1 row-start-4"
                        title="Habilidades"
                        description="Explora mis tecnologías y herramientas de desarrollo"
                        icon="skills"
                        onClick={() => scrollToSection('habilidades')}
                        delay={0.4}
                    />

                    {/* Div 3 - Proyectos */}
                    <NavigationCard
                        className="col-span-2 row-span-2 col-start-4 row-start-4"
                        title="Proyectos"
                        description="Descubre mi portafolio de aplicaciones web"
                        icon="projects"
                        onClick={() => scrollToSection('proyectos')}
                        layout="vertical"
                        delay={0.5}
                    />

                    {/* Div 4 - Sobre Mí */}
                    <NavigationCard
                        className="col-span-3 col-start-3 row-start-1"
                        title="Sobre Mí"
                        description="Conoce mi historia y experiencia profesional"
                        icon="user"
                        onClick={() => scrollToSection('sobremi')}
                        delay={0.6}
                    />

                    {/* Div 5 - WhatsApp */}
                    <WhatsAppCard
                        className="row-span-2 col-start-3 row-start-2"
                        onClick={openWhatsApp}
                        delay={0.7}
                    />

                    {/* Div 6 - Contacto */}
                    <NavigationCard
                        className="col-span-2 row-span-2 col-start-4 row-start-2"
                        title="Contacto"
                        description="¿Tienes un proyecto en mente? Conectemos y hagámoslo realidad"
                        icon="contact"
                        onClick={() => scrollToSection('contacto')}
                        actionText="Escribir mensaje"
                        delay={0.8}
                    />

                </div>
            </div>
        </motion.div>
    );
};

export default Inicio;