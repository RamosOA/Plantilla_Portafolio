'use client';

import React from 'react';

interface TechTagsProps {
    tecnologias: string[];
}

const TechTags: React.FC<TechTagsProps> = ({ tecnologias }) => {
    const getTagStyles = (tecnologias: string[]) => {
        if (tecnologias.length > 4) {
            return {
                containerGap: 'gap-1',
                tagSize: 'text-xs',
                padding: 'px-2 py-1'
            };
        }
        return {
            containerGap: 'gap-2',
            tagSize: 'text-sm',
            padding: 'px-3 py-1'
        };
    };

    const styles = getTagStyles(tecnologias);

    return (
        <div className={`flex flex-wrap ${styles.containerGap}`}>
            {tecnologias.map((tech, index) => (
                <div key={index} className="mb-2">
                    <span
                        className={`${styles.padding} rounded-full ${styles.tagSize} font-medium inline-block`}
                        style={{
                            background: 'rgba(173, 153, 27, 0.1)',
                            color: '#AD991B',
                            border: '1px solid rgba(173, 153, 27, 0.2)'
                        }}
                    >
                        {tech}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default TechTags;