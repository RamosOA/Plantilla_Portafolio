import React from 'react';
import {
    FaShoppingBag,
    FaCalendarCheck,
    FaChartBar,
    FaServer
} from 'react-icons/fa';

export const proyectosData = [
    {
        nombre: 'E-commerce Moderno',
        descripcion: 'Plataforma web de comercio electrónico. Desarrollada con React.js y Node.js. Interfaces interactivas, backend funcional y despliegue en la nube.',
        descripcionExtendida: `
            E-commerce moderno es una solución integral para comercio electrónico que revoluciona la experiencia de compra online. 
            Desarrollada con las últimas tecnologías web, ofrece una experiencia de usuario fluida y eficiente.
            
            Características principales:
            • Catálogo de productos con filtros avanzados
            • Carrito de compras inteligente
            • Sistema de usuarios y autenticación
            • Proceso de checkout optimizado
            • Panel de administración completo
            • Gestión de inventario en tiempo real
            • Sistema de reseñas y calificaciones
            • Integración con múltiples pasarelas de pago
            
            La plataforma está optimizada para manejar grandes volúmenes de transacciones,
            garantizando alta disponibilidad y rendimiento excepcional.
        `,
        icono: React.createElement(FaShoppingBag, { className: "text-4xl", style: { color: '#AD991B' } }),
        link: 'https://github.com/tu-usuario/ecommerce-proyecto',
        tecnologias: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Vercel']
    },
    {
        nombre: 'API REST Completa',
        descripcion: 'API robusta con Node.js y Express. Incluye autenticación JWT, documentación con Swagger y tests automatizados.',
        descripcionExtendida: `
            API REST completa desarrollada con Node.js que demuestra las mejores prácticas en desarrollo backend.
            Arquitectura escalable y mantenible para aplicaciones empresariales.
            
            Funcionalidades:
            • Autenticación y autorización JWT
            • CRUD completo para múltiples entidades
            • Validación de datos robusta
            • Documentación automática con Swagger
            • Tests unitarios y de integración
            • Rate limiting y seguridad avanzada
            • Logging y monitoreo
            • Manejo de errores centralizado
            
            El proyecto demuestra dominio de las mejores prácticas en desarrollo de APIs
            y arquitectura de software escalable.
        `,
        icono: React.createElement(FaServer, { className: "text-4xl", style: { color: '#AD991B' } }),
        link: 'https://github.com/tu-usuario/api-rest-completa',
        tecnologias: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Swagger', 'Jest']
    },
    {
        nombre: 'Gestor de Tareas',
        descripcion: 'Aplicación para gestión de tareas y proyectos. Experiencia de usuario dinámica desarrollada con React.js y base de datos moderna.',
        descripcionExtendida: `
            Gestor de tareas es una aplicación robusta diseñada para la gestión integral de proyectos y tareas,
            desde pequeños equipos hasta grandes organizaciones.
            
            Características destacadas:
            • Sistema de proyectos y tareas jerárquico
            • Colaboración en tiempo real
            • Calendario integrado con recordatorios
            • Sistema de notificaciones
            • Reportes y analytics avanzados
            • Integración con herramientas externas
            • Dashboard personalizable
            • Sistema de roles y permisos
            
            La aplicación está diseñada para escalar eficientemente y adaptarse a diferentes
            metodologías de trabajo como Agile, Scrum y Kanban.
        `,
        icono: React.createElement(FaCalendarCheck, { className: "text-4xl", style: { color: '#AD991B' } }),
        link: 'https://github.com/tu-usuario/gestor-tareas',
        tecnologias: ['React.js', 'Redux', 'Node.js', 'PostgreSQL', 'Socket.io', 'AWS']
    },
    {
        nombre: 'Dashboard Analytics',
        descripcion: 'Panel de control con visualización de datos interactiva. Sistema completo con autenticación, gráficos y reportes en tiempo real.',
        descripcionExtendida: `
            Dashboard Analytics es una plataforma avanzada de visualización de datos que transforma información compleja
            en insights accionables través de gráficos interactivos y reportes dinámicos.
            
            Funcionalidades implementadas:
            • Visualización de datos en tiempo real
            • Múltiples tipos de gráficos interactivos
            • Sistema de filtros dinámicos
            • Exportación de reportes
            • Dashboard personalizable
            • Integración con múltiples fuentes de datos
            • Sistema de alertas automatizadas
            • Comparativas históricas
            
            Proyecto que demuestra competencias avanzadas en visualización de datos y
            desarrollo de interfaces complejas para análisis empresarial.
        `,
        icono: React.createElement(FaChartBar, { className: "text-4xl", style: { color: '#AD991B' } }),
        link: 'https://github.com/tu-usuario/dashboard-analytics',
        tecnologias: ['React.js', 'D3.js', 'Chart.js', 'Node.js', 'Express', 'PostgreSQL']
    }
];