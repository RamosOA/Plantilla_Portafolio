'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import TechTags from './TechTags';

interface ProjectContentProps {
    descripcion: string;
    tecnologias: string[];
    link: string;
}

const ProjectContent: React.FC<ProjectContentProps> = ({ descripcion, tecnologias, link }) => {
    return (
        <>
            {/* Descripción con margin-bottom visible */}
            <motion.div 
                className="mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <p 
                    className="text-sm leading-relaxed"
                    style={{ color: '#e0e0e0' }}
                >
                    {descripcion}
                </p>
            </motion.div>

            {/* Tecnologías con margin-bottom visible */}
            <div className="mb-4">
                <TechTags tecnologias={tecnologias} />
            </div>

            {/* Botón GitHub con margin-bottom visible */}
            <div className="mb-4">
                <motion.a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 inline-flex"
                    style={{ 
                        color: '#AD991B',
                        background: 'rgba(173, 153, 27, 0.1)',
                        border: '1px solid rgba(173, 153, 27, 0.2)'
                    }}
                    whileHover={{ 
                        scale: 1.05,
                        backgroundColor: 'rgba(173, 153, 27, 0.2)'
                    }}
                    whileTap={{ scale: 0.95 }}
                >
                    <FaGithub />
                    Ver en GitHub
                </motion.a>
            </div>
        </>
    );
};

export default ProjectContent;