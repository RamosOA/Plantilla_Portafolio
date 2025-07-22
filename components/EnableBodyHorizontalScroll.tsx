'use client';

import { useEffect } from 'react';

export default function EnableBodyHorizontalScroll() {
    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            const isMobile = window.innerWidth <= 768 || 'ontouchstart' in window;
            
            if (!isMobile) {
                e.preventDefault();
                window.scrollBy({
                    left: e.deltaY * 3,
                    behavior: 'smooth'
                });
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, []);

    return null;
}