'use client';

import { useEffect } from 'react';

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.body.classList.add('js');

    const targets = document.querySelectorAll<Element>('.reveal');

    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('in'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return <>{children}</>;
}
