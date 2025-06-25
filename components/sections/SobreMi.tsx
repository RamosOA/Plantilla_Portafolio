// components/sections/SobreMi.tsx

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import TituloSeccion from '../inicio/TituloSeccion';
import AboutGrid from '../sobremi/AboutGrid';
import CustomScrollbarStyles from '../sobremi/CustomScrollbarStyles';
import { useScrollHandler } from '../habilidades/useScrollHandler';

const SobreMi = () => {
    const { handleWheel } = useScrollHandler();

    return (
        <motion.div
            className="w-full h-[75vh] flex items-center justify-center px-6 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            {/* Título lateral */}
            <TituloSeccion titulo="Sobre Mí" />

            {/* Contenido principal */}
            <AboutGrid handleWheel={handleWheel} />

            {/* Estilos personalizados para el scrollbar */}
            <CustomScrollbarStyles />
        </motion.div>
    );
};

export default SobreMi;
