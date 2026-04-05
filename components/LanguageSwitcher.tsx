import React from 'react';
import { Language } from '@/types';

interface LanguageSwitcherProps {
  currentLanguage: Language;
  onChange: (lang: Language) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLanguage, onChange }) => {
  return (
    <div className="language-switcher" role="group" aria-label="语言切换">
      <button
        className={`lang-btn ${currentLanguage === 'zh-cn' ? 'active' : ''}`}
        onClick={() => onChange('zh-cn')}
        aria-pressed={currentLanguage === 'zh-cn'}
        aria-label="切换到简体中文"
      >
        简体
      </button>
      <button
        className={`lang-btn ${currentLanguage === 'en' ? 'active' : ''}`}
        onClick={() => onChange('en')}
        aria-pressed={currentLanguage === 'en'}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        className={`lang-btn ${currentLanguage === 'zh-tw' ? 'active' : ''}`}
        onClick={() => onChange('zh-tw')}
        aria-pressed={currentLanguage === 'zh-tw'}
        aria-label="切換到繁體中文"
      >
        繁体
      </button>
    </div>
  );
};

export default LanguageSwitcher;
