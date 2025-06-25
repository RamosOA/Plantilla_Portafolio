'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

interface PersonalInfoItemProps {
    info: {
        icon: IconType;
        label: string;
        value: string;
        additional?: string;
    };
    index: number;
    delay: number;
}

const PersonalInfoItem: React.FC<PersonalInfoItemProps> = ({ info, index, delay }) => {
    const IconComponent = info.icon;

    return (
        <motion.div
            className="flex items-start space-x-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: delay + index * 0.1 }}
        >
            <IconComponent 
                className="text-xl mt-1 flex-shrink-0" 
                style={{ color: '#AD991B' }} 
            />
            <div className="min-w-0 flex-1">
                <p className="text-sm font-medium" style={{ color: '#e0e0e0' }}>
                    {info.label}
                </p>
                <p className="text-base font-semibold" style={{ color: '#ffffff' }}>
                    {info.value}
                </p>
                {info.additional && (
                    <p className="text-base mt-1 font-semibold" style={{ color: '#ffffff' }}>
                        {info.additional}
                    </p>
                )}
            </div>
        </motion.div>
    );
};

export default PersonalInfoItem;
