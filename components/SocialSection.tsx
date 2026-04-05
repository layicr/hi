import React from 'react';
import Image from 'next/image';
import { ConcertData, Language } from '@/types';

interface SocialSectionProps {
  data: ConcertData;
  expanded: boolean;
  onToggle: () => void;
  language: Language;
}

const getLabel = (zhLabel: string, enLabel: string, twLabel: string | undefined, lang: Language) => {
  if (lang === 'zh-tw') return twLabel || zhLabel;
  if (lang === 'en') return enLabel;
  return zhLabel;
};

const SocialSection: React.FC<SocialSectionProps> = ({ data, expanded, onToggle, language }) => {
  return (
    <section className="social-section" aria-label="社交">
      <div className="social-container">
        <h2 className="social-title">
          <span className="social-title-line1">{data.socialSection.titleLine1}</span>
          <span className="social-title-line2">{data.socialSection.titleLine2}</span>
        </h2>

        <div
          className={`social-images-container ${expanded ? 'expanded' : ''}`}
          onClick={onToggle}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onToggle();
            }
          }}
          tabIndex={0}
          role="button"
          aria-expanded={expanded}
          aria-label="展开社交图片"
        >
          {data.socialSection.images.map((image, index) => (
            <div className="social-image-card" key={index}>
              <Image
                src={image.src}
                alt={getLabel(image.zhLabel, image.enLabel, image.twLabel, language)}
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="social-image-overlay">
                <span className="social-image-label">
                  {getLabel(image.zhLabel, image.enLabel, image.twLabel, language)}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="social-follow-text">{data.socialSection.followText}</div>
        <div className="social-links" role="list" aria-label="社交链接">
          {data.socialSection.socialLinks.map((link, index) => {
              const linkLabel = getLabel(link.zhLabel, link.enLabel, link.twLabel, language);
              return (
                <a
                  href={link.url}
                  className="social-link"
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={linkLabel}
                >
                  <i className={link.icon} aria-hidden="true"></i>
                  <span className="social-link-label">{linkLabel}</span>
                </a>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
