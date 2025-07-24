'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { initGA, logPageView } from '@/lib/analytics';

const AnalyticsInitializer = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Initialize GA once when the component mounts
    initGA();
  }, []);

  useEffect(() => {
    // Log page view on every pathname change
    if (typeof window !== 'undefined') {
      logPageView();
    }
  }, [pathname]);

  return null; // This component doesn't render anything visible
};

export default AnalyticsInitializer;
