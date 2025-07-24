'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser, FaHeart, FaQuoteLeft } from 'react-icons/fa';
import { personalInfo, interests } from '../sobremi/aboutData';

const MobileSobreMiSection = () => {
    const [activeTab, setActiveTab] = useState<'info' | 'interests' | 'philosophy'>('info');

    const tabs = [
        { id: 'info', label: 'Info', icon: FaUser, emoji: '👤' },
        { id: 'interests', label: 'Intereses', icon: FaHeart, emoji: '❤️' },
        { id: 'philosophy', label: 'Filosofía', icon: FaQuoteLeft, emoji: '💭' }
    ];

    const philosophy = {
        title: "Mi Filosofía de Desarrollo",
        content: `Creo firmemente en el poder de la tecnología para transformar ideas en realidades digitales que impacten positivamente a las personas.

Cada línea de código que escribo está pensada no solo en su funcionalidad, sino en la experiencia que brindará al usuario final.

El aprendizaje continuo es mi motor principal. En un mundo tecnológico que evoluciona constantemente, mantenerse actualizado no es opcional, es esencial.

Valoro la colaboración y el trabajo en equipo, porque las mejores soluciones nacen del intercambio de ideas y perspectivas diversas.`,
        principles: [
            "Código limpio y mantenible",
            "Experiencia de usuario primero",
            "Aprendizaje continuo",
            "Innovación constante",
            "Trabajo colaborativo"
        ]
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'info':
                return (
                    <div className="space-y-4">
                        {personalInfo.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="border rounded-lg p-4"
                                style={{
                                    background: 'rgba(173, 153, 27, 0.08)',
                                    borderColor: 'rgba(173, 153, 27, 0.2)'
                                }}
                            >
                                <div className="flex items-start space-x-3">
                                    <item.icon
                                        className="text-lg mt-1 flex-shrink-0"
                                        style={{ color: 'var(--primary-100)' }}
                                    />
                                    <div className="flex-1 min-w-0">
                                        <h3
                                            className="font-semibold text-sm mb-1"
                                            style={{ color: 'var(--text-100)' }}
                                        >
                                            {item.label}
                                        </h3>
                                        <p
                                            className="text-sm leading-relaxed"
                                            style={{ color: 'var(--text-200)' }}
                                        >
                                            {item.value}
                                        </p>
                                        {item.additional && (
                                            <p
                                                className="text-xs mt-1 leading-relaxed"
                                                style={{ color: 'var(--text-300)' }}
                                            >
                                                {item.additional}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                );

            case 'interests':
                return (
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-3">
                            {interests.map((interest, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    className="border rounded-lg p-3 text-center"
                                    style={{
                                        background: 'rgba(173, 153, 27, 0.08)',
                                        borderColor: 'rgba(173, 153, 27, 0.2)'
                                    }}
                                >
                                    <span
                                        className="text-xs font-medium"
                                        style={{ color: 'var(--text-200)' }}
                                    >
                                        {interest}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                );

            case 'philosophy':
                return (
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="border rounded-lg p-4"
                            style={{
                                background: 'rgba(173, 153, 27, 0.08)',
                                borderColor: 'rgba(173, 153, 27, 0.2)'
                            }}
                        >
                            <h3
                                className="font-bold text-lg mb-3"
                                style={{ color: 'var(--primary-100)' }}
                            >
                                {philosophy.title}
                            </h3>
                            <p
                                className="text-sm leading-relaxed whitespace-pre-line mb-4"
                                style={{ color: 'var(--text-200)' }}
                            >
                                {philosophy.content}
                            </p>

                            <div className="space-y-2">
                                <h4
                                    className="font-semibold text-sm"
                                    style={{ color: 'var(--text-100)' }}
                                >
                                    Principios clave:
                                </h4>
                                {philosophy.principles.map((principle, index) => (
                                    <div key={index} className="flex items-center space-x-2">
                                        <div
                                            className="w-2 h-2 rounded-full"
                                            style={{ backgroundColor: 'var(--primary-100)' }}
                                        />
                                        <span
                                            className="text-xs"
                                            style={{ color: 'var(--text-300)' }}
                                        >
                                            {principle}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col min-h-screen p-6 space-y-6">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center space-y-2 pt-8"
            >
                <h1
                    className="text-3xl font-bold"
                    style={{ color: 'var(--primary-100)' }}
                >
                    Sobre Mí
                </h1>
                <p
                    className="text-base"
                    style={{ color: 'var(--text-200)' }}
                >
                    Conoce mi historia y experiencia
                </p>
            </motion.div>

            {/* Tabs */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex bg-opacity-10 rounded-xl p-1"
                style={{
                    background: 'rgba(173, 153, 27, 0.05)',
                    backdropFilter: 'blur(15px)'
                }}
            >
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as 'info' | 'interests' | 'philosophy')}
                        className={`flex-1 py-3 px-2 rounded-lg transition-all duration-300 ${activeTab === tab.id ? 'transform scale-105' : ''
                            }`}
                        style={{
                            background: activeTab === tab.id
                                ? 'rgba(173, 153, 27, 0.2)'
                                : 'transparent',
                            color: activeTab === tab.id
                                ? 'var(--primary-100)'
                                : 'var(--text-200)'
                        }}
                    >
                        <div className="flex flex-col items-center space-y-1">
                            <span className="text-lg">{tab.emoji}</span>
                            <span className="text-xs font-medium">{tab.label}</span>
                        </div>
                    </button>
                ))}
            </motion.div>

      {/* Content */ }
    <div className="flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
            <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="h-full overflow-y-auto custom-scroll"
            >
                {renderTabContent()}
            </motion.div>
        </AnimatePresence>
    </div>

    {/* Quick Stats */ }
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid grid-cols-3 gap-4 pt-4"
    >
        <div
            className="text-center p-3 rounded-lg border"
            style={{
                background: 'rgba(173, 153, 27, 0.05)',
                borderColor: 'rgba(173, 153, 27, 0.2)'
            }}
        >
            <div className="text-lg font-bold" style={{ color: 'var(--primary-100)' }}>
                24
            </div>
            <div className="text-xs" style={{ color: 'var(--text-300)' }}>
                Años
            </div>
        </div>

        <div
            className="text-center p-3 rounded-lg border"
            style={{
                background: 'rgba(173, 153, 27, 0.05)',
                borderColor: 'rgba(173, 153, 27, 0.2)'
            }}
        >
            <div className="text-lg font-bold" style={{ color: 'var(--primary-100)' }}>
                2+
            </div>
            <div className="text-xs" style={{ color: 'var(--text-300)' }}>
                Años exp.
            </div>
        </div>

        <div
            className="text-center p-3 rounded-lg border"
            style={{
                background: 'rgba(173, 153, 27, 0.05)',
                borderColor: 'rgba(173, 153, 27, 0.2)'
            }}
        >
            <div className="text-lg font-bold" style={{ color: 'var(--primary-100)' }}>
                {interests.length}
            </div>
            <div className="text-xs" style={{ color: 'var(--text-300)' }}>
                Intereses
            </div>
        </div>
    </motion.div>
    </div>
  );
};

export default MobileSobreMiSection;
