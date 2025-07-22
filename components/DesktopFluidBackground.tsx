'use client';

import React, { useEffect, useState } from 'react';

const DesktopFluidBackground = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const checkTheme = () => {
      const theme = document.documentElement.getAttribute('data-theme');
      setIsDark(theme !== 'light');
    };

    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    return () => observer.disconnect();
  }, []);

  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 950;
  if (isMobile) return null;

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-[-2] overflow-hidden"
      style={{
        width: '500vw',
        height: '100vh',
        background: isDark 
          ? `
            radial-gradient(ellipse 4000px 3000px at 50% 50%, rgba(0, 240, 255, 0.03) 0%, transparent 60%),
            #252525
          `
          : `
            radial-gradient(ellipse 4000px 3000px at 50% 50%, rgba(0, 240, 255, 0.04) 0%, transparent 60%),
            #F4F4F4
          `
      }}
    />
  );
};

export default DesktopFluidBackground;
