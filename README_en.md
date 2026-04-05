# Layicr - Personal Website

[中文](README.md) | English

A personal website built with Next.js, supporting Simplified Chinese, English, and Traditional Chinese language switching, featuring rich animations and 3D interactive experiences.

## Tech Stack

- **Framework**: Next.js 14.1.0
- **UI Library**: React 18.2.0
- **Styling**: Tailwind CSS v4.2.2
- **3D Rendering**: Three.js + @react-three/fiber + @react-three/drei
- **Animation**: GSAP 3.14.2
- **Language**: TypeScript 5.3.3

## Features

### Multi-language Support
- Supports switching between Simplified Chinese, English, and Traditional Chinese
- All text content supports three languages

### Page Modules

1. **Hero Section** - Main visual area, showcasing personal role tags
2. **Section Spacing** - Text display area with highlighting effects
3. **Traveler Section** - Traveler theme area
4. **Sphere Gallery** - 3D sphere gallery (using Three.js), supports thumbnail and original image switching
5. **Year City Section** - Year-city timeline, recording travel footprints, supports expand/collapse
6. **Brand Section** - Personal brand area
7. **Project Section** - Project list display
8. **Social Section** - Social images and links display
9. **Footer** - Footer information

## Project Structure

```
hi3/
├── components/          # React components
│   ├── BackToTop.tsx        # Back to top button
│   ├── BrandSection.tsx     # Brand section
│   ├── ErrorBoundary.tsx    # Error boundary
│   ├── Footer.tsx           # Footer
│   ├── HeroSection.tsx      # Hero section
│   ├── LanguageSwitcher.tsx # Language switcher
│   ├── Loading.tsx          # Loading component
│   ├── ProjectSection.tsx   # Project section
│   ├── SectionSpacing.tsx   # Section spacing
│   ├── SocialSection.tsx    # Social section
│   ├── SphereGallery.tsx   # 3D sphere gallery
│   ├── TravelerSection.tsx # Traveler section
│   └── YearCitySection.tsx # Year-city timeline
├── db/                  # Data files
│   ├── constants.ts     # Constants (gallery images, social images, social links)
│   ├── data_en.ts       # English data
│   ├── data_zh_cn.ts    # Simplified Chinese data
│   └── data_zh_tw.ts    # Traditional Chinese data
├── hooks/               # Custom Hooks
│   ├── animations/      # Animation related hooks
│   │   ├── index.ts
│   │   ├── useBrandAnimation.ts
│   │   ├── useHeroAnimations.ts
│   │   ├── useProjectImageVisibility.ts
│   │   ├── useSectionSpacingAnimation.ts
│   │   ├── useTravelerAnimation.ts
│   │   └── useTravelerAutoAnimation.ts
│   ├── useAnimations.ts
│   ├── useIntersectionObserver.ts
│   ├── useLanguageInit.ts
│   ├── useProjectVisibility.ts
│   ├── useTravelerAutoScroll.ts
│   └── useYearCityInteraction.ts
├── pages/               # Next.js pages
│   ├── _app.tsx
│   └── index.tsx
├── public/              # Static assets
│   ├── img/
│   │   ├── logo.jpg
│   │   └── projects/    # Project images
│   └── js/
│       └── analytics.js
├── styles/              # Style files
│   └── globals.css
├── types/               # TypeScript type definitions
│   └── index.ts
├── .gitignore
├── next.config.js
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Quick Start

### Install Dependencies

```bash
npm install
```

### Development Mode

```bash
npm run dev
```

Visit http://localhost:3000

### Production Build
> The project uses static export mode, build output is in the `out` directory.

```bash
npm run build
npx serve@latest out
```