'use client';

import React, { useState, useEffect } from 'react';

const Header = () => {
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

    const createButton = (text: string, onClick: () => void) => (
        <button 
            onClick={onClick} 
            className="group relative text-sm md:text-lg font-medium overflow-hidden"
            style={{ 
                color: isDark ? '#C6A700' : '#666666',
                padding: '8px 16px',
                borderRadius: '14px',
                background: isDark 
                    ? 'linear-gradient(145deg, #2A2A2F 0%, #1F1F23 50%, #121214 100%)'
                    : 'linear-gradient(145deg, #F8F9FA 0%, #FFFFFF 50%, #F0F0F0 100%)',
                boxShadow: isDark 
                    ? '12px 12px 20px rgba(0, 0, 0, 0.9), -12px -12px 20px rgba(100, 100, 105, 0.4)'
                    : '8px 8px 16px rgba(163, 177, 198, 0.6), -8px -8px 16px rgba(255, 255, 255, 0.9)',
                border: isDark ? '2px solid rgba(120, 120, 125, 0.4)' : '2px solid rgba(198, 167, 0, 0.3)',
                transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 30px rgba(198, 167, 0, 0.6), 16px 16px 32px rgba(0, 0, 0, 0.95), -16px -16px 32px rgba(120, 120, 125, 0.6)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #C6A700, #50C878)';
                e.currentTarget.style.color = '#000000';
                e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
                e.currentTarget.style.borderColor = 'rgba(198, 167, 0, 0.8)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = isDark 
                    ? '12px 12px 20px rgba(0, 0, 0, 0.9), -12px -12px 20px rgba(100, 100, 105, 0.4)'
                    : '8px 8px 16px rgba(163, 177, 198, 0.6), -8px -8px 16px rgba(255, 255, 255, 0.9)';
                e.currentTarget.style.background = isDark 
                    ? 'linear-gradient(145deg, #2A2A2F 0%, #1F1F23 50%, #121214 100%)'
                    : 'linear-gradient(145deg, #F8F9FA 0%, #FFFFFF 50%, #F0F0F0 100%)';
                e.currentTarget.style.color = isDark ? '#C6A700' : '#666666';
                e.currentTarget.style.transform = 'translateY(0px) scale(1)';
                e.currentTarget.style.borderColor = isDark ? 'rgba(120, 120, 125, 0.4)' : 'rgba(198, 167, 0, 0.3)';
            }}
        >
            <span className="relative block transform transition-transform duration-300 group-hover:-translate-y-full">
                {text}
            </span>
            <span className="absolute bottom-0 left-0 block transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                <span className="line-through" style={{ color: '#000000' }}>{text}</span>
            </span>
            
            {/* Partículas decorativas */}
            <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                 style={{ background: '#50C878' }}
            />
            <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                 style={{ background: '#C6A700' }}
            />
        </button>
    );

    const scrollTo = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            // Check if we're on mobile (viewport width <= 768px)
            const isMobile = window.innerWidth <= 768;
            
            if (isMobile) {
                // Mobile: scroll vertically
                section.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } else {
                // Desktop: scroll horizontally
                window.scrollTo({
                    left: section.offsetLeft,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <div className="w-screen h-screen overflow-x-auto overflow-y-hidden scrollbar-hide">
            <header className="fixed bottom-0 left-0 right-0 z-50 hide-mobile" style={{
                background: isDark 
                    ? 'linear-gradient(145deg, #2A2A2F 0%, #1F1F23 50%, #121214 100%)'
                    : 'linear-gradient(145deg, #FFFFFF 0%, #F8F9FA 50%, #F0F0F0 100%)',
                backdropFilter: 'blur(25px)',
                borderTop: '3px solid #C6A700',
                borderRadius: '24px 24px 0 0',
                boxShadow: isDark 
                    ? `
                        -16px -16px 32px rgba(0, 0, 0, 0.95),
                        16px -16px 32px rgba(120, 120, 125, 0.6),
                        inset 0 0 0 2px rgba(198, 167, 0, 0.15),
                        0 0 0 1px rgba(80, 80, 85, 0.3)
                    `
                    : `
                        -12px -12px 24px rgba(163, 177, 198, 0.6),
                        12px -12px 24px rgba(255, 255, 255, 0.9),
                        inset 0 0 0 2px rgba(198, 167, 0, 0.15),
                        0 0 20px rgba(198, 167, 0, 0.3)
                    `,
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                border: isDark ? '2px solid rgba(120, 120, 125, 0.5)' : '2px solid rgba(198, 167, 0, 0.3)'
            }}>                <nav className="max-w-[90%] mx-auto py-4 px-6 flex justify-between items-center">
                    {createButton("Inicio", () => scrollTo('inicio'))}
                    {createButton("Sobre mí", () => scrollTo('sobremi'))}
                    {createButton("Habilidades", () => scrollTo('habilidades'))}
                    {createButton("Proyectos", () => scrollTo('proyectos'))}
                    {createButton("Contacto", () => scrollTo('contacto'))}
                </nav>
            </header>
        </div>
    );
};

export default Header;
