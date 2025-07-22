'use client';

import React, { useState, useEffect } from 'react';
import useActiveSection from '../hooks/useActiveSection';

const SectionDebugger: React.FC = () => {
  const activeSection = useActiveSection();
  const [debugInfo, setDebugInfo] = useState({
    width: 0,
    scrollY: 0,
    scrollX: 0,
    isMobile: false,
    sections: [] as { id: string; visible: boolean; position: number }[]
  });

  useEffect(() => {
    const updateInfo = () => {
      const sections = document.querySelectorAll('section[id]');
      const isMobile = window.innerWidth <= 950;
      const scrollY = window.scrollY;
      const scrollX = window.scrollX;
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;

      const sectionInfo = Array.from(sections).map(section => {
        const element = section as HTMLElement;
        const rect = element.getBoundingClientRect();
        
        if (isMobile) {
          const elementTop = scrollY + rect.top;
          const elementBottom = elementTop + rect.height;
          const topVisible = Math.max(0, Math.min(viewportHeight, elementBottom - scrollY));
          const bottomVisible = Math.max(0, Math.min(viewportHeight, viewportHeight - Math.max(0, elementTop - scrollY)));
          const visibleHeight = Math.min(topVisible, bottomVisible, rect.height);
          const visibilityRatio = visibleHeight / Math.min(rect.height, viewportHeight);
          
          return {
            id: element.id,
            visible: visibilityRatio > 0.3,
            position: Math.round(elementTop)
          };
        } else {
          const elementLeft = scrollX + rect.left;
          const elementRight = elementLeft + rect.width;
          const leftVisible = Math.max(0, Math.min(viewportWidth, elementRight - scrollX));
          const rightVisible = Math.max(0, Math.min(viewportWidth, viewportWidth - Math.max(0, elementLeft - scrollX)));
          const visibleWidth = Math.min(leftVisible, rightVisible, rect.width);
          const visibilityRatio = visibleWidth / Math.min(rect.width, viewportWidth);
          
          return {
            id: element.id,
            visible: visibilityRatio > 0.3,
            position: Math.round(elementLeft)
          };
        }
      });

      setDebugInfo({
        width: window.innerWidth,
        scrollY: Math.round(scrollY),
        scrollX: Math.round(scrollX),
        isMobile,
        sections: sectionInfo
      });
    };

    updateInfo();
    window.addEventListener('scroll', updateInfo);
    window.addEventListener('resize', updateInfo);

    return () => {
      window.removeEventListener('scroll', updateInfo);
      window.removeEventListener('resize', updateInfo);
    };
  }, []);

  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 p-3 rounded-lg shadow-lg text-xs font-mono opacity-90 hover:opacity-100 transition-opacity duration-300 max-w-xs"
         style={{
           background: 'rgba(0, 0, 0, 0.9)',
           color: '#fff',
           backdropFilter: 'blur(10px)',
           border: '1px solid rgba(173, 153, 27, 0.3)',
         }}>
      <div className="space-y-2">
        <div className="flex justify-between border-b border-gray-600 pb-1">
          <span>Activa:</span>
          <span className="font-bold text-yellow-400">{activeSection}</span>
        </div>
        
        <div className="flex justify-between">
          <span>Modo:</span>
          <span className={debugInfo.isMobile ? 'text-green-400' : 'text-blue-400'}>
            {debugInfo.isMobile ? 'Mobile' : 'Desktop'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Ancho:</span>
          <span className="text-gray-300">{debugInfo.width}px</span>
        </div>
        
        <div className="flex justify-between">
          <span>Scroll {debugInfo.isMobile ? 'Y' : 'X'}:</span>
          <span className="text-gray-300">
            {debugInfo.isMobile ? debugInfo.scrollY : debugInfo.scrollX}px
          </span>
        </div>

        <div className="border-t border-gray-600 pt-1">
          <div className="text-xs text-gray-400 mb-1">Secciones:</div>
          {debugInfo.sections.map(section => (
            <div key={section.id} className="flex justify-between text-xs">
              <span className={section.id === activeSection ? 'text-yellow-400 font-bold' : 'text-gray-300'}>
                {section.id}
              </span>
              <span className={section.visible ? 'text-green-400' : 'text-red-400'}>
                {section.visible ? '✓' : '✗'} {section.position}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionDebugger;
