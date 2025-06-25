'use client';

import React from 'react';
import { motion } from 'framer-motion';
import TituloSeccion from '../inicio/TituloSeccion';
import SkillsGrid from '../habilidades/SkillsGrid';
import CustomScrollbar from '../habilidades/CustomScrollbar';
import { useScrollHandler } from '../habilidades/useScrollHandler';

const Habilidades = () => {
    const { handleWheel } = useScrollHandler();

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