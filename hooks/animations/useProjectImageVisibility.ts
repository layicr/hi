import { useEffect } from 'react';

export function useProjectImageVisibility(isReady: boolean) {
  useEffect(() => {
    if (!isReady || typeof window === 'undefined') return;

    let thinkingTimeout: ReturnType<typeof setTimeout> | null = null;
    let currentIndex = 0;

    const projectItems = document.querySelectorAll('.project-item');
    const images = document.querySelectorAll<HTMLImageElement>('.project-item-image');

    const clearAllThinking = () => {
      projectItems.forEach((item, i) => {
        item.classList.remove('thinking', 'thinking-ended');
        if (images[i]) images[i].classList.remove('visible');
      });
    };

    const activateItem = (index: number) => {
      clearAllThinking();

      if (thinkingTimeout) clearTimeout(thinkingTimeout);

      currentIndex = index;
      const item = projectItems[index];
      if (item && images[index]) {
        item.classList.add('thinking');
        if (images[index]) images[index].classList.add('visible');

        item.scrollIntoView({ behavior: 'smooth', block: 'center' });

        thinkingTimeout = setTimeout(() => {
          item.classList.remove('thinking');
          item.classList.add('thinking-ended');
          thinkingTimeout = null;
        }, 2000);
      }
    };

    const goToPrev = () => {
      if (currentIndex > 0) {
        activateItem(currentIndex - 1);
      }
    };

    const goToNext = () => {
      if (currentIndex < projectItems.length - 1) {
        activateItem(currentIndex + 1);
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 0) {
        if (currentIndex < projectItems.length - 1) {
          e.preventDefault();
          goToNext();
        }
      } else if (e.deltaY < 0) {
        if (currentIndex > 0) {
          e.preventDefault();
          goToPrev();
        }
      }
    };

    const handleMouseEnter = () => {
      if (currentIndex < projectItems.length - 1) {
        goToNext();
      }
    };

    const handleMouseLeave = () => {
      clearAllThinking();
      if (thinkingTimeout) {
        clearTimeout(thinkingTimeout);
        thinkingTimeout = null;
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') {
        if (currentIndex > 0) {
          e.preventDefault();
          goToPrev();
        }
      } else if (e.key === 'ArrowDown') {
        if (currentIndex < projectItems.length - 1) {
          e.preventDefault();
          goToNext();
        }
      }
    };

    const rightSection = document.querySelector('.project-right-section') as HTMLElement | null;
    if (rightSection) {
      rightSection.addEventListener('mouseenter', handleMouseEnter);
      rightSection.addEventListener('mouseleave', handleMouseLeave);
      rightSection.addEventListener('wheel', handleWheel, { passive: false });
      rightSection.addEventListener('keydown', handleKeyDown);
      rightSection.tabIndex = 0;
    }

    if (projectItems.length > 0) {
      activateItem(0);
    }

    window.addEventListener('load', () => {
      if (projectItems.length > 0) {
        activateItem(0);
      }
    });

    return () => {
      if (rightSection) {
        rightSection.removeEventListener('mouseenter', handleMouseEnter);
        rightSection.removeEventListener('mouseleave', handleMouseLeave);
        rightSection.removeEventListener('wheel', handleWheel);
        rightSection.removeEventListener('keydown', handleKeyDown);
      }
      if (thinkingTimeout) clearTimeout(thinkingTimeout);
    };
  }, [isReady]);
}
