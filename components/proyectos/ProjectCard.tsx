'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import ProjectHeader from './ProjectHeader';
import ProjectContent from './ProjectContent';

interface ProjectCardProps {
    proyecto: {
        nombre: string;
        descripcionExtendida: string;
        icono: React.ReactNode;
        link: string;
        tecnologias: string[];
    };
    className: string;
    delay: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ proyecto, className, delay }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    // EXACTAMENTE LA MISMA FUNCIÓN QUE EN HABILIDADES
    const handleWheel = (e: React.WheelEvent) => {
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
            className={`${className} border rounded-lg cursor-default flex flex-col overflow-hidden`}
            style={{
                background: 'rgba(173, 153, 27, 0.08)',
                borderColor: 'rgba(173, 153, 27, 0.2)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            onWheel={handleWheel}
        >
            {/* HEADER ESTÁTICO - NO SE MUEVE CON EL SCROLL */}
            <div className="p-4 pb-0">
                <ProjectHeader 
                    icono={proyecto.icono}
                    nombre={proyecto.nombre}
                />
            </div>
            
            {/* ÁREA CON SCROLL - SIN FLEX PARA QUE SE VEA EL MARGIN-BOTTOM */}
            <div 
                ref={scrollRef}
                className="overflow-y-auto pr-2 custom-scrollbar scroll-smooth p-4 pt-0"
                style={{ minHeight: 0 }}
            >
                <ProjectContent 
                    descripcion={proyecto.descripcionExtendida}
                    tecnologias={proyecto.tecnologias}
                    link={proyecto.link}
                />
            </div>
        </motion.div>
    );
};

export default ProjectCard;