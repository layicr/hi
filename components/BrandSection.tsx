import React, { memo } from 'react';
import { ConcertData } from '@/types';

interface BrandSectionProps {
  data: ConcertData;
}

const BrandSection: React.FC<BrandSectionProps> = memo(({ data }) => {
  return (
    <section className="brand-section" aria-label="个性品牌" key={data.brandSection.quote}>
      <div className="quote-container">
        <blockquote className="quote">{data.brandSection.quote}</blockquote>
      </div>
    </section>
  );
});

BrandSection.displayName = 'BrandSection';

export default BrandSection;
