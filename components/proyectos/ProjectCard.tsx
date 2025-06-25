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

    
    const handleWheel = (e: React.WheelEvent) => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const { scrollTop, scrollHeight, clientHeight } = container;
            
            
            const isAtTop = scrollTop === 0;
            const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
            
            
            if (e.deltaY < 0 && isAtTop) {
                return; 
            }
            
            
            if (e.deltaY > 0 && isAtBottom) {
                return; 
            }
            
            
            e.preventDefault();
            e.stopPropagation();
            container.scrollTop += e.deltaY;
        }
    };

    return (
        <motion.div
            className={`${className} border rounded-lg cursor-default flex flex-col overflow-hidden`}
            style={{
                background: 'color-mix(in srgb, var(--primary-100) 8%, transparent)',
                borderColor: 'color-mix(in srgb, var(--primary-100) 20%, transparent)',
                backdropFilter: 'blur(20px)'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            onWheel={handleWheel}
        >
            {}
            <div className="p-4 pb-0">
                <ProjectHeader 
                    icono={proyecto.icono}
                    nombre={proyecto.nombre}
                />
            </div>
            
            {}
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