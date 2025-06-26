'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../proyectos/ProjectCard';
import { proyectosData } from '../proyectos/proyectosData';
import MobileProyectosSection from '../mobile/MobileProyectosSection';

const Proyectos = () => {
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
        return <MobileProyectosSection />;
    }

    // Render desktop version
    return (
        <motion.div
            className="w-full h-[75vh] flex items-center justify-center px-6 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            
            <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10">
                <div className="pt-20">
                    <motion.h2 
                        className="text-4xl md:text-5xl font-bold transform -rotate-90 origin-center whitespace-nowrap"
                        style={{ 
                            color: 'var(--primary-100)',
                            writingMode: 'vertical-lr',
                            textOrientation: 'mixed'
                        }}
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Proyectos
                    </motion.h2>
                </div>
            </div>

            
            <div className="pl-24 pr-8 py-8 h-full w-full max-w-7xl">
                <div className="grid grid-cols-5 grid-rows-5 gap-4 h-full">
                    
                    
                    <ProjectCard
                        proyecto={proyectosData[0]}
                        className="col-span-3 row-span-3"
                        delay={0.3}
                    />

                    
                    <ProjectCard
                        proyecto={proyectosData[1]}
                        className="col-span-2 row-span-2 col-start-4"
                        delay={0.4}
                    />

                    
                    <ProjectCard
                        proyecto={proyectosData[2]}
                        className="col-span-2 row-span-3 col-start-4 row-start-3"
                        delay={0.5}
                    />

                    
                    <ProjectCard
                        proyecto={proyectosData[3]}
                        className="col-span-3 row-span-2 row-start-4"
                        delay={0.6}
                    />
                </div>
            </div>

            
            <style jsx global>{`
                
                .custom-scrollbar {
                    
                    scrollbar-width: thin;
                    scrollbar-color: color-mix(in srgb, var(--primary-100) 25%, transparent) color-mix(in srgb, var(--primary-100) 8%, transparent);
                }
                
                
                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                }
                
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: color-mix(in srgb, var(--primary-100) 5%, transparent);
                    border-radius: 4px;
                }
                
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: color-mix(in srgb, var(--primary-100) 25%, transparent);
                    border-radius: 4px;
                    border: 1px solid color-mix(in srgb, var(--primary-100) 15%, transparent);
                }
                
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: color-mix(in srgb, var(--primary-100) 40%, transparent);
                    border-color: color-mix(in srgb, var(--primary-100) 25%, transparent);
                }

                .custom-scrollbar::-webkit-scrollbar-thumb:active {
                    background: color-mix(in srgb, var(--primary-100) 50%, transparent);
                    border-color: color-mix(in srgb, var(--primary-100) 30%, transparent);
                }

                
                :root[data-theme="light"] .custom-scrollbar {
                    scrollbar-color: color-mix(in srgb, var(--primary-200) 40%, transparent) color-mix(in srgb, var(--primary-100) 15%, transparent);
                }

                :root[data-theme="light"] .custom-scrollbar::-webkit-scrollbar-track {
                    background: color-mix(in srgb, var(--primary-100) 10%, transparent);
                }
                
                :root[data-theme="light"] .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: color-mix(in srgb, var(--primary-200) 30%, transparent);
                    border-color: color-mix(in srgb, var(--primary-200) 15%, transparent);
                }
                
                :root[data-theme="light"] .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: color-mix(in srgb, var(--primary-200) 45%, transparent);
                    border-color: color-mix(in srgb, var(--primary-200) 25%, transparent);
                }

                :root[data-theme="light"] .custom-scrollbar::-webkit-scrollbar-thumb:active {
                    background: color-mix(in srgb, var(--primary-200) 55%, transparent);
                    border-color: color-mix(in srgb, var(--primary-200) 35%, transparent);
                }
            `}</style>
        </motion.div>
    );
};

export default Proyectos;
