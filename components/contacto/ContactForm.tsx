'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaComment } from 'react-icons/fa';

interface ContactFormProps {
    onWheel: (e: React.WheelEvent, scrollRef: React.RefObject<HTMLDivElement>) => void;
    className: string;
    delay: number;
}

const ContactForm: React.FC<ContactFormProps> = ({ onWheel, className, delay }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    return (
        <motion.div
            ref={scrollRef}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay }}
            className={className}
            onWheel={(e) => onWheel(e, scrollRef)}
        >
            <div className="h-full flex flex-col p-8">
                <div className="flex items-center space-x-3 mb-6">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: delay + 0.2 }}
                        className="p-3 rounded-xl"
                        style={{
                            background: 'rgba(173, 153, 27, 0.15)',
                            color: 'var(--primary-100)'
                        }}
                    >
                        <FaComment size={24} />
                    </motion.div>
                    <div>
                        <h3
                            className="text-xl font-bold"
                            style={{ color: 'var(--primary-100)' }}
                        >
                            Envía un Mensaje
                        </h3>
                        <p
                            className="text-sm"
                            style={{ color: 'var(--text-200)' }}
                        >
                            Contacto directo (formulario en desarrollo)
                        </p>
                    </div>
                </div>

                <div className="flex-1 flex flex-col">
                    <form className="space-y-6 flex-1">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium mb-2"
                                style={{ color: 'var(--text-100)' }}
                            >
                                Nombre completo
                            </label>
                            <input
                                type="text"
                                id="name"
                                disabled
                                placeholder="Tu nombre completo"
                                className="w-full px-4 py-3 rounded-lg border transition-all duration-300 disabled:opacity-50"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    borderColor: 'rgba(173, 153, 27, 0.2)',
                                    color: 'var(--text-100)'
                                }}
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium mb-2"
                                style={{ color: 'var(--text-100)' }}
                            >
                                Correo electrónico
                            </label>
                            <input
                                type="email"
                                id="email"
                                disabled
                                placeholder="tu@email.com"
                                className="w-full px-4 py-3 rounded-lg border transition-all duration-300 disabled:opacity-50"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    borderColor: 'rgba(173, 153, 27, 0.2)',
                                    color: 'var(--text-100)'
                                }}
                            />
                        </div>

                        <div className="flex-1">
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium mb-2"
                                style={{ color: 'var(--text-100)' }}
                            >
                                Mensaje
                            </label>
                            <textarea
                                id="message"
                                disabled
                                rows={6}
                                placeholder="Escribe tu mensaje aquí..."
                                className="w-full px-4 py-3 rounded-lg border resize-none transition-all duration-300 disabled:opacity-50"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    borderColor: 'rgba(173, 153, 27, 0.2)',
                                    color: 'var(--text-100)'
                                }}
                            />
                        </div>

                        <motion.button
                            type="button"
                            disabled
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-4 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            style={{
                                background: 'rgba(173, 153, 27, 0.3)',
                                color: 'var(--text-300)'
                            }}
                        >
                            Formulario en desarrollo
                        </motion.button>
                    </form>

                    <div className="mt-4 p-3 rounded-lg" style={{ background: 'rgba(173, 153, 27, 0.1)' }}>
                        <p className="text-xs text-center" style={{ color: 'var(--text-300)' }}>
                            Utiliza los enlaces de contacto de la izquierda para comunicarte
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ContactForm;
