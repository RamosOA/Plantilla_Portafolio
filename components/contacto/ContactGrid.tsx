'use client';

import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import ResponseTime from './ResponseTime';

interface ContactGridProps {
    handleWheel: (e: React.WheelEvent, scrollRef: React.RefObject<HTMLDivElement>) => void;
}

const ContactGrid: React.FC<ContactGridProps> = ({ handleWheel }) => {
    return (
        <div className="pl-24 pr-8 py-8 h-full w-full max-w-7xl">
            <div className="grid grid-cols-5 grid-rows-5 gap-4 h-full">
                
                {/* Formulario de contacto - Card principal grande */}
                <ContactForm 
                    onWheel={handleWheel}
                    className="col-span-3 row-span-5"
                    delay={0.3}
                />

                {/* Información de contacto */}
                <ContactInfo 
                    onWheel={handleWheel}
                    className="col-span-2 row-span-3 col-start-4"
                    delay={0.4}
                />

                {/* Horario de respuesta */}
                <ResponseTime 
                    className="col-span-2 row-span-2 col-start-4 row-start-4"
                    delay={0.5}
                />

            </div>
        </div>
    );
};

export default ContactGrid;