'use client';

import React from 'react';

const CustomScrollbar: React.FC = () => {
    return (
        <style jsx>{`
            
            .custom-scrollbar {
                
                scrollbar-width: thin;
                scrollbar-color: color-mix(in srgb, var(--primary-100) 40%, transparent) color-mix(in srgb, var(--primary-100) 10%, transparent);
                padding-right: 4px;
            }
            
            
            .custom-scrollbar::-webkit-scrollbar {
                width: 10px;
            }
            
            .custom-scrollbar::-webkit-scrollbar-track {
                background: color-mix(in srgb, var(--primary-100) 12%, transparent);
                border-radius: 5px;
                border: 1px solid color-mix(in srgb, var(--primary-100) 15%, transparent);
                margin: 2px;
            }
            
            .custom-scrollbar::-webkit-scrollbar-thumb {
                background: linear-gradient(180deg, var(--accent-100), var(--accent-200));
                border-radius: 5px;
                border: 1px solid color-mix(in srgb, var(--primary-100) 20%, transparent);
                box-shadow: 0 2px 6px rgba(0,0,0,0.2);
                transition: all 0.3s ease;
            }
            
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                background: linear-gradient(180deg, var(--accent-200), var(--accent-100));
                border-color: color-mix(in srgb, var(--primary-100) 35%, transparent);
                box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                transform: scale(1.1);
            }

            
            :root[data-theme="light"] .custom-scrollbar {
                scrollbar-color: color-mix(in srgb, var(--primary-200) 50%, transparent) color-mix(in srgb, var(--primary-100) 20%, transparent);
            }

            :root[data-theme="light"] .custom-scrollbar::-webkit-scrollbar-track {
                background: color-mix(in srgb, var(--primary-100) 10%, transparent);
            }
            
            :root[data-theme="light"] .custom-scrollbar::-webkit-scrollbar-thumb {
                background: color-mix(in srgb, var(--primary-200) 30%, transparent);
                border-color: color-mix(in srgb, var(--primary-200) 15%, transparent);
            }
            
            :root[data-theme="light"] .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                background: color-mix(in srgb, var(--primary-200) 45%, transparent);
                border-color: color-mix(in srgb, var(--primary-200) 25%, transparent);
            }
        `}</style>
    );
};

export default CustomScrollbar;
