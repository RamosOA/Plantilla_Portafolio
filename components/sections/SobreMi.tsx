'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TituloSeccion from '../inicio/TituloSeccion';
import AboutGrid from '../sobremi/AboutGrid';
import CustomScrollbarStyles from '../sobremi/CustomScrollbarStyles';
import { useScrollHandler } from '../habilidades/useScrollHandler';
import MobileSobreMiSection from '../mobile/MobileSobreMiSection';

const SobreMi = () => {
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
        return <MobileSobreMiSection />;
    }

    return (
        <motion.div
            className="w-full h-[75vh] flex items-center justify-center px-6 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            
            <TituloSeccion titulo="Sobre Mí" />

            
            <AboutGrid handleWheel={handleWheel} />

            
            <CustomScrollbarStyles />
        </motion.div>
    );
};

export default SobreMi;
