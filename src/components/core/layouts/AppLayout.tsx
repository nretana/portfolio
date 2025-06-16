import React, { useEffect, ReactNode, useRef } from 'react';
import useLocale from '@/hooks/useLocale';

export type AppLayoutProps = {
  children: ReactNode;
};

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const locale = useLocale();
  const containerRef = useRef<any>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    el.classList.add('fade-out');
    const timeout = setTimeout(() => {
      el.classList.remove('fade-out');
    }, 200);

    return () => clearTimeout(timeout);
  }, [locale]);

  return (
    <div ref={containerRef} className='fade-in'>
      {children}
    </div>
  );
};
