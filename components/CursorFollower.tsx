
'use client';

import React, { useEffect, useState } from 'react';

const CursorFollower = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        const checkTouchDevice = () => {
            setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
        };
        
        checkTouchDevice();
        
        if (isTouchDevice) return;
        
        const initPosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setCursorPosition({ x: e.clientX, y: e.clientY });
            window.removeEventListener('mousemove', initPosition);
        };
        window.addEventListener('mousemove', initPosition);

        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isInteractive = Boolean(
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.closest('button') ||
                target.closest('a') ||
                target.hasAttribute('role')
            );
            setIsHovering(isInteractive);
        };

        let animationFrameId: number;

        const animateCursor = () => {
            setCursorPosition(prev => ({
                x: prev.x + (position.x - prev.x) * 0.05, 
                y: prev.y + (position.y - prev.y) * 0.05  
            }));
            animationFrameId = requestAnimationFrame(animateCursor);
        };

        window.addEventListener('mousemove', updatePosition);
        window.addEventListener('mouseover', handleMouseOver);
        animationFrameId = requestAnimationFrame(animateCursor);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            window.removeEventListener('mouseover', handleMouseOver);
            cancelAnimationFrame(animationFrameId);
        };
    }, [position, isTouchDevice]);

    if (isTouchDevice) {
        return null;
    }

    return (
        <div
            className="fixed pointer-events-none z-[100] mix-blend-difference"
            style={{
                left: `${cursorPosition.x}px`,
                top: `${cursorPosition.y}px`,
                transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
                transition: 'transform 0.3s ease-out',
                willChange: 'transform',
            }}
        >
            <div className="relative">
                <div
                    className="w-4 h-4 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                        background: '#00F0FF', // Azul eléctrico
                        boxShadow: '0 0 20px rgba(173, 153, 27, 0.6)'
                    }}
                >
                    {isHovering && (
                        <div
                            className="text-xs opacity-100 transition-opacity duration-300"
                            style={{
                                color: '#1F2833', // Gris grafito suave
                                pointerEvents: 'none',
                                transform: 'rotate(315deg)'
                            }}
                        >
                            →
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CursorFollower;