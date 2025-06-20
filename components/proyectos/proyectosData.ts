import React from 'react';
import {
    FaTruck,
    FaCalendarCheck,
    FaShoppingBag,
    FaShieldAlt
} from 'react-icons/fa';

export const proyectosData = [
    {
        nombre: 'Comercol',
        descripcion: 'Plataforma web para empresa de logística. Desarrollada con React.js y Node.js. Interfaces interactivas, backend funcional y despliegue en Vercel.',
        descripcionExtendida: `
            Comercol es una solución integral para empresas de logística que revoluciona la gestión de envíos y distribución. 
            Desarrollada con las últimas tecnologías web, ofrece una experiencia de usuario fluida y eficiente.
            
            Características principales:
            • Panel de administración completo
            • Seguimiento en tiempo real de envíos
            • Integración con sistemas de pago
            • Dashboard con métricas y análisis
            • Sistema de notificaciones automáticas
            • API REST para integraciones externas
            
            La plataforma está optimizada para manejar grandes volúmenes de datos y transacciones simultáneas,
            garantizando alta disponibilidad y rendimiento excepcional.
        `,
        icono: React.createElement(FaTruck, { className: "text-4xl", style: { color: '#AD991B' } }),
        link: 'https://github.com/srueda99/Comercol',
        tecnologias: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Vercel']
    },
    {
        nombre: 'AdBlocker para Chrome',
        descripcion: 'Extensión de navegador en JavaScript puro para bloquear anuncios. Proyecto personal funcional y educativo.',
        descripcionExtendida: `
            Extensión avanzada para Chrome que bloquea anuncios de manera eficiente y personalizable.
            Desarrollada completamente en JavaScript vanilla para máximo rendimiento.
            
            Funcionalidades:
            • Bloqueo de anuncios por patrones
            • Lista blanca personalizable
            • Contador de anuncios bloqueados
            • Interfaz minimalista
            • Configuración por sitio web
            • Actualización automática de filtros
            
            El proyecto demuestra dominio de las Chrome Extension APIs y técnicas avanzadas
            de manipulación del DOM para interceptar y bloquear contenido publicitario.
        `,
        icono: React.createElement(FaShieldAlt, { className: "text-4xl", style: { color: '#AD991B' } }),
        link: 'https://github.com/RamosOA/AdBlocker',
        tecnologias: ['JavaScript', 'Chrome API', 'Manifest V3', 'DOM Manipulation']
    },
    {
        nombre: 'Websepudo',
        descripcion: 'Plataforma para gestión de eventos masivos. Experiencia de usuario dinámica desarrollada con React.js.',
        descripcionExtendida: `
            Websepudo es una plataforma robusta diseñada para la gestión integral de eventos masivos,
            desde pequeñas reuniones hasta grandes conferencias y festivales.
            
            Características destacadas:
            • Sistema de registro y ticketing
            • Gestión de asistentes y ponentes
            • Calendario de eventos interactivo
            • Sistema de check-in digital
            • Reportes y analytics en tiempo real
            • Integración con redes sociales
            • Notificaciones push y email
            
            La plataforma está diseñada para escalar eficientemente y manejar miles de usuarios
            concurrentes durante eventos de alta demanda.
        `,
        icono: React.createElement(FaCalendarCheck, { className: "text-4xl", style: { color: '#AD991B' } }),
        link: 'https://github.com/Cristian-Usme/websepudo',
        tecnologias: ['React.js', 'Redux', 'Node.js', 'PostgreSQL', 'Socket.io', 'AWS']
    },
    {
        nombre: 'E-commerce Bikers',
        descripcion: 'Tienda online completa con carrito, gestión de usuarios y checkout. Proyecto académico del bootcamp Digital House.',
        descripcionExtendida: `
            E-commerce especializado en productos para motociclistas, desarrollado como proyecto final
            del bootcamp de Digital House. Una tienda online completa con todas las funcionalidades modernas.
            
            Funcionalidades implementadas:
            • Catálogo de productos con filtros avanzados
            • Carrito de compras persistente
            • Sistema de usuarios y autenticación
            • Proceso de checkout completo
            • Panel de administración
            • Gestión de inventario
            • Sistema de reseñas y calificaciones
            • Integración con pasarelas de pago
            
            Proyecto que demuestra competencias full-stack y buenas prácticas de desarrollo
            en un entorno de e-commerce real.
        `,
        icono: React.createElement(FaShoppingBag, { className: "text-4xl", style: { color: '#AD991B' } }),
        link: 'https://github.com/RamosOA/Grupo-2-Bikers',
        tecnologias: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Express', 'MySQL', 'Sequelize']
    }
];