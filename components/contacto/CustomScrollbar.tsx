'use client';

import React from 'react';

const CustomScrollbar: React.FC = () => {
    return (
        <style jsx>{`
            .custom-scrollbar {
                scrollbar-width: thin;
                scrollbar-color: color-mix(in srgb, var(--primary-100) 30%, transparent) transparent;
            }

            .custom-scrollbar::-webkit-scrollbar {
                width: 8px;
            }

            .custom-scrollbar::-webkit-scrollbar-track {
                background: transparent;
            }

            .custom-scrollbar::-webkit-scrollbar-thumb {
                background: color-mix(in srgb, var(--primary-100) 30%, transparent);
                border-radius: 10px;
                border: 2px solid transparent;
                background-clip: content-box;
            }

            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                background: color-mix(in srgb, var(--primary-100) 50%, transparent);
                background-clip: content-box;
            }

            .custom-scrollbar::-webkit-scrollbar-thumb:active {
                background: color-mix(in srgb, var(--primary-100) 70%, transparent);
                background-clip: content-box;
            }
        `}</style>
    );
};

export default CustomScrollbar;