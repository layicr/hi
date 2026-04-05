import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { GSAP_INIT_DELAY } from '@/types';

export function useTravelerAutoAnimation(isReady: boolean) {
  const initialized = useRef(false);

  useEffect(() => {
    if (!isReady || initialized.current) return;
    if (typeof window === 'undefined') return;
    if (window.innerWidth > 768) return;

    const timer = setTimeout(() => {
      initialized.current = true;

      const travelerSection = document.querySelector('.traveler-section');
      const line1Words = document.querySelectorAll('.line-1 .word');
      const line2Words = document.querySelectorAll('.line-2 .word');
      const line3Words = document.querySelectorAll('.line-3 .word');

      if (!travelerSection || line1Words.length === 0) return;

      const screenHeight = window.innerHeight;
      const fontSize = Math.min(screenHeight / 5, 60) * 2.4;

      gsap.set('.line-1', { position: 'absolute', width: '100%', height: '100%' });
      gsap.set(line1Words, {
        left: () => window.innerWidth + 'px',
        top: () => window.innerHeight + 'px',
        xPercent: -100,
        yPercent: -100,
        fontSize: fontSize + 'px',
        opacity: 0,
        filter: 'blur(10px)',
        position: 'absolute'
      });

      gsap.set('.line-2', { position: 'absolute', width: '100%', height: '100%' });
      gsap.set(line2Words, {
        left: '0px',
        top: () => window.innerHeight + 'px',
        xPercent: 0,
        yPercent: -100,
        fontSize: fontSize + 'px',
        opacity: 0,
        filter: 'blur(10px)',
        position: 'absolute'
      });

      gsap.set('.line-3', { position: 'absolute', width: '100%', height: '100%' });
      gsap.set(line3Words, {
        left: () => window.innerWidth + 'px',
        top: () => window.innerHeight + 'px',
        xPercent: -100,
        yPercent: -100,
        fontSize: fontSize + 'px',
        opacity: 0,
        filter: 'blur(10px)',
        position: 'absolute'
      });

      const midFontSize = fontSize * 0.6 + 'px';
      const smallFontSize = fontSize * 0.35 + 'px';

      const runAnimation = () => {
        const tl = gsap.timeline();

        line1Words.forEach((word, index) => {
          gsap.set(word, { opacity: 0, x: 0, y: 0 });
          tl.to(word, {
            left: '50%',
            top: '18%',
            xPercent: -50,
            yPercent: 0,
            opacity: 1,
            filter: 'blur(0px)',
            fontSize: midFontSize,
            duration: 2,
            ease: 'power2.out'
          }, index * 0.15);
        });

        line2Words.forEach((word, index) => {
          tl.to(word, {
            left: '50%',
            top: '46%',
            xPercent: -50,
            yPercent: 0,
            opacity: 1,
            filter: 'blur(0px)',
            fontSize: midFontSize,
            duration: 2,
            ease: 'power2.out'
          }, 0.3 + index * 0.15);
        });

        line3Words.forEach((word, index) => {
          tl.to(word, {
            left: '50%',
            top: '74%',
            xPercent: -50,
            yPercent: 0,
            opacity: 1,
            filter: 'blur(0px)',
            fontSize: midFontSize,
            duration: 2,
            ease: 'power2.out'
          }, 0.6 + index * 0.15);
        });

        tl.to({}, { duration: 2 });

        line1Words.forEach((word, index) => {
          tl.to(word, {
            top: '48%',
            fontSize: smallFontSize,
            duration: 1.5,
            ease: 'power2.inOut'
          }, index * 0.1);
        });

        line2Words.forEach((word, index) => {
          tl.to(word, {
            top: '48%',
            opacity: 0,
            duration: 1,
            ease: 'power2.inOut'
          }, index * 0.1);
        });

        line3Words.forEach((word, index) => {
          tl.to(word, {
            top: '48%',
            opacity: 0,
            duration: 1,
            ease: 'power2.inOut'
          }, index * 0.1);
        });

        tl.to(line1Words, {
          opacity: 0,
          duration: 1,
          ease: 'power2.in'
        });

        return tl;
      };

      const masterTl = gsap.timeline({
        repeat: 0,
        repeatDelay: 2
      });

      masterTl.add(runAnimation(), 0);

    }, GSAP_INIT_DELAY);

    return () => clearTimeout(timer);
  }, [isReady]);
}
