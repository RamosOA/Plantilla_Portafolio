'use client';

import MobileMenu from './MobileMenu';
import useActiveSection from '../hooks/useActiveSection';

const MobileMenuWrapper = () => {
  const activeSection = useActiveSection();
  
  return <MobileMenu currentSection={activeSection} />;
};

export default MobileMenuWrapper;
