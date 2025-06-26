'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TituloSeccion from '../inicio/TituloSeccion';
import SkillsGrid from '../habilidades/SkillsGrid';
import CustomScrollbar from '../habilidades/CustomScrollbar';
import { useScrollHandler } from '../habilidades/useScrollHandler';
import MobileHabilidadesSection from '../mobile/MobileHabilidadesSection';

const Habilidades = () => {
    const { handleWheel } = useScrollHandler();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Render mobile version
    if (isMobile) {
        return <MobileHabilidadesSection />;
    }

    // Render desktop version
    return (
        <motion.div
            className="w-full h-[75vh] flex items-center justify-center px-6 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <TituloSeccion titulo="Habilidades" />

            <SkillsGrid handleWheel={handleWheel} />

            <CustomScrollbar />
        </motion.div>
    );
};

export default Habilidades;