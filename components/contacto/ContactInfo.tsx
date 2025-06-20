'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPhone } from 'react-icons/fa';
import { contactData } from './contactData';
import SocialLink from './SocialLink';

interface ContactInfoProps {
    onWheel: (e: React.WheelEvent, scrollRef: React.RefObject<HTMLDivElement>) => void;
    className: string;
    delay: number;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ onWheel, className, delay }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    return (
        <motion.div
            className={`${className} border rounded-lg cursor-default flex flex-col overflow-hidden`}
            style={{
                background: 'rgba(173, 153, 27, 0.08)',
                borderColor: 'rgba(173, 153, 27, 0.2)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay }}
            onWheel={(e) => onWheel(e, scrollRef)}
        >
            {/* Header - ESTÁTICO */}
            <div className="p-4 pb-0">
                <div className="flex items-center mb-4">
                    <FaPhone className="text-3xl mr-2" style={{ color: 'rgba(173, 153, 27, 0.3)' }} />
                    <h3 className="text-lg font-semibold" style={{ color: '#AD991B' }}>
                        Información de contacto
                    </h3>
                </div>
            </div>

            {/* Contenido con scroll */}
            <div 
                ref={scrollRef}
                className="overflow-y-auto pr-2 custom-scrollbar scroll-smooth p-4 pt-0"
                style={{ minHeight: 0 }}
            >
                {contactData.socialLinks.map((link, index) => (
                    <SocialLink 
                        key={link.name}
                        link={link}
                        index={index}
                        delay={0.6 + index * 0.1}
                    />
                ))}
            </div>
        </motion.div>
    );
};

export default ContactInfo;