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
            <div 
                className={`${styles.iconSize} mr-2`} 
                style={{ 
                    color: 'var(--primary-200)',
                    filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))',
                    fontWeight: 'bold'
                }}
            >
                {icono}
            </div>
            <h3 
                className={`${styles.titleSize} font-semibold`}
                style={{ color: 'var(--primary-100)' }}
            >
                {nombre}
            </h3>
        </div>
    );
};

export default ProjectHeader;