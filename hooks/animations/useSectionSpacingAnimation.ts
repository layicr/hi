import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { GSAP_INIT_DELAY } from '@/types';

export function useSectionSpacingAnimation(isReady: boolean) {
  const initialized = useRef(false);

  useEffect(() => {
    if (!isReady || initialized.current) return;

    const timer = setTimeout(() => {
      initialized.current = true;

      const textLines = document.querySelectorAll('.section-text .text-line');
      const highlightBg = document.querySelector('.section-text .highlight-bg');

      if (textLines.length === 0) return;

      gsap.set(textLines, { y: 20, opacity: 0 });

      const sectionTimeline = gsap.timeline({
        repeat: -1,
        repeatDelay: 0
      });

      sectionTimeline.to(textLines, {
        duration: 0.8,
        y: 0,
        opacity: 1,
        stagger: 0.3,
        ease: 'power2.out',
        delay: 1.5
      });

      if (highlightBg) {
        gsap.set(highlightBg, { width: '0%' });
        sectionTimeline.to(highlightBg, {
          width: '100%',
          duration: 3,
          ease: 'power2.out'
        });
      }

      sectionTimeline.to({}, { duration: 2 });

      if (highlightBg) {
        sectionTimeline.to(highlightBg, {
          width: '0%',
          duration: 0.3,
          ease: 'power2.in'
        });
      }

      sectionTimeline.to(textLines, {
        y: -20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power2.in'
      });
    }, GSAP_INIT_DELAY);

    return () => clearTimeout(timer);
  }, [isReady]);
}
