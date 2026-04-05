import { useState, useEffect } from 'react';
import { ConcertData, Language } from '@/types';
import { concertDataZHCN } from '@/db/data_zh_cn';
import { concertDataEN } from '@/db/data_en';
import { concertDataZHTW } from '@/db/data_zh_tw';

const dataMap: Record<Language, ConcertData> = {
  'zh-cn': concertDataZHCN,
  'en': concertDataEN,
  'zh-tw': concertDataZHTW
};

const isValidLanguage = (lang: string): lang is Language => {
  return lang === 'zh-cn' || lang === 'en' || lang === 'zh-tw';
};

export function useLanguageInit() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('zh-cn');
  const [currentData, setCurrentData] = useState<ConcertData>(concertDataZHCN);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const savedLang = localStorage.getItem('concertJourneyLang');
    if (savedLang && isValidLanguage(savedLang)) {
      setCurrentLanguage(savedLang);
      setCurrentData(dataMap[savedLang]);
    } else {
      const browserLang = navigator.language.toLowerCase();
      let lang: Language = 'en';
      if (browserLang.startsWith('zh-tw') || browserLang.startsWith('zh-hant')) {
        lang = 'zh-tw';
      } else if (browserLang.startsWith('zh')) {
        lang = 'zh-cn';
      }
      setCurrentLanguage(lang);
      setCurrentData(dataMap[lang]);
    }
    setIsMounted(true);
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setCurrentLanguage(lang);
    setCurrentData(dataMap[lang]);
    if (typeof window !== 'undefined') {
      localStorage.setItem('concertJourneyLang', lang);
    }
  };

  return {
    currentLanguage,
    currentData,
    isMounted,
    handleLanguageChange
  };
}
