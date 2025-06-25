'use client';

import React, { useState, useEffect } from 'react';

const Header = () => {
    const [hoveredButton, setHoveredButton] = useState<string | null>(null);
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const checkTheme = () => {
            const theme = document.documentElement.getAttribute('data-theme');
            setIsDark(theme !== 'light');
        };

        checkTheme();

        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme']
        });

        return () => observer.disconnect();
    }, []);

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
                background: isDark 
                    ? 'rgba(60, 60, 60, 0.3)' 
                    : 'rgba(254, 255, 254, 0.9)',
                backdropFilter: 'blur(20px)',
                borderTop: isDark 
                    ? '1px solid rgba(173, 153, 27, 0.2)'
                    : '1px solid rgba(196, 168, 52, 0.3)',
                transition: 'all 0.3s ease'
            }}>
                <nav className="max-w-[90%] mx-auto py-6 px-8 flex justify-between items-center">
                    <button 
                        onClick={() => scrollTo('inicio')} 
                        onMouseEnter={() => setHoveredButton('inicio')}
                        onMouseLeave={() => setHoveredButton(null)}
                        className="group relative text-lg font-medium overflow-hidden transition-colors duration-300"
                        style={{ color: 'var(--text-accent)' }}
                    >
                        <span className="relative block transform transition-transform duration-300 group-hover:-translate-y-full">
                            Inicio
                        </span>
                        <span className="absolute bottom-0 left-0 block transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                            <span className="line-through" style={{ color: 'var(--primary-100)' }}>Inicio</span>
                        </span>
                    </button>

                    <button 
                        onClick={() => scrollTo('sobremi')}
                        onMouseEnter={() => setHoveredButton('sobremi')}
                        onMouseLeave={() => setHoveredButton(null)}
                        className="group relative text-lg font-medium overflow-hidden transition-colors duration-300"
                        style={{ color: 'var(--text-accent)' }}
                    >
                        <span className="relative block transform transition-transform duration-300 group-hover:-translate-y-full">
                            Sobre mí
                        </span>
                        <span className="absolute bottom-0 left-0 block transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                            <span className="line-through" style={{ color: 'var(--primary-100)' }}>Sobre mí</span>
                        </span>
                    </button>
                    
                    <button 
                        onClick={() => scrollTo('habilidades')}
                        onMouseEnter={() => setHoveredButton('habilidades')}
                        onMouseLeave={() => setHoveredButton(null)}
                        className="group relative text-lg font-medium overflow-hidden transition-colors duration-300"
                        style={{ color: 'var(--text-accent)' }}
                    >
                        <span className="relative block transform transition-transform duration-300 group-hover:-translate-y-full">
                            Habilidades
                        </span>
                        <span className="absolute bottom-0 left-0 block transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                            <span className="line-through" style={{ color: 'var(--primary-100)' }}>Habilidades</span>
                        </span>
                    </button>

                    <button 
                        onClick={() => scrollTo('proyectos')}
                        onMouseEnter={() => setHoveredButton('proyectos')}
                        onMouseLeave={() => setHoveredButton(null)}
                        className="group relative text-lg font-medium overflow-hidden transition-colors duration-300"
                        style={{ color: 'var(--text-accent)' }}
                    >
                        <span className="relative block transform transition-transform duration-300 group-hover:-translate-y-full">
                            Proyectos
                        </span>
                        <span className="absolute bottom-0 left-0 block transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                            <span className="line-through" style={{ color: 'var(--primary-100)' }}>Proyectos</span>
                        </span>
                    </button>

                    <button 
                        onClick={() => scrollTo('contacto')}
                        onMouseEnter={() => setHoveredButton('contacto')}
                        onMouseLeave={() => setHoveredButton(null)}
                        className="group relative text-lg font-medium overflow-hidden transition-colors duration-300"
                        style={{ color: 'var(--text-accent)' }}
                    >
                        <span className="relative block transform transition-transform duration-300 group-hover:-translate-y-full">
                            Contacto
                        </span>
                        <span className="absolute bottom-0 left-0 block transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                            <span className="line-through" style={{ color: 'var(--primary-100)' }}>Contacto</span>
                        </span>
                    </button>
                </nav>
            </header>
        </div>
    );
};

export default Header;
