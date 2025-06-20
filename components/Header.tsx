'use client';

import React, { useState } from 'react';

const Header = () => {
    const [hoveredButton, setHoveredButton] = useState<string | null>(null);

    const scrollTo = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            window.scrollTo({
                left: section.offsetLeft,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="w-screen h-screen overflow-x-auto overflow-y-hidden scrollbar-hide">
            <header className="fixed bottom-0 left-0 right-0 z-50" style={{
                background: 'rgba(189, 190, 192, 0.95)',
                backdropFilter: 'blur(20px)',
                borderTop: '1px solid rgba(173, 153, 27, 0.3)'
            }}>
                {/* ALTURA AUMENTADA PARA COINCIDIR CON ThemeToggleBar */}
                <nav className="max-w-[90%] mx-auto py-6 px-8 flex justify-between items-center">
                    <button 
                        onClick={() => scrollTo('inicio')} 
                        onMouseEnter={() => setHoveredButton('inicio')}
                        onMouseLeave={() => setHoveredButton(null)}
                        className="group relative text-lg font-medium overflow-hidden transition-colors duration-300"
                        style={{ color: '#132A14' }}
                    >
                        <span className="relative block transform transition-transform duration-300 group-hover:-translate-y-full">
                            Inicio
                        </span>
                        <span className="absolute bottom-0 left-0 block transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                            <span className="line-through" style={{ color: '#AD991B' }}>Inicio</span>
                        </span>
                    </button>

                    <button 
                        onClick={() => scrollTo('sobremi')}
                        onMouseEnter={() => setHoveredButton('sobremi')}
                        onMouseLeave={() => setHoveredButton(null)}
                        className="group relative text-lg font-medium overflow-hidden transition-colors duration-300"
                        style={{ color: '#132A14' }}
                    >
                        <span className="relative block transform transition-transform duration-300 group-hover:-translate-y-full">
                            Sobre mí
                        </span>
                        <span className="absolute bottom-0 left-0 block transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                            <span className="line-through" style={{ color: '#AD991B' }}>Sobre mí</span>
                        </span>
                    </button>
                    
                    <button 
                        onClick={() => scrollTo('habilidades')}
                        onMouseEnter={() => setHoveredButton('habilidades')}
                        onMouseLeave={() => setHoveredButton(null)}
                        className="group relative text-lg font-medium overflow-hidden transition-colors duration-300"
                        style={{ color: '#132A14' }}
                    >
                        <span className="relative block transform transition-transform duration-300 group-hover:-translate-y-full">
                            Habilidades
                        </span>
                        <span className="absolute bottom-0 left-0 block transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                            <span className="line-through" style={{ color: '#AD991B' }}>Habilidades</span>
                        </span>
                    </button>

                    <button 
                        onClick={() => scrollTo('proyectos')}
                        onMouseEnter={() => setHoveredButton('proyectos')}
                        onMouseLeave={() => setHoveredButton(null)}
                        className="group relative text-lg font-medium overflow-hidden transition-colors duration-300"
                        style={{ color: '#132A14' }}
                    >
                        <span className="relative block transform transition-transform duration-300 group-hover:-translate-y-full">
                            Proyectos
                        </span>
                        <span className="absolute bottom-0 left-0 block transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                            <span className="line-through" style={{ color: '#AD991B' }}>Proyectos</span>
                        </span>
                    </button>

                    <button 
                        onClick={() => scrollTo('contacto')}
                        onMouseEnter={() => setHoveredButton('contacto')}
                        onMouseLeave={() => setHoveredButton(null)}
                        className="group relative text-lg font-medium overflow-hidden transition-colors duration-300"
                        style={{ color: '#132A14' }}
                    >
                        <span className="relative block transform transition-transform duration-300 group-hover:-translate-y-full">
                            Contacto
                        </span>
                        <span className="absolute bottom-0 left-0 block transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                            <span className="line-through" style={{ color: '#AD991B' }}>Contacto</span>
                        </span>
                    </button>
                </nav>
            </header>
        </div>
    );
};

export default Header;
