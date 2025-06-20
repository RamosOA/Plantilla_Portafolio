'use client';

import React from 'react';

interface ProjectHeaderProps {
    icono: React.ReactNode;
    nombre: string;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ icono, nombre }) => {
    const getHeaderStyles = (nombre: string) => {
        switch (nombre) {
            case 'Comercol':
                return {
                    iconSize: 'text-3xl',
                    titleSize: 'text-lg',
                    margin: 'mb-4'
                };
            case 'AdBlocker para Chrome':
                return {
                    iconSize: 'text-3xl',
                    titleSize: 'text-lg',
                    margin: 'mb-4'
                };
            case 'Websepudo':
                return {
                    iconSize: 'text-3xl',
                    titleSize: 'text-lg',
                    margin: 'mb-4'
                };
            case 'E-commerce Bikers':
                return {
                    iconSize: 'text-3xl',
                    titleSize: 'text-lg',
                    margin: 'mb-4'
                };
            default:
                return {
                    iconSize: 'text-3xl',
                    titleSize: 'text-lg',
                    margin: 'mb-4'
                };
        }
    };

    const styles = getHeaderStyles(nombre);

    return (
        <div className={`flex items-center ${styles.margin}`}>
            <div className={`${styles.iconSize} mr-2`} style={{ color: 'rgba(173, 153, 27, 0.3)' }}>
                {icono}
            </div>
            <h3 
                className={`${styles.titleSize} font-semibold`}
                style={{ color: '#AD991B' }}
            >
                {nombre}
            </h3>
        </div>
    );
};

export default ProjectHeader;