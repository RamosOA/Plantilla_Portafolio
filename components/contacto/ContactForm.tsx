'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaComment, FaPaperPlane, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

interface ContactFormProps {
    onWheel: (e: React.WheelEvent, scrollRef: React.RefObject<HTMLDivElement>) => void;
    className: string;
    delay: number;
}

interface FormData {
    name: string;
    email: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ onWheel, className, delay }) => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const scrollRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLFormElement>(null);

    // Validación de email
    const isValidEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Validar campos
    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        // Validar nombre
        if (!formData.name.trim()) {
            newErrors.name = 'El nombre es obligatorio';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'El nombre debe tener al menos 2 caracteres';
        }

        // Validar email
        if (!formData.email.trim()) {
            newErrors.email = 'El email es obligatorio';
        } else if (!isValidEmail(formData.email)) {
            newErrors.email = 'Por favor ingresa un email válido';
        }

        // Validar mensaje
        if (!formData.message.trim()) {
            newErrors.message = 'El mensaje es obligatorio';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Limpiar error del campo cuando el usuario empiece a escribir
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({
                ...prev,
                [name]: undefined
            }));
        }

        // Limpiar estado de envío si hay cambios
        if (submitStatus !== 'idle') {
            setSubmitStatus('idle');
            setErrorMessage('');
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Validar formulario
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name.trim(),
                    email: formData.email.trim(),
                    message: formData.message.trim()
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setErrors({});
                
                // Scroll hacia arriba para mostrar el mensaje de éxito
                if (scrollRef.current) {
                    scrollRef.current.scrollTop = 0;
                }
            } else {
                setSubmitStatus('error');
                setErrorMessage(data.error || 'Error al enviar el mensaje');
            }

        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            setSubmitStatus('error');
            setErrorMessage('Error de conexión. Por favor intenta de nuevo.');
        } finally {
            setIsSubmitting(false);
        }
    };

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
            {/* Header del formulario - ESTÁTICO */}
            <div className="p-4 pb-0">
                <div className="flex items-center mb-4">
                    <FaComment className="text-3xl mr-2" style={{ color: 'rgba(173, 153, 27, 0.3)' }} />
                    <h3 className="text-lg font-semibold" style={{ color: '#AD991B' }}>
                        Envíame un mensaje
                    </h3>
                </div>
            </div>

            {/* Área con scroll */}
            <div 
                ref={scrollRef}
                className="overflow-y-auto pr-2 custom-scrollbar scroll-smooth p-4 pt-0"
                style={{ minHeight: 0 }}
                suppressHydrationWarning={true}
            >
                {/* Mensajes de estado */}
                {submitStatus === 'success' && (
                    <motion.div 
                        className="mb-4 p-3 rounded-lg flex items-center gap-2"
                        style={{ 
                            background: 'rgba(34, 197, 94, 0.1)',
                            border: '1px solid rgba(34, 197, 94, 0.3)',
                            color: '#22c55e'
                        }}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        suppressHydrationWarning={true}
                    >
                        <FaCheckCircle />
                        <span className="text-sm">¡Mensaje enviado correctamente! Te responderé pronto.</span>
                    </motion.div>
                )}

                {submitStatus === 'error' && (
                    <motion.div 
                        className="mb-4 p-3 rounded-lg flex items-center gap-2"
                        style={{ 
                            background: 'rgba(239, 68, 68, 0.1)',
                            border: '1px solid rgba(239, 68, 68, 0.3)',
                            color: '#ef4444'
                        }}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        suppressHydrationWarning={true}
                    >
                        <FaExclamationTriangle />
                        <span className="text-sm">{errorMessage || 'Error al enviar el mensaje. Por favor intenta de nuevo.'}</span>
                    </motion.div>
                )}

                {/* Texto introductorio */}
                <motion.div 
                    className="mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <p 
                        className="text-sm leading-relaxed"
                        style={{ color: '#e0e0e0' }}
                    >
                        ¿Tienes un proyecto en mente? ¿Necesitas ayuda con desarrollo web? 
                        No dudes en contactarme. Estoy siempre disponible para nuevas oportunidades 
                        y colaboraciones interesantes.
                    </p>
                </motion.div>

                {/* Formulario */}
                <form ref={formRef} onSubmit={handleSubmit}>
                    {/* Campo Nombre */}
                    <div className="mb-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Tu nombre *"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none ${
                                errors.name ? 'border-red-500' : ''
                            }`}
                            style={{
                                background: 'rgba(173, 153, 27, 0.05)',
                                border: `2px solid ${errors.name ? '#ef4444' : 'rgba(173, 153, 27, 0.2)'}`,
                                color: '#FFFFFF'
                            }}
                            onFocus={(e) => {
                                if (!errors.name) {
                                    e.target.style.borderColor = '#AD991B';
                                    e.target.style.boxShadow = '0 0 20px rgba(173, 153, 27, 0.2)';
                                }
                            }}
                            onBlur={(e) => {
                                if (!errors.name) {
                                    e.target.style.borderColor = 'rgba(173, 153, 27, 0.2)';
                                    e.target.style.boxShadow = 'none';
                                }
                            }}
                        />
                        {errors.name && (
                            <motion.p 
                                className="mt-1 text-xs"
                                style={{ color: '#ef4444' }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                suppressHydrationWarning={true}
                            >
                                {errors.name}
                            </motion.p>
                        )}
                    </div>

                    {/* Campo Email */}
                    <div className="mb-4">
                        <input
                            type="email"
                            name="email"
                            placeholder="Tu email *"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none ${
                                errors.email ? 'border-red-500' : ''
                            }`}
                            style={{
                                background: 'rgba(173, 153, 27, 0.05)',
                                border: `2px solid ${errors.email ? '#ef4444' : 'rgba(173, 153, 27, 0.2)'}`,
                                color: '#FFFFFF'
                            }}
                            onFocus={(e) => {
                                if (!errors.email) {
                                    e.target.style.borderColor = '#AD991B';
                                    e.target.style.boxShadow = '0 0 20px rgba(173, 153, 27, 0.2)';
                                }
                            }}
                            onBlur={(e) => {
                                if (!errors.email) {
                                    e.target.style.borderColor = 'rgba(173, 153, 27, 0.2)';
                                    e.target.style.boxShadow = 'none';
                                }
                            }}
                        />
                        {errors.email && (
                            <motion.p 
                                className="mt-1 text-xs"
                                style={{ color: '#ef4444' }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                suppressHydrationWarning={true}
                            >
                                {errors.email}
                            </motion.p>
                        )}
                    </div>

                    {/* Campo Mensaje */}
                    <div className="mb-4">
                        <textarea
                            name="message"
                            placeholder="Tu mensaje *"
                            value={formData.message}
                            onChange={handleChange}
                            rows={8}
                            className={`w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none resize-none ${
                                errors.message ? 'border-red-500' : ''
                            }`}
                            style={{
                                background: 'rgba(173, 153, 27, 0.05)',
                                border: `2px solid ${errors.message ? '#ef4444' : 'rgba(173, 153, 27, 0.2)'}`,
                                color: '#FFFFFF'
                            }}
                            onFocus={(e) => {
                                if (!errors.message) {
                                    e.target.style.borderColor = '#AD991B';
                                    e.target.style.boxShadow = '0 0 20px rgba(173, 153, 27, 0.2)';
                                }
                            }}
                            onBlur={(e) => {
                                if (!errors.message) {
                                    e.target.style.borderColor = 'rgba(173, 153, 27, 0.2)';
                                    e.target.style.boxShadow = 'none';
                                }
                            }}
                        />
                        {errors.message && (
                            <motion.p 
                                className="mt-1 text-xs"
                                style={{ color: '#ef4444' }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                suppressHydrationWarning={true}
                            >
                                {errors.message}
                            </motion.p>
                        )}
                    </div>

                    {/* Botón de envío */}
                    <div className="mb-4">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                                isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'
                            }`}
                            style={{
                                background: isSubmitting 
                                    ? 'rgba(173, 153, 27, 0.5)' 
                                    : 'linear-gradient(135deg, #AD991B 0%, #8e7d00 100%)',
                                color: '#132A14',
                                boxShadow: '0 4px 15px rgba(173, 153, 27, 0.3)'
                            }}
                            suppressHydrationWarning={true}
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="animate-spin w-5 h-5 border-2 border-current border-t-transparent rounded-full" />
                                    <span>Enviando...</span>
                                </>
                            ) : (
                                <>
                                    <FaPaperPlane />
                                    <span>Enviar Mensaje</span>
                                </>
                            )}
                        </button>
                    </div>

                    {/* Nota de campos obligatorios */}
                    <div className="mb-4">
                        <p className="text-xs" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                            * Campos obligatorios
                        </p>
                    </div>
                </form>
            </div>
        </motion.div>
    );
};

export default ContactForm;