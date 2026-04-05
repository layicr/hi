import { useEffect, useState } from 'react';

export function useProjectVisibility(isMounted: boolean) {
  const [showProjectLeftSection, setShowProjectLeftSection] = useState(false);

  useEffect(() => {
    if (!isMounted || typeof window === 'undefined') return;

    const projectListSection = document.querySelector('.project-list-section');
    if (!projectListSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.15 && !showProjectLeftSection) {
            setTimeout(() => {
              setShowProjectLeftSection(true);
            }, 3000);

            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(projectListSection);

    return () => {
      observer.disconnect();
    };
  }, [isMounted, showProjectLeftSection]);

  return showProjectLeftSection;
}
