import Head from 'next/head';
import Script from 'next/script';
import React, { useState, useCallback, useEffect } from 'react';
import dynamic from 'next/dynamic';

import { useLanguageInit } from '@/hooks/useLanguageInit';
import { useYearCityInteraction } from '@/hooks/useYearCityInteraction';
import { useTravelerAutoScroll } from '@/hooks/useTravelerAutoScroll';
import { useProjectVisibility } from '@/hooks/useProjectVisibility';
import { useInitAllAnimations, useBrandAnimation } from '@/hooks/useAnimations';
import { useVisibleOnScroll } from '@/hooks/useIntersectionObserver';

import HeroSection from '@/components/HeroSection';
import SectionSpacing from '@/components/SectionSpacing';
import TravelerSection from '@/components/TravelerSection';
import YearCitySection from '@/components/YearCitySection';
import BrandSection from '@/components/BrandSection';
import ProjectSection from '@/components/ProjectSection';
import SocialSection from '@/components/SocialSection';
import Footer from '@/components/Footer';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import BackToTop from '@/components/BackToTop';
import Loading from '@/components/Loading';
import ErrorBoundary from '@/components/ErrorBoundary';

const SphereGallery = dynamic(() => import('@/components/SphereGallery'), {
  ssr: false,
  loading: () => <Loading />
});

const Home: React.FC = () => {
  const { currentLanguage, currentData, isMounted, handleLanguageChange } = useLanguageInit();
  const [showMoreYears, setShowMoreYears] = useState(false);
  const [socialExpanded, setSocialExpanded] = useState(false);

  useYearCityInteraction(isMounted);
  useTravelerAutoScroll(isMounted);
  const showProjectLeftSection = useProjectVisibility(isMounted);

  const showBackToTop = useVisibleOnScroll(300);
  useInitAllAnimations(isMounted);
  useBrandAnimation(isMounted, currentData.brandSection.quote);

  useEffect(() => {
    if (isMounted && typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'auto' });
      const scrollToTop = () => {
        window.scrollTo(0, 0);
      };
      scrollToTop();
      setTimeout(scrollToTop, 100);
      setTimeout(scrollToTop, 200);
    }
  }, [isMounted]);

  const handleBackToTop = useCallback(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const handleRoleClick = useCallback((index: number) => {
    if (typeof window === 'undefined') return;

    const selectors = ['.section-spacing', '.traveler-section', '.brand-section'];
    if (index >= 0 && index < 3) {
      const el = document.querySelector(selectors[index]);
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (index === 3) {
      window.open(currentData.blogUrl, '_blank');
    }
  }, [currentData.blogUrl]);

  if (!isMounted) {
    return (
      <>
        <LanguageSwitcher currentLanguage={currentLanguage} onChange={handleLanguageChange} />
        <Loading />
      </>
    );
  }

  return (
    <ErrorBoundary>
      <LanguageSwitcher currentLanguage={currentLanguage} onChange={handleLanguageChange} />
      <div className="container">
        <Head>
          <title>{currentData.pageTitle}</title>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content={currentData.seoDescription} />
          <meta name="keywords" content={currentData.seoKeywords} />
          <meta name="author" content={currentData.seoAuthor} />
          <meta name="robots" content="index, follow" />
          <link rel="alternate" hrefLang="zh" href={`${currentData.seoUrl}/?lang=zh`} />
          <link rel="alternate" hrefLang="en" href={`${currentData.seoUrl}/?lang=en`} />
          <link rel="alternate" hrefLang="x-default" href={currentData.seoUrl} />
          <link rel="canonical" href={currentData.seoUrl} />
          <meta property="og:title" content={currentData.pageTitle} />
          <meta property="og:description" content={currentData.seoDescription} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={currentData.seoUrl} />
          <meta property="og:image" content="/img/logo.jpg" />
          <meta property="og:locale" content="zh_CN" />
          <meta property="og:locale:alternate" content="en_US" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={currentData.pageTitle} />
          <meta name="twitter:description" content={currentData.seoDescription} />
          <meta name="theme-color" content="#6a7dc2" />
          <link rel="icon" href="/img/logo.jpg" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Layicr",
                "url": currentData.seoUrl,
                "description": currentData.seoDescription,
                "sameAs": [
                  "https://github.com/layicr",
                  "https://twitter.com/layicr",
                  "https://www.instagram.com/ilayicr"
                ]
              })
            }}
          />
        </Head>

        <Script src="/js/analytics.js" strategy="lazyOnload" crossOrigin="anonymous" />

        <div className="background-circles" aria-hidden="true">
          <div className="logo-letter">L</div>
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
        </div>

        <HeroSection data={currentData} onRoleClick={handleRoleClick} />
        <SectionSpacing data={currentData} />
        <TravelerSection data={currentData} />

        <section className="sphere-gallery-section" aria-label="照片墙">
          <SphereGallery images={currentData.sphereGallery.images} language={currentLanguage} />
          <div
            className="sphere-arrow-up"
            onClick={() => document.querySelector('.section-spacing')?.scrollIntoView({ behavior: 'smooth' })}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                document.querySelector('.section-spacing')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={currentData.arrowUpLabel}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M17 11l-5-5-5 5M17 18l-5-5-5 5"/>
            </svg>
            <span className="arrow-label">{currentData.arrowUpLabel}</span>
          </div>
          <div
            className="sphere-arrow-down"
            onClick={() => document.querySelector('#year-city')?.scrollIntoView({ behavior: 'smooth' })}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                document.querySelector('#year-city')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={currentData.arrowDownLabel}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
            </svg>
            <span className="arrow-label">{currentData.arrowDownLabel}</span>
          </div>
        </section>

        <YearCitySection data={currentData} showMore={showMoreYears} onShowMore={() => setShowMoreYears(true)} />
        <BrandSection data={currentData} />
        <ProjectSection data={currentData} showLeftSection={showProjectLeftSection} />
        <SocialSection data={currentData} expanded={socialExpanded} onToggle={() => setSocialExpanded(!socialExpanded)} language={currentLanguage} />
        <Footer data={currentData} />
        <BackToTop visible={showBackToTop} onClick={handleBackToTop} label={currentData.arrowUpLabel} />
      </div>
    </ErrorBoundary>
  );
};

export default Home;
