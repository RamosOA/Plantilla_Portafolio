'use client';

import React from 'react';

const CustomScrollbar: React.FC = () => {
    return (
        <style jsx>{`
            
            .custom-scrollbar {
                
                scrollbar-width: thin;
                scrollbar-color: color-mix(in srgb, var(--primary-100) 25%, transparent) color-mix(in srgb, var(--primary-100) 8%, transparent);
            }
            
            
            .custom-scrollbar::-webkit-scrollbar {
                width: 6px;
            }
            
            .custom-scrollbar::-webkit-scrollbar-track {
                background: color-mix(in srgb, var(--primary-100) 5%, transparent);
                border-radius: 3px;
            }
            
            .custom-scrollbar::-webkit-scrollbar-thumb {
                background: color-mix(in srgb, var(--primary-100) 20%, transparent);
                border-radius: 3px;
                border: 1px solid color-mix(in srgb, var(--primary-100) 10%, transparent);
            }
            
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                background: color-mix(in srgb, var(--primary-100) 35%, transparent);
                border-color: color-mix(in srgb, var(--primary-100) 20%, transparent);
            }

            
            :root[data-theme="light"] .custom-scrollbar {
                scrollbar-color: color-mix(in srgb, var(--primary-200) 40%, transparent) color-mix(in srgb, var(--primary-100) 15%, transparent);
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
