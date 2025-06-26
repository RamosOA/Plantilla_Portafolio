'use client';

import React, { useEffect, useState } from 'react';

const MobileScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Progress Bar */}
      <div className="mobile-scroll-progress show-mobile">
        <div 
          className="mobile-scroll-progress-bar"
          style={{ width: `${progress}%` }}
        />
      </div>
    </>
  );
};

export default MobileScrollProgress;
