// components/sections/SobreMi.tsx

'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaGraduationCap, FaCode, FaHeart, FaMapMarkerAlt, FaCalendarAlt, FaInfoCircle } from 'react-icons/fa';

const SobreMi = () => {
    const presentacionScrollRef = useRef(null);
    const infoScrollRef = useRef(null);
    const interesesScrollRef = useRef(null);
    const filosofiaScrollRef = useRef(null);

    const handleWheel = (e, scrollRef) => {
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
            
            // En cualquier otro caso, hacer scroll vertical dentro de la sección
            e.preventDefault();
            e.stopPropagation();
            container.scrollTop += e.deltaY;
        }
    };

    const personalInfo = [
        { icon: FaMapMarkerAlt, label: 'Ubicación', value: 'Colombia' },
        { icon: FaCalendarAlt, label: 'Edad', value: '24 años' },
        { 
            icon: FaGraduationCap, 
            label: 'Educación', 
            value: '• Desarrollador Autodidacta',
            additional: '• Programación de aplicaciones para dispositivos móviles (En curso)'
        },
        { icon: FaCode, label: 'Especialidad', value: 'Frontend & Backend' }
    ];

    const interests = [
        'Desarrollo Web',
        'Nuevas Tecnologías',
        'UI/UX Design',
        'Aprendizaje Continuo',
        'Código Limpio',
        'Innovación',
        'JavaScript',
        'React.js',
        'Node.js',
        'Bases de Datos',
        'APIs REST',
        'Metodologías Ágiles'
    ];

    return (
        <motion.div
            className="w-full h-[75vh] flex items-center justify-center px-6 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            {/* Título rotado al lado izquierdo - igual a otros componentes */}
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
                        Sobre Mí
                    </motion.h2>
                </div>
            </div>

            {/* Contenido principal */}
            <div className="pl-24 pr-8 py-8 h-full w-full max-w-6xl">
                <div className="grid grid-cols-12 grid-rows-6 gap-4 h-full">
                    
                    {/* Tarjeta principal de presentación */}
                    <motion.div
                        className="col-span-8 row-span-3 border rounded-xl p-6 flex flex-col overflow-hidden cursor-default"
                        style={{
                            background: 'rgba(173, 153, 27, 0.08)',
                            borderColor: 'rgba(173, 153, 27, 0.2)',
                            backdropFilter: 'blur(20px)',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                        }}
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        onWheel={(e) => handleWheel(e, presentacionScrollRef)}
                    >
                        <div className="flex items-center mb-6">
                            <FaUser className="text-4xl mr-4" style={{ color: 'rgba(173, 153, 27, 0.4)' }} />
                            <h3 className="text-2xl font-bold" style={{ color: '#AD991B' }}>
                                ¡Hola! Soy Oscar
                            </h3>
                        </div>
                        
                        <div 
                            ref={presentacionScrollRef}
                            className="flex-1 overflow-y-auto pr-2 custom-scrollbar scroll-smooth"
                        >
                            <p className="text-lg leading-relaxed mb-6" style={{ color: '#ffffff' }}>
                                Desarrollador web apasionado por crear experiencias digitales excepcionales. 
                                Me especializo en tecnologías modernas como React, Next.js y Node.js.
                            </p>
                            
                            <p className="text-base leading-relaxed mb-4" style={{ color: '#e0e0e0' }}>
                                Siempre en busca de nuevos desafíos y oportunidades para crecer profesionalmente. 
                                Me encanta resolver problemas complejos con soluciones elegantes y eficientes.
                            </p>

                            <p className="text-base leading-relaxed" style={{ color: '#e0e0e0' }}>
                                Mi objetivo es combinar creatividad y tecnología para construir aplicaciones 
                                que no solo funcionen perfectamente, sino que también brinden una experiencia 
                                de usuario memorable y significativa.
                            </p>
                        </div>
                    </motion.div>

                    {/* Información personal */}
                    <motion.div
                        className="col-span-4 row-span-6 border rounded-xl p-6 flex flex-col overflow-hidden cursor-default"
                        style={{
                            background: 'rgba(173, 153, 27, 0.08)',
                            borderColor: 'rgba(173, 153, 27, 0.2)',
                            backdropFilter: 'blur(20px)',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                        }}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        onWheel={(e) => handleWheel(e, infoScrollRef)}
                    >
                        <div className="flex items-center mb-6">
                            <FaInfoCircle className="text-2xl mr-3" style={{ color: 'rgba(173, 153, 27, 0.4)' }} />
                            <h4 className="text-xl font-semibold" style={{ color: '#AD991B' }}>
                                Información Personal
                            </h4>
                        </div>
                        
                        <div 
                            ref={infoScrollRef}
                            className="flex-1 overflow-y-auto pr-2 custom-scrollbar scroll-smooth"
                        >
                            <div className="space-y-6">
                                {personalInfo.map((info, index) => {
                                    const IconComponent = info.icon;
                                    return (
                                        <motion.div
                                            key={info.label}
                                            className="flex items-start space-x-4"
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.5 + index * 0.1 }}
                                        >
                                            <IconComponent 
                                                className="text-xl mt-1 flex-shrink-0" 
                                                style={{ color: '#AD991B' }} 
                                            />
                                            <div className="min-w-0 flex-1">
                                                <p className="text-sm font-medium" style={{ color: '#e0e0e0' }}>
                                                    {info.label}
                                                </p>
                                                <p className="text-base font-semibold" style={{ color: '#ffffff' }}>
                                                    {info.value}
                                                </p>
                                                {info.additional && (
                                                    <p className="text-base mt-1 font-semibold" style={{ color: '#ffffff' }}>
                                                        {info.additional}
                                                    </p>
                                                )}
                                            </div>
                                        </motion.div>
                                    );
                                })}
                                
                                {/* Información adicional para demostrar el scroll */}
                                <motion.div
                                    className="pt-4 border-t border-opacity-20"
                                    style={{ borderColor: '#AD991B' }}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.9 }}
                                >
                                    <p className="text-sm leading-relaxed" style={{ color: '#e0e0e0' }}>
                                        Comprometido con el aprendizaje continuo y la mejora constante 
                                        de mis habilidades técnicas y profesionales.
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Intereses y pasiones */}
                    <motion.div
                        className="col-span-5 row-span-3 border rounded-xl p-6 flex flex-col overflow-hidden cursor-default"
                        style={{
                            background: 'rgba(173, 153, 27, 0.08)',
                            borderColor: 'rgba(173, 153, 27, 0.2)',
                            backdropFilter: 'blur(20px)',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                        }}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        onWheel={(e) => handleWheel(e, interesesScrollRef)}
                    >
                        <div className="flex items-center mb-6">
                            <FaHeart className="text-2xl mr-3" style={{ color: 'rgba(173, 153, 27, 0.4)' }} />
                            <h4 className="text-xl font-semibold" style={{ color: '#AD991B' }}>
                                Mis Intereses
                            </h4>
                        </div>
                        
                        <div 
                            ref={interesesScrollRef}
                            className="flex-1 overflow-y-auto pr-2 custom-scrollbar scroll-smooth"
                        >
                            <div className="grid grid-cols-2 gap-3">
                                {interests.map((interest, index) => (
                                    <motion.div
                                        key={interest}
                                        className="px-4 py-3 rounded-lg text-center border transition-all duration-300 hover:scale-105 flex items-center justify-center"
                                        style={{
                                            background: 'rgba(173, 153, 27, 0.1)',
                                            borderColor: 'rgba(173, 153, 27, 0.3)',
                                            color: '#ffffff'
                                        }}
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: 0.6 + index * 0.1 }}
                                        whileHover={{
                                            background: 'rgba(173, 153, 27, 0.2)',
                                            borderColor: 'rgba(173, 153, 27, 0.5)'
                                        }}
                                    >
                                        <span className="text-sm font-medium text-center leading-tight">{interest}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Filosofía de trabajo */}
                    <motion.div
                        className="col-span-3 row-span-3 border rounded-xl p-6 flex flex-col overflow-hidden cursor-default"
                        style={{
                            background: 'rgba(173, 153, 27, 0.08)',
                            borderColor: 'rgba(173, 153, 27, 0.2)',
                            backdropFilter: 'blur(20px)',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                        }}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        onWheel={(e) => handleWheel(e, filosofiaScrollRef)}
                    >
                        <div 
                            ref={filosofiaScrollRef}
                            className="text-center flex-1 overflow-y-auto pr-2 custom-scrollbar scroll-smooth"
                        >
                            <motion.div
                                className="text-6xl mb-4"
                                initial={{ rotate: -180, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.8 }}
                                style={{ color: 'rgba(173, 153, 27, 0.3)' }}
                            >
                                📖
                            </motion.div>
                            
                            <h4 className="text-lg font-semibold mb-4" style={{ color: '#AD991B' }}>
                                Mi Filosofía
                            </h4>
                            
                            <p className="text-sm leading-relaxed mb-4" style={{ color: '#e0e0e0' }}>
                                "La simplicidad es la máxima sofisticación. Cada línea de código debe tener un propósito."
                            </p>

                            <p className="text-sm leading-relaxed" style={{ color: '#e0e0e0' }}>
                                Creo firmemente en escribir código limpio, mantenible y escalable 
                                que pueda ser entendido por cualquier desarrollador.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Estilos personalizados para el scrollbar con opacidad baja */}
            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(173, 153, 27, 0.05);
                    border-radius: 3px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(173, 153, 27, 0.2);
                    border-radius: 3px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(173, 153, 27, 0.35);
                }
            `}</style>
        </motion.div>
    );
};

export default SobreMi;
