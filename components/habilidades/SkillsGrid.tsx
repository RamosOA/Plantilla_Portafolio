'use client';

import React from 'react';
import { FaCode, FaServer, FaTools } from 'react-icons/fa';
import SkillCategory from './SkillCategory';
import { frontendSkills, backendSkills, toolsSkills } from './skillsData';

interface SkillsGridProps {
    handleWheel: (e: React.WheelEvent, scrollRef: React.RefObject<HTMLDivElement>) => void;
}

const SkillsGrid: React.FC<SkillsGridProps> = ({ handleWheel }) => {
    return (
        <div className="pl-24 pr-8 py-8 h-full w-full max-w-7xl">
            <div className="grid grid-cols-5 grid-rows-4 gap-4 h-full">
                {/* Frontend */}
                <SkillCategory
                    title="Frontend"
                    icon={FaCode}
                    description="Tecnologías para crear interfaces de usuario interactivas y responsivas. Especializado en desarrollo moderno con React y herramientas actuales."
                    skills={frontendSkills}
                    className="col-span-2 row-span-4"
                    delay={0.3}
                    gridCols="grid-cols-2"
                    handleWheel={handleWheel}
                />

                {/* Backend */}
                <SkillCategory
                    title="Backend & Base de Datos"
                    icon={FaServer}
                    description="Desarrollo del lado del servidor, APIs REST y gestión de bases de datos. Experiencia con Node.js y conocimientos básicos en otros lenguajes."
                    skills={backendSkills}
                    className="col-span-3 row-span-2 col-start-3"
                    delay={0.4}
                    gridCols="grid-cols-3"
                    handleWheel={handleWheel}
                />

                {/* Herramientas */}
                <SkillCategory
                    title="Herramientas & Plataformas"
                    icon={FaTools}
                    description="Control de versiones, despliegue, contenedores y herramientas de desarrollo. Metodologías ágiles y flujo de trabajo profesional."
                    skills={toolsSkills}
                    className="col-span-3 row-span-2 col-start-3 row-start-3"
                    delay={0.5}
                    gridCols="grid-cols-4"
                    handleWheel={handleWheel}
                />
            </div>
        </div>
    );
};

export default SkillsGrid;
