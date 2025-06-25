'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ContactTitle from '../contacto/ContactTitle';
import ContactGrid from '../contacto/ContactGrid';
import CustomScrollbar from '../contacto/CustomScrollbar';

const Contacto = () => {
    
    const handleWheel = (e: React.WheelEvent, scrollRef: React.RefObject<HTMLDivElement>) => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const { scrollTop, scrollHeight, clientHeight } = container;
            
            
            const isAtTop = scrollTop === 0;
            const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
            
            
            if (e.deltaY < 0 && isAtTop) {
                return; 
            }
            
            
            if (e.deltaY > 0 && isAtBottom) {
                return; 
            }
            
            
            e.preventDefault();
            e.stopPropagation();
            container.scrollTop += e.deltaY;
        }
    };

    return (
        <motion.div
            className="w-full h-[75vh] flex items-center justify-center px-6 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            
            <ContactTitle />

            
            <ContactGrid handleWheel={handleWheel} />

            
            <CustomScrollbar />
        </motion.div>
    );
};

export default Contacto;
