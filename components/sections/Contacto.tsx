// components/sections/Contacto.tsx

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ContactTitle from '../contacto/ContactTitle';
import ContactGrid from '../contacto/ContactGrid';
import CustomScrollbar from '../contacto/CustomScrollbar';

const Contacto = () => {
    // Función de manejo de scroll - EXACTAMENTE IGUAL A HABILIDADES
    const handleWheel = (e: React.WheelEvent, scrollRef: React.RefObject<HTMLDivElement>) => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const { scrollTop, scrollHeight, clientHeight } = container;
            
            // Verificar si estamos en el inicio o final del scroll
            const isAtTop = scrollTop === 0;
            const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
            
            // Si estamos scrolleando hacia arriba y ya estamos arriba, permitir scroll horizontal
            if (e.deltaY < 0 && isAtTop) {
                return; // Permitir scroll horizontal/normal
            }
            
            // Si estamos scrolleando hacia abajo y ya estamos abajo, permitir scroll horizontal
            if (e.deltaY > 0 && isAtBottom) {
                return; // Permitir scroll horizontal/normal
            }
            
            // En cualquier otro caso, hacer scroll vertical dentro de la categoría
            e.preventDefault();
            e.stopPropagation();
            container.scrollTop += e.deltaY;
        }
    };

    return (
        <motion.div
            className="w-full h-[75vh] flex items-center justify-center px-6 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            {/* Título lateral fijo */}
            <ContactTitle />

            {/* Grid principal */}
            <ContactGrid handleWheel={handleWheel} />

            {/* Estilos de scrollbar */}
            <CustomScrollbar />
        </motion.div>
    );
};

export default Contacto;
