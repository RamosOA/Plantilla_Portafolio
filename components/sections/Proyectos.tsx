// components/sections/Proyectos.tsx

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../proyectos/ProjectCard';
import { proyectosData } from '../proyectos/proyectosData';

const Proyectos = () => {
    return (
        <motion.div
            className="w-full h-[75vh] flex items-center justify-center px-6 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            {/* Título lateral fijo */}
            <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10">
                <div className="pt-20">
                    <motion.h2 
                        className="text-4xl md:text-5xl font-bold transform -rotate-90 origin-center whitespace-nowrap"
                        style={{ 
                            color: '#AD991B',
                            textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
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

            {/* Grid con padding estandarizado */}
            <div className="pl-24 pr-8 py-8 h-full w-full max-w-7xl">
                <div className="grid grid-cols-5 grid-rows-5 gap-4 h-full">
                    
                    {/* Comercol */}
                    <ProjectCard
                        proyecto={proyectosData[0]}
                        className="col-span-3 row-span-3"
                        delay={0.3}
                    />

                    {/* AdBlocker */}
                    <ProjectCard
                        proyecto={proyectosData[1]}
                        className="col-span-2 row-span-2 col-start-4"
                        delay={0.4}
                    />

                    {/* Websepudo */}
                    <ProjectCard
                        proyecto={proyectosData[2]}
                        className="col-span-2 row-span-3 col-start-4 row-start-3"
                        delay={0.5}
                    />

                    {/* E-commerce Bikers */}
                    <ProjectCard
                        proyecto={proyectosData[3]}
                        className="col-span-3 row-span-2 row-start-4"
                        delay={0.6}
                    />
                </div>
            </div>

            {/* ESTILOS DE SCROLLBAR EXACTAMENTE IGUALES AL COMPONENTE HABILIDADES */}
            <style jsx global>{`
                .custom-scrollbar {
                    scrollbar-width: thin;
                    scrollbar-color: rgba(173, 153, 27, 0.3) transparent;
                }

                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                }

                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }

                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(173, 153, 27, 0.3);
                    border-radius: 10px;
                    border: 2px solid transparent;
                    background-clip: content-box;
                }

                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(173, 153, 27, 0.5);
                    background-clip: content-box;
                }

                .custom-scrollbar::-webkit-scrollbar-thumb:active {
                    background: rgba(173, 153, 27, 0.7);
                    background-clip: content-box;
                }
            `}</style>
        </motion.div>
    );
};

export default Proyectos;
