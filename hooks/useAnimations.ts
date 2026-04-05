import {
  useHeroAnimations,
  useSectionSpacingAnimation,
  useTravelerAnimation,
  useTravelerAutoAnimation,
  useBrandAnimation,
  useProjectImageVisibility
} from './animations';

export {
  useHeroAnimations,
  useSectionSpacingAnimation,
  useTravelerAnimation,
  useTravelerAutoAnimation,
  useBrandAnimation,
  useProjectImageVisibility
};

export function useInitAllAnimations(isReady: boolean) {
  useHeroAnimations(isReady);
  useSectionSpacingAnimation(isReady);
  useTravelerAnimation(isReady);
  useTravelerAutoAnimation(isReady);
  useBrandAnimation(isReady);
  useProjectImageVisibility(isReady);
}
