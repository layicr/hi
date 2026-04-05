export interface GalleryImage {
  thumbnail: string;
  fullSize: string;
  zhLabel?: string;
  enLabel?: string;
  twLabel?: string;
}

export interface ConcertData {
  pageTitle: string;
  seoDescription: string;
  seoKeywords: string;
  seoAuthor: string;
  seoUrl: string;
  profileLabel: string;
  siteName: string;
  roles: string[];
  blogUrl: string;
  arrowUpLabel: string;
  arrowDownLabel: string;
  sectionSpacing: {
    lines: string[];
    highlightIndex: number;
  };
  travelerSection: {
    lines: string[];
  };
  sphereGallery: {
    images: GalleryImage[];
  };
  yearCitySection: {
    headers: {
      year: string;
      city: string;
      location: string;
      date: string;
    };
    roundHeader: string;
    showMoreText: string;
    yearsFirstHalf: YearItem[];
    yearsSecondHalf: YearItem[];
  };
  brandSection: {
    quote: string;
  };
  projectListSection: {
    title: string;
    projects: ProjectItem[];
  };
  socialSection: {
    titleLine1: string;
    titleLine2: string;
    followText: string;
    images: SocialImage[];
    socialLinks: SocialLink[];
  };
}

export interface YearItem {
  year: string;
  details: YearDetail[];
}

export interface YearDetail {
  location: string;
  flag: string;
  date: string;
}

export interface ProjectItem {
  name: string;
  image: string;
}

export interface SocialImage {
  src: string;
  zhLabel: string;
  enLabel: string;
  twLabel?: string;
}

export interface SocialLink {
  icon: string;
  url: string;
  zhLabel: string;
  enLabel: string;
  twLabel?: string;
}

export type Language = 'zh-cn' | 'en' | 'zh-tw';

export interface AnimationConfig {
  duration: number;
  ease: string;
  stagger: number;
}

export const ANIMATION_DEFAULTS: AnimationConfig = {
  duration: 0.8,
  ease: 'power2.out',
  stagger: 0.1
};

export const GSAP_LOAD_TIMEOUT = 5000;
export const GSAP_CHECK_INTERVAL = 100;
export const GSAP_INIT_DELAY = 500;
