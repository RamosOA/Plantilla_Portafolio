'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { 
    FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaCode, FaServer, FaTools, 
    FaPython, FaJava, FaNodeJs, FaDatabase, FaLinux, FaAndroid, FaDocker,
    FaGithub
} from 'react-icons/fa';

const Habilidades = () => {
    const frontendScrollRef = useRef(null);
    const backendScrollRef = useRef(null);
    const toolsScrollRef = useRef(null);

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
            
            // En cualquier otro caso, hacer scroll vertical dentro de la categoría
            e.preventDefault();
            e.stopPropagation();
            container.scrollTop += e.deltaY;
        }
    };

    const frontendSkills = [
        { name: 'JavaScript (ES6+)', icon: FaJs, level: 95, color: '#AD991B' },
        { name: 'HTML5', icon: FaHtml5, level: 95, color: '#AD991B' },
        { name: 'CSS3', icon: FaCss3Alt, level: 90, color: '#AD991B' },
        { name: 'React.js', icon: FaReact, level: 90, color: '#AD991B' },
        { name: 'TypeScript', icon: FaCode, level: 75, color: '#AD991B' },
        { name: 'Tailwind CSS', icon: FaCss3Alt, level: 88, color: '#AD991B' },
        { name: 'Next.js', icon: FaReact, level: 85, color: '#AD991B' },
        { name: 'Framer Motion', icon: FaCode, level: 75, color: '#AD991B' }
    ];

    const backendSkills = [
        { name: 'Node.js', icon: FaNodeJs, level: 80, color: '#AD991B' },
        { name: 'Express', icon: FaServer, level: 75, color: '#AD991B' },
        { name: 'Python', icon: FaPython, level: 55, color: '#AD991B' },
        { name: 'Java', icon: FaJava, level: 60, color: '#AD991B' },
        { name: 'Sequelize', icon: FaDatabase, level: 70, color: '#AD991B' },
        { name: 'SQL', icon: FaDatabase, level: 75, color: '#AD991B' }
    ];

    const toolsSkills = [
        { name: 'Git', icon: FaGitAlt, level: 85, color: '#AD991B' },
        { name: 'GitHub', icon: FaGithub, level: 90, color: '#AD991B' },
        { name: 'GitHub Actions', icon: FaGithub, level: 60, color: '#AD991B' },
        { name: 'Docker', icon: FaDocker, level: 50, color: '#AD991B' },
        { name: 'Linux', icon: FaLinux, level: 70, color: '#AD991B' },
        { name: 'Vercel', icon: FaServer, level: 85, color: '#AD991B' },
        { name: 'EmailJS', icon: FaCode, level: 80, color: '#AD991B' },
        { name: 'Android Studio', icon: FaAndroid, level: 55, color: '#AD991B' }
    ];

    const SkillItem = ({ skill, index }) => {
        const IconComponent = skill.icon;

        return (
            <motion.div
                className="text-center group mb-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
            >
                <div className="flex flex-col items-center">
                    <IconComponent 
                        className="text-2xl mb-2 transition-all duration-300 group-hover:scale-110" 
                        style={{ color: '#AD991B' }}
                    />
                    <h4 className="text-sm font-semibold mb-3 text-center leading-tight" style={{ color: '#FFFFFF' }}>
                        {skill.name}
                    </h4>
                    
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-2 overflow-hidden">
                        <motion.div
                            className="h-full rounded-full"
                            style={{ 
                                background: `linear-gradient(90deg, ${skill.color} 0%, #8e7d00 100%)`,
                                boxShadow: `0 0 8px rgba(173, 153, 27, 0.4)`
                            }}
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ delay: 0.2 + (0.1 * index), duration: 1 }}
                        />
                    </div>
                    
                    <span className="text-sm font-medium" style={{ color: '#e0e0e0' }}>
                        {skill.level}%
                    </span>
                </div>
            </motion.div>
        );
    };

    return (
        <motion.div
            className="w-full h-[75vh] flex items-center justify-center px-6 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            {/* Título rotado al lado izquierdo */}
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
                        Habilidades
                    </motion.h2>
                </div>
            </div>

            {/* Grid de habilidades */}
            <div className="pl-24 pr-8 py-8 h-full w-full max-w-7xl">
                <div className="grid grid-cols-5 grid-rows-4 gap-4 h-full">
                    {/* Frontend */}
                    <motion.div
                        className="col-span-2 row-span-4 border rounded-lg p-4 flex flex-col overflow-hidden cursor-default"
                        style={{
                            background: 'rgba(173, 153, 27, 0.08)',
                            borderColor: 'rgba(173, 153, 27, 0.2)',
                            backdropFilter: 'blur(20px)',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                        }}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        onWheel={(e) => handleWheel(e, frontendScrollRef)}
                    >
                        <div className="flex items-center mb-4">
                            <FaCode className="text-3xl mr-2" style={{ color: 'rgba(173, 153, 27, 0.3)' }} />
                            <h3 className="text-lg font-semibold" style={{ color: '#AD991B' }}>
                                Frontend
                            </h3>
                        </div>
                        
                        {/* Texto introductorio más grande */}
                        <motion.p 
                            className="text-sm mb-4 leading-relaxed"
                            style={{ color: '#e0e0e0' }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            Tecnologías para crear interfaces de usuario interactivas y responsivas. 
                            Especializado en desarrollo moderno con React y herramientas actuales.
                        </motion.p>

                        {/* Área con scroll */}
                        <div 
                            ref={frontendScrollRef}
                            className="grid grid-cols-2 gap-3 flex-1 overflow-y-auto pr-2 custom-scrollbar scroll-smooth"
                        >
                            {frontendSkills.map((skill, index) => (
                                <SkillItem key={skill.name} skill={skill} index={index} />
                            ))}
                        </div>
                    </motion.div>

                    {/* Backend */}
                    <motion.div
                        className="col-span-3 row-span-2 col-start-3 border rounded-lg p-4 flex flex-col overflow-hidden cursor-default"
                        style={{
                            background: 'rgba(173, 153, 27, 0.08)',
                            borderColor: 'rgba(173, 153, 27, 0.2)',
                            backdropFilter: 'blur(20px)',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                        }}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        onWheel={(e) => handleWheel(e, backendScrollRef)}
                    >
                        <div className="flex items-center mb-4">
                            <FaServer className="text-3xl mr-2" style={{ color: 'rgba(173, 153, 27, 0.3)' }} />
                            <h3 className="text-lg font-semibold" style={{ color: '#AD991B' }}>
                                Backend & Base de Datos
                            </h3>
                        </div>

                        {/* Texto introductorio más grande */}
                        <motion.p 
                            className="text-sm mb-4 leading-relaxed"
                            style={{ color: '#e0e0e0' }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            Desarrollo del lado del servidor, APIs REST y gestión de bases de datos. 
                            Experiencia con Node.js y conocimientos básicos en otros lenguajes.
                        </motion.p>

                        {/* Área con scroll */}
                        <div 
                            ref={backendScrollRef}
                            className="grid grid-cols-3 gap-3 flex-1 overflow-y-auto pr-2 custom-scrollbar scroll-smooth"
                        >
                            {backendSkills.map((skill, index) => (
                                <SkillItem key={skill.name} skill={skill} index={index} />
                            ))}
                        </div>
                    </motion.div>

                    {/* Herramientas */}
                    <motion.div
                        className="col-span-3 row-span-2 col-start-3 row-start-3 border rounded-lg p-4 flex flex-col overflow-hidden cursor-default"
                        style={{
                            background: 'rgba(173, 153, 27, 0.08)',
                            borderColor: 'rgba(173, 153, 27, 0.2)',
                            backdropFilter: 'blur(20px)',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                        }}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        onWheel={(e) => handleWheel(e, toolsScrollRef)}
                    >
                        <div className="flex items-center mb-4">
                            <FaTools className="text-3xl mr-2" style={{ color: 'rgba(173, 153, 27, 0.3)' }} />
                            <h3 className="text-lg font-semibold" style={{ color: '#AD991B' }}>
                                Herramientas & Plataformas
                            </h3>
                        </div>

                        {/* Texto introductorio más grande */}
                        <motion.p 
                            className="text-sm mb-4 leading-relaxed"
                            style={{ color: '#e0e0e0' }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                        >
                            Control de versiones, despliegue, contenedores y herramientas de desarrollo. 
                            Metodologías ágiles y flujo de trabajo profesional.
                        </motion.p>

                        {/* Área con scroll */}
                        <div 
                            ref={toolsScrollRef}
                            className="grid grid-cols-4 gap-3 flex-1 overflow-y-auto pr-2 custom-scrollbar scroll-smooth"
                        >
                            {toolsSkills.map((skill, index) => (
                                <SkillItem key={skill.name} skill={skill} index={index} />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Estilos personalizados para el scrollbar con opacidad reducida */}
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

export default Habilidades;