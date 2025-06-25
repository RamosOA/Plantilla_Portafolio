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
            {}
            <motion.div 
                className="mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <p 
                    className="text-sm leading-relaxed"
                    style={{ color: 'var(--text-300)' }}
                >
                    {descripcion}
                </p>
            </motion.div>

            {}
            <div className="mb-4">
                <TechTags tecnologias={tecnologias} />
            </div>

            {}
            <div className="mb-4">
                <motion.a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 inline-flex"
                    style={{ 
                        color: 'var(--primary-100)',
                        background: 'color-mix(in srgb, var(--primary-100) 10%, transparent)',
                        border: '1px solid color-mix(in srgb, var(--primary-100) 20%, transparent)'
                    }}
                    whileHover={{ 
                        scale: 1.05,
                        backgroundColor: 'color-mix(in srgb, var(--primary-100) 20%, transparent)'
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