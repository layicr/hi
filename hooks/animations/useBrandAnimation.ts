import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { GSAP_INIT_DELAY } from '@/types';

export function useBrandAnimation(isReady: boolean, quoteText?: string) {
  const initialized = useRef(false);
  const prevQuoteRef = useRef<string | undefined>(undefined);

  useEffect(() => {
    if (!isReady) return;

    if (prevQuoteRef.current !== undefined && prevQuoteRef.current !== quoteText) {
      initialized.current = false;
    }
    prevQuoteRef.current = quoteText;

    if (initialized.current) return;

    const timer = setTimeout(() => {
      initialized.current = true;

      const brandSection = document.querySelector('.brand-section');
      const quoteEl = document.querySelector('.brand-section .quote');

      if (!brandSection || !quoteEl) return;

      const chars = quoteEl.textContent ? quoteEl.textContent.split('') : [];
      const charsHtml = chars.map(char => `<span class="char">${char}</span>`).join('');
      quoteEl.innerHTML = charsHtml;

      const charElements = quoteEl.querySelectorAll('.char');

      const animateChars = () => {
        gsap.set(charElements, {
          opacity: 0,
          y: 80,
          scale: 0,
          rotationX: -90,
          transformOrigin: 'center center',
          display: 'inline-block'
        });

        gsap.set(quoteEl, {
          textShadow: 'none'
        });

        const brandTl = gsap.timeline();

        brandTl.to(charElements, {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          duration: 1.2,
          ease: 'elastic.out(1, 0.5)',
          stagger: {
            amount: 1.5,
            from: 'random'
          }
        }, 0);

        brandTl.to(quoteEl, {
          textShadow: '0 0 30px rgba(72, 81, 173, 0.3), 0 0 60px rgba(245, 166, 35, 0.2)',
          duration: 1,
          ease: 'power2.out'
        }, '-=0.5');

        brandTl.to({}, {
          duration: 2
        });

        brandTl.to(charElements, {
          opacity: 0,
          y: -80,
          scale: 0,
          rotationX: 90,
          duration: 0.8,
          ease: 'power2.in',
          stagger: {
            amount: 0.3,
            from: 'random'
          }
        }, '-=0.5');

        return brandTl;
      };

      const masterTl = gsap.timeline({
        repeat: -1,
        repeatDelay: 2
      });

      masterTl.add(animateChars(), 0);

    }, GSAP_INIT_DELAY);

    return () => clearTimeout(timer);
  }, [isReady, quoteText]);
}
