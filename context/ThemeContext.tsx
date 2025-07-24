'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeContextType = {
    isDark: boolean;
    toggleTheme: () => void;
    mounted: boolean;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [isDark, setIsDark] = useState(true);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        
        // Only access localStorage after mounting
        try {
            const savedTheme = localStorage.getItem('theme');
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            
            if (savedTheme) {
                setIsDark(savedTheme === 'dark');
            } else {
                setIsDark(prefersDark);
            }
        } catch (error) {
            console.warn('Error accessing localStorage or window:', error);
            setIsDark(true); // fallback to dark theme
        }
    }, []);

    const toggleTheme = () => {
        if (!mounted) return;
        
        const newTheme = !isDark;
        setIsDark(newTheme);
        
        try {
            localStorage.setItem('theme', newTheme ? 'dark' : 'light');
        } catch (error) {
            console.warn('Error saving theme to localStorage:', error);
        }
    };

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme, mounted }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};