'use client';

import React from 'react';

const CustomScrollbar: React.FC = () => {
    return (
        <style jsx>{`
            .custom-scrollbar {
                scrollbar-width: thin;
                scrollbar-color: rgba(173, 153, 27, 0.3) transparent;
            }

            .custom-scrollbar::-webkit-scrollbar {
                width: 8px;
            }

            .custom-scrollbar::-webkit-scrollbar-track {
                background: transparent;
            }

            .custom-scrollbar::-webkit-scrollbar-thumb {
                background: rgba(173, 153, 27, 0.3);
                border-radius: 10px;
                border: 2px solid transparent;
                background-clip: content-box;
            }

            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                background: rgba(173, 153, 27, 0.5);
                background-clip: content-box;
            }

            .custom-scrollbar::-webkit-scrollbar-thumb:active {
                background: rgba(173, 153, 27, 0.7);
                background-clip: content-box;
            }
        `}</style>
    );
};

export default CustomScrollbar;