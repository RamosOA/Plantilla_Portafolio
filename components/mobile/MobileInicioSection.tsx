'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import MobileHeroSection from '../mobile/MobileHeroSection';
import MobileNavigationCard from '../mobile/MobileNavigationCard';

const MobileInicioSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
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
    const phoneNumber = '573028488116';
    const message = encodeURIComponent('¡Hola Oscar! Me interesa conocer más sobre tus servicios de desarrollo web.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isMobile) return null;

  return (
    <div className="mobile-inicio-layout mobile-section-container mobile-scroll-container">
      <div className="mobile-content-area mobile-safe-top mobile-safe-horizontal mobile-distribute-space">
        {/* Hero Section */}
      <MobileHeroSection
        name="Oscar Ramos"
        title="Desarrollador Full Stack"
        subtitle="Creador de Experiencias Digitales"
        description="Con experiencia en desarrollo frontend y backend, construyo aplicaciones web modernas que combinan diseño atractivo con funcionalidad robusta."
      />

      {/* Navigation Cards */}
      <div className="w-full max-w-md space-y-4">
        <MobileNavigationCard
          title="Sobre Mí"
          description="Conoce mi historia y experiencia profesional"
          icon="user"
          onClick={() => scrollToSection('sobremi')}
          delay={0.2}
        />

        <MobileNavigationCard
          title="Habilidades"
          description="Explora mis tecnologías y herramientas de desarrollo"
          icon="skills"
          onClick={() => scrollToSection('habilidades')}
          delay={0.3}
        />

        <MobileNavigationCard
          title="Proyectos"
          description="Descubre mi portafolio de aplicaciones web"
          icon="projects"
          onClick={() => scrollToSection('proyectos')}
          delay={0.4}
        />

        <MobileNavigationCard
          title="Contacto"
          description="¿Tienes un proyecto en mente? Conectemos"
          icon="contact"
          onClick={() => scrollToSection('contacto')}
          delay={0.5}
        />

        {/* WhatsApp Quick Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="pt-4"
        >
          <div
            onClick={openWhatsApp}
            className="w-full p-4 rounded-xl border cursor-pointer transition-all duration-300 active:scale-95"
            style={{
              background: 'linear-gradient(135deg, rgba(37, 211, 102, 0.1), rgba(37, 211, 102, 0.05))',
              borderColor: 'rgba(37, 211, 102, 0.3)',
              backdropFilter: 'blur(20px)'
            }}
          >
            <div className="flex items-center justify-center space-x-3">
              <span className="text-2xl">💬</span>
              <div className="text-center">
                <p className="font-semibold text-green-400">Escribir por WhatsApp</p>
                <p className="text-sm text-green-300">Respuesta rápida garantizada</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      </div>
    </div>
  );
};

export default MobileInicioSection;
