import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ANIMATION_DEFAULTS, GSAP_INIT_DELAY } from '@/types';

export function useHeroAnimations(isReady: boolean) {
  const initialized = useRef(false);

  useEffect(() => {
    if (!isReady || initialized.current) return;
    
    const timer = setTimeout(() => {
      initialized.current = true;
      
      gsap.from('.profile-card', {
        duration: 1.5,
        y: 50,
        opacity: 0,
        ease: 'back.out(1.7)',
        delay: 0.3
      });

      gsap.from('.avatar-image', {
        duration: 1.2,
        scale: 0,
        opacity: 0,
        ease: 'back.out(1.7)',
        delay: 0.5
      });

      gsap.from('.role-item', {
        duration: ANIMATION_DEFAULTS.duration,
        y: 20,
        opacity: 0,
        stagger: ANIMATION_DEFAULTS.stagger,
        ease: ANIMATION_DEFAULTS.ease,
        delay: 1
      });
    }, GSAP_INIT_DELAY);

    return () => clearTimeout(timer);
  }, [isReady]);
}
