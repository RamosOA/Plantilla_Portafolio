'use client';

import React from 'react';

const CustomScrollbar: React.FC = () => {
    return (
        <style jsx>{`
            .custom-scrollbar::-webkit-scrollbar {
                width: 6px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
                background: rgba(173, 153, 27, 0.05);
                border-radius: 3px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
                background: rgba(173, 153, 27, 0.2);
                border-radius: 3px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                background: rgba(173, 153, 27, 0.35);
            }
        `}</style>
    );
};

export default CustomScrollbar;
