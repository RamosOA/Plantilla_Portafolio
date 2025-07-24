'use client';

import React from 'react';
import { motion } from 'framer-motion';
import TituloSeccion from '../inicio/TituloSeccion';
import SlidePresentation from '../inicio/SlidePresentation';
import NavigationCard from '../inicio/NavigationCard';
import WhatsAppCard from '../inicio/WhatsAppCard';
import MobileInicioSectionImproved from '../mobile/MobileInicioSectionImproved';
import { useMobileDetection } from '../../hooks/useClientSide';

const Inicio = () => {
    const { isMobile, mounted } = useMobileDetection();

    const scrollToSection = (sectionId: string) => {
        if (typeof window === 'undefined') return;
        
        const section = document.getElementById(sectionId);
        if (section) {
            const isMobile = window.innerWidth <= 768;
            
            if (isMobile) {
                section.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } else {
                window.scrollTo({
                    left: section.offsetLeft,
                    behavior: 'smooth'
                });
            }
        }
    };

    const openWhatsApp = () => {
        const phoneNumber = '1234567890';
        const message = encodeURIComponent('¡Hola! Me interesa conocer más sobre tus servicios de desarrollo web.');
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    if (!mounted) {
        // Return a loading state or placeholder during SSR
        return (
            <motion.div
                className="w-full h-[75vh] flex items-center justify-center px-6 relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                        <div className="w-8 h-8 border-2 border-yellow-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                        <p style={{ color: 'var(--text-200)' }}>Cargando...</p>
                    </div>
                </div>
            </motion.div>
        );
    }

    if (isMobile) {
        return <MobileInicioSectionImproved />;
    }

    return (
        <motion.div
            className="w-full h-[75vh] flex items-center justify-center px-6 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            
            <TituloSeccion titulo="INICIO" />

            
            <div className="pl-24 pr-8 py-8 h-full w-full max-w-7xl">
                <div className="grid grid-cols-5 grid-rows-5 gap-4 h-full">
                    
                    
                    <SlidePresentation 
                        className="col-span-2 row-span-3"
                        delay={0.3}
                    />

                    
                    <NavigationCard
                        className="col-span-3 row-span-2 col-start-1 row-start-4"
                        title="Habilidades"
                        description="Explora mis tecnologías y herramientas de desarrollo"
                        icon="skills"
                        onClick={() => scrollToSection('habilidades')}
                        delay={0.4}
                    />

                    
                    <NavigationCard
                        className="col-span-2 row-span-2 col-start-4 row-start-4"
                        title="Proyectos"
                        description="Descubre mi portafolio de aplicaciones web"
                        icon="projects"
                        onClick={() => scrollToSection('proyectos')}
                        layout="vertical"
                        delay={0.5}
                    />

                    
                    <NavigationCard
                        className="col-span-3 col-start-3 row-start-1"
                        title="Sobre Mí"
                        description="Conoce mi historia y experiencia profesional"
                        icon="user"
                        onClick={() => scrollToSection('sobremi')}
                        delay={0.6}
                    />

                    
                    <WhatsAppCard
                        className="row-span-2 col-start-3 row-start-2"
                        onClick={openWhatsApp}
                        delay={0.7}
                    />

                    
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