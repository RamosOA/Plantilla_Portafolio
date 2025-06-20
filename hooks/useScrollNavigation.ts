'use client';

import { useCallback } from 'react';

export const useScrollNavigation = () => {
    const scrollToSection = useCallback((sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'start'
            });
        }
    }, []);

    return { scrollToSection };
};