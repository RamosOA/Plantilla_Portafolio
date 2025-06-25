'use client';

import React from 'react';
import PresentationCard from './PresentationCard';
import PersonalInfoCard from './PersonalInfoCard';
import InterestsCard from './InterestsCard';
import PhilosophyCard from './PhilosophyCard';

interface AboutGridProps {
    handleWheel: (e: React.WheelEvent, scrollRef: React.RefObject<HTMLDivElement>) => void;
}

const AboutGrid: React.FC<AboutGridProps> = ({ handleWheel }) => {
    return (
        <div className="pl-24 pr-8 py-8 h-full w-full max-w-6xl">
            <div className="grid grid-cols-12 grid-rows-6 gap-4 h-full">
                
                {/* Tarjeta principal de presentación */}
                <PresentationCard
                    className="col-span-8 row-span-3"
                    delay={0.3}
                    handleWheel={handleWheel}
                />

                {/* Información personal */}
                <PersonalInfoCard
                    className="col-span-4 row-span-6"
                    delay={0.4}
                    handleWheel={handleWheel}
                />

                {/* Intereses y pasiones */}
                <InterestsCard
                    className="col-span-5 row-span-3"
                    delay={0.5}
                    handleWheel={handleWheel}
                />

                {/* Filosofía de trabajo */}
                <PhilosophyCard
                    className="col-span-3 row-span-3"
                    delay={0.6}
                    handleWheel={handleWheel}
                />

            </div>
        </div>
    );
};

export default AboutGrid;
