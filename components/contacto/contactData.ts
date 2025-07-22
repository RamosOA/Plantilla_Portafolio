import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

export const contactData = {
    socialLinks: [
        { 
            name: 'Email',
            icon: FaEnvelope,
            href: 'mailto:tu.email@ejemplo.com',
            color: '#00F0FF', // Azul eléctrico
            info: 'tu.email@ejemplo.com'
        },
        { 
            name: 'LinkedIn',
            icon: FaLinkedin,
            href: 'https://linkedin.com/in/tu-perfil-linkedin',
            color: '#00CDDB', // Azul eléctrico hover
            info: 'tu-perfil-linkedin'
        },
        { 
            name: 'GitHub',
            icon: FaGithub,
            href: 'https://github.com/tu-usuario-github',
            color: '#00F0FF', // Azul eléctrico
            info: 'tu-usuario-github'
        },
        { 
            name: 'WhatsApp',
            icon: FaWhatsapp,
            href: 'https://wa.me/1234567890',
            color: '#00CDDB', // Azul eléctrico hover
            info: '+1 234 567 890'
        }
    ]
};