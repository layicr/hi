import { useEffect } from 'react';

export function useYearCityInteraction(isMounted: boolean) {
  useEffect(() => {
    if (!isMounted || typeof window === 'undefined') return;

    const yearCitySection = document.querySelector('.year-city-section');
    if (!yearCitySection) return;

    const handleYearRowClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const yearRow = target.closest('.year-row') as HTMLElement;
      if (!yearRow) return;

      const year = yearRow.getAttribute('data-year');
      if (yearRow.classList.contains('active')) {
        yearRow.classList.remove('active');
        if (year) window.history.replaceState(null, '', window.location.pathname);
      } else {
        document.querySelectorAll('.year-city-section .year-row').forEach(r => r.classList.remove('active'));
        yearRow.classList.add('active');
        if (year) window.history.replaceState(null, '', `#${year}`);

        setTimeout(() => {
          yearRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 150);
      }
    };

    yearCitySection.addEventListener('click', handleYearRowClick);

    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const yearRow = yearCitySection.querySelector(`[data-year="${hash.slice(1)}"]`);
        if (yearRow) {
          yearRow.classList.add('active');
          setTimeout(() => {
            yearRow.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 300);
        }
      }
    };

    window.addEventListener('hashchange', handleHashScroll);
    handleHashScroll();

    return () => {
      yearCitySection.removeEventListener('click', handleYearRowClick);
      window.removeEventListener('hashchange', handleHashScroll);
    };
  }, [isMounted]);
}
