'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaWhatsapp, 
  FaEnvelope, 
  FaLinkedin, 
  FaGithub, 
  FaMapMarkerAlt, 
  FaClock,
  FaPaperPlane,
  FaUser,
  FaCommentDots
} from 'react-icons/fa';

const MobileContactoSection = () => {
  const [activeTab, setActiveTab] = useState<'info' | 'form' | 'social'>('info');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const tabs = [
    { id: 'info', label: 'Info', icon: FaMapMarkerAlt, emoji: '📍' },
    { id: 'form', label: 'Mensaje', icon: FaCommentDots, emoji: '💬' },
    { id: 'social', label: 'Social', icon: FaLinkedin, emoji: '🌐' }
  ];

  const contactInfo = [
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      value: '+57 302 848 8116',
      action: () => {
        const phoneNumber = '573028488116';
        const message = encodeURIComponent('¡Hola Oscar! Me interesa conocer más sobre tus servicios de desarrollo web.');
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
      },
      color: '#25D366'
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'oscar.ramos@example.com',
      action: () => window.open('mailto:oscar.ramos@example.com', '_blank'),
      color: '#EA4335'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Ubicación',
      value: 'Colombia',
      action: null,
      color: '#4285F4'
    },
    {
      icon: FaClock,
      label: 'Disponibilidad',
      value: 'Lun - Vie, 9AM - 6PM',
      action: null,
      color: '#34A853'
    }
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/oscar-ramos',
      url: 'https://www.linkedin.com/in/oscar-ramos-02102018b/',
      color: '#0077B5'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'github.com/oscar-ramos',
      url: 'https://github.com/RamosOA',
      color: '#333'
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp Business',
      value: 'Contacto directo',
      url: `https://wa.me/573028488116?text=${encodeURIComponent('¡Hola Oscar! Me interesa conocer más sobre tus servicios.')}`,
      color: '#25D366'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 3000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 3000);
      }
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'info':
        return (
          <div className="space-y-4">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`p-4 rounded-lg border transition-all duration-300 ${
                  item.action ? 'cursor-pointer hover:scale-105' : ''
                }`}
                style={{
                  background: 'rgba(173, 153, 27, 0.08)',
                  borderColor: 'rgba(173, 153, 27, 0.2)'
                }}
                onClick={item.action || undefined}
                whileHover={item.action ? { scale: 1.02 } : {}}
                whileTap={item.action ? { scale: 0.98 } : {}}
              >
                <div className="flex items-center space-x-4">
                  <div 
                    className="p-3 rounded-full"
                    style={{ 
                      backgroundColor: `${item.color}20`,
                      color: item.color 
                    }}
                  >
                    <item.icon size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 
                      className="font-semibold text-sm mb-1"
                      style={{ color: 'var(--text-100)' }}
                    >
                      {item.label}
                    </h3>
                    <p 
                      className="text-sm"
                      style={{ color: 'var(--text-200)' }}
                    >
                      {item.value}
                    </p>
                  </div>
                  {item.action && (
                    <FaPaperPlane 
                      className="text-sm opacity-60"
                      style={{ color: 'var(--primary-100)' }}
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        );

      case 'form':
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <label 
                className="block text-sm font-medium mb-2"
                style={{ color: 'var(--text-100)' }}
              >
                <FaUser className="inline mr-2" />
                Nombre
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full p-3 rounded-lg border text-sm"
                style={{
                  background: 'rgba(173, 153, 27, 0.05)',
                  borderColor: 'rgba(173, 153, 27, 0.2)',
                  color: 'var(--text-100)'
                }}
                placeholder="Tu nombre completo"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <label 
                className="block text-sm font-medium mb-2"
                style={{ color: 'var(--text-100)' }}
              >
                <FaEnvelope className="inline mr-2" />
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-3 rounded-lg border text-sm"
                style={{
                  background: 'rgba(173, 153, 27, 0.05)',
                  borderColor: 'rgba(173, 153, 27, 0.2)',
                  color: 'var(--text-100)'
                }}
                placeholder="tu@email.com"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <label 
                className="block text-sm font-medium mb-2"
                style={{ color: 'var(--text-100)' }}
              >
                <FaCommentDots className="inline mr-2" />
                Mensaje
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full p-3 rounded-lg border text-sm resize-none"
                style={{
                  background: 'rgba(173, 153, 27, 0.05)',
                  borderColor: 'rgba(173, 153, 27, 0.2)',
                  color: 'var(--text-100)'
                }}
                placeholder="Cuéntame sobre tu proyecto..."
              />
            </motion.div>

            <motion.button
              type="submit"
              disabled={isSubmitting || submitStatus !== 'idle'}
              className="w-full p-4 rounded-lg font-semibold transition-all duration-300 border"
              style={{
                background: submitStatus === 'success' 
                  ? '#10B981' 
                  : submitStatus === 'error'
                  ? '#EF4444'
                  : 'rgba(173, 153, 27, 0.15)',
                borderColor: submitStatus === 'success' 
                  ? '#10B981' 
                  : submitStatus === 'error'
                  ? '#EF4444'
                  : 'rgba(173, 153, 27, 0.3)',
                color: submitStatus !== 'idle' ? 'white' : 'var(--primary-100)'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Enviando...</span>
                </div>
              ) : submitStatus === 'success' ? (
                '✅ Mensaje enviado'
              ) : submitStatus === 'error' ? (
                '❌ Error al enviar'
              ) : (
                <span className="flex items-center justify-center space-x-2">
                  <FaPaperPlane />
                  <span>Enviar Mensaje</span>
                </span>
              )}
            </motion.button>
          </form>
        );

      case 'social':
        return (
          <div className="space-y-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-lg border transition-all duration-300"
                style={{
                  background: 'rgba(173, 153, 27, 0.08)',
                  borderColor: 'rgba(173, 153, 27, 0.2)'
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-4">
                  <div 
                    className="p-3 rounded-full"
                    style={{ 
                      backgroundColor: `${link.color}20`,
                      color: link.color 
                    }}
                  >
                    <link.icon size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 
                      className="font-semibold text-sm mb-1"
                      style={{ color: 'var(--text-100)' }}
                    >
                      {link.label}
                    </h3>
                    <p 
                      className="text-sm"
                      style={{ color: 'var(--text-200)' }}
                    >
                      {link.value}
                    </p>
                  </div>
                  <FaPaperPlane 
                    className="text-sm opacity-60"
                    style={{ color: 'var(--primary-100)' }}
                  />
                </div>
              </motion.a>
            ))}
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
          Contacto
        </h1>
        <p 
          className="text-base"
          style={{ color: 'var(--text-200)' }}
        >
          ¡Hablemos sobre tu próximo proyecto!
        </p>
      </motion.div>

      {/* Response Time Indicator */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex items-center justify-center space-x-2 p-3 rounded-lg"
        style={{
          background: 'rgba(16, 185, 129, 0.1)',
          border: '1px solid rgba(16, 185, 129, 0.3)'
        }}
      >
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
        <span 
          className="text-sm font-medium"
          style={{ color: '#10B981' }}
        >
          Respuesta en menos de 24 horas
        </span>
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex bg-opacity-10 rounded-xl p-1"
        style={{
          background: 'rgba(173, 153, 27, 0.05)',
          backdropFilter: 'blur(15px)'
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as 'info' | 'form' | 'social')}
            className={`flex-1 py-3 px-2 rounded-lg transition-all duration-300 ${
              activeTab === tab.id ? 'transform scale-105' : ''
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

      {/* Content */}
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

      {/* Quick WhatsApp Action */}
      <motion.button
        onClick={() => {
          const phoneNumber = '573028488116';
          const message = encodeURIComponent('¡Hola Oscar! Me interesa conocer más sobre tus servicios de desarrollo web.');
          window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
        }}
        className="w-full p-4 rounded-lg font-semibold transition-all duration-300 border"
        style={{
          background: 'rgba(37, 211, 102, 0.15)',
          borderColor: 'rgba(37, 211, 102, 0.3)',
          color: '#25D366'
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="flex items-center justify-center space-x-2">
          <FaWhatsapp size={20} />
          <span>Contacto Directo por WhatsApp</span>
        </span>
      </motion.button>
    </div>
  );
};

export default MobileContactoSection;
