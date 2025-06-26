'use client';

import { useCallback } from 'react';

export const useScrollNavigation = () => {
    const scrollToSection = useCallback((sectionId: string) => {
        const section = document.getElementById(sectionId);
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
    }, []);

    return { scrollToSection };
};