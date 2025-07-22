'use client';

import React, { useState, useEffect } from 'react';

const SectionDetectionTest: React.FC = () => {
  const [debugInfo, setDebugInfo] = useState({
    currentSection: 'inicio',
    scrollY: 0,
    sections: [] as Array<{id: string; elementTop: number; elementBottom: number; elementCenter: number; distance: number; visibilityRatio: number; isVisible: boolean}>,
    viewportHeight: 0
  });

  useEffect(() => {
    const detectSection = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const viewportCenter = scrollY + viewportHeight / 2;

      console.log('=== DETECCIÓN DE SECCIONES ===');
      console.log('ScrollY:', scrollY);
      console.log('ViewportHeight:', viewportHeight);
      console.log('ViewportCenter:', viewportCenter);

      const sectionData = Array.from(sections).map(section => {
        const element = section as HTMLElement;
        const rect = element.getBoundingClientRect();
        const elementTop = scrollY + rect.top;
        const elementBottom = elementTop + rect.height;
        const elementCenter = elementTop + rect.height / 2;
        const distance = Math.abs(viewportCenter - elementCenter);

        const topVisible = Math.max(0, Math.min(viewportHeight, elementBottom - scrollY));
        const bottomVisible = Math.max(0, Math.min(viewportHeight, viewportHeight - Math.max(0, elementTop - scrollY)));
        const visibleHeight = Math.min(topVisible, bottomVisible, rect.height);
        const visibilityRatio = visibleHeight / Math.min(rect.height, viewportHeight);

        console.log(`Sección ${element.id}:`, {
          elementTop,
          elementBottom,
          elementCenter,
          distance,
          visibilityRatio,
          isVisible: visibilityRatio > 0.3
        });

        return {
          id: element.id,
          elementTop,
          elementBottom,
          elementCenter,
          distance,
          visibilityRatio,
          isVisible: visibilityRatio > 0.3
        };
      });

      const visibleSections = sectionData.filter(s => s.isVisible);
      let bestSection = 'inicio';
      
      if (visibleSections.length > 0) {
        const closest = visibleSections.reduce((prev, current) => 
          prev.distance < current.distance ? prev : current
        );
        bestSection = closest.id;
      }

      console.log('Sección detectada:', bestSection);
      console.log('========================');

      setDebugInfo({
        currentSection: bestSection,
        scrollY,
        sections: sectionData,
        viewportHeight
      });
    };

    detectSection();
    
    const handleScroll = () => {
      detectSection();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-4 left-4 z-50 p-3 rounded-lg shadow-lg text-xs font-mono bg-black text-white max-w-sm opacity-90">
      <div className="space-y-2">
        <div className="text-yellow-400 font-bold">DETECCIÓN ACTIVA: {debugInfo.currentSection}</div>
        <div>Scroll Y: {debugInfo.scrollY}</div>
        <div>Viewport: {debugInfo.viewportHeight}</div>
        <div className="border-t pt-2">
          {debugInfo.sections.map(section => (
            <div key={section.id} className={`text-xs ${section.id === debugInfo.currentSection ? 'text-yellow-400' : 'text-gray-300'}`}>
              {section.id}: {section.isVisible ? '✓' : '✗'} ({Math.round(section.visibilityRatio * 100)}%)
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionDetectionTest;
