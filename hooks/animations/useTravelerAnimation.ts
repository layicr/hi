import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GSAP_INIT_DELAY } from '@/types';

gsap.registerPlugin(ScrollTrigger);

export function useTravelerAnimation(isReady: boolean) {
  const initialized = useRef(false);

  useEffect(() => {
    if (!isReady || initialized.current) return;
    if (typeof window === 'undefined') return;
    if (window.innerWidth <= 768) return;

    const timer = setTimeout(() => {
      initialized.current = true;

      const travelerLines = document.querySelectorAll('.traveler-line');
      if (travelerLines.length === 0) return;

      const screenHeight = window.innerHeight;
      const fontSize = Math.min(screenHeight / 3, 120) * 3;

      const line1Words = document.querySelectorAll('.line-1 .word');
      const line2Words = document.querySelectorAll('.line-2 .word');
      const line3Words = document.querySelectorAll('.line-3 .word');

      if (line1Words.length === 0 && line2Words.length === 0 && line3Words.length === 0) return;

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

      const midFontSize = fontSize * 0.5 + 'px';
      const smallFontSize = fontSize * 0.25 + 'px';

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.traveler-section',
          start: 'top top',
          end: '+=5000',
          scrub: 1.5,
          pin: true
        }
      });

      line1Words.forEach((word, index) => {
        tl.to(word, {
          left: '50%',
          top: '12%',
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
          top: '44%',
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
          top: '76%',
          xPercent: -50,
          yPercent: 0,
          opacity: 1,
          filter: 'blur(0px)',
          fontSize: midFontSize,
          duration: 2,
          ease: 'power2.out'
        }, 0.6 + index * 0.15);
      });

      line1Words.forEach((word, index) => {
        tl.to(word, {
          top: '50%',
          fontSize: smallFontSize,
          duration: 1.5,
          ease: 'power2.inOut'
        }, 4 + index * 0.1);
      });

      line2Words.forEach((word, index) => {
        tl.to(word, {
          top: '50%',
          opacity: 0,
          duration: 1,
          ease: 'power2.inOut'
        }, 4 + index * 0.1);
      });

      line3Words.forEach((word, index) => {
        tl.to(word, {
          top: '50%',
          opacity: 0,
          duration: 1,
          ease: 'power2.inOut'
        }, 4 + index * 0.1);
      });

      tl.to(line1Words, {
        opacity: 0,
        duration: 1,
        ease: 'power2.in'
      }, 6);
    }, GSAP_INIT_DELAY);

    return () => clearTimeout(timer);
  }, [isReady]);
}
