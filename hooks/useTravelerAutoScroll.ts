import { useEffect, useRef } from 'react';

export function useTravelerAutoScroll(isMounted: boolean) {
  const hasScrolledRef = useRef(false);
  const initialLoadRef = useRef(true);

  useEffect(() => {
    if (!isMounted || typeof window === 'undefined') return;

    // 确保页面加载时滚动到顶部
    window.scrollTo({ top: 0, behavior: 'auto' });

    const travelerSection = document.querySelector('.traveler-section');
    if (!travelerSection) return;

    let autoScrollCount = 0;
    let isAutoScrolling = false;

    setTimeout(() => {
      initialLoadRef.current = false;
    }, 2000);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (initialLoadRef.current) return;

          if (entry.isIntersecting && entry.intersectionRatio >= 0.3 && !isAutoScrolling && autoScrollCount < 7 && !hasScrolledRef.current) {
            isAutoScrolling = true;
            hasScrolledRef.current = true;

            const performAutoScroll = () => {
              if (autoScrollCount < 5) {
                window.scrollBy({
                  top: 120,
                  behavior: 'smooth'
                });
                autoScrollCount++;

                setTimeout(() => {
                  performAutoScroll();
                }, 100);
              } else {
                isAutoScrolling = false;
              }
            };

            performAutoScroll();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(travelerSection);

    return () => {
      observer.disconnect();
    };
  }, [isMounted]);
}
