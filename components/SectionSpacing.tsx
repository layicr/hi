import React, { memo } from 'react';
import { ConcertData } from '@/types';

interface SectionSpacingProps {
  data: ConcertData;
}

const SectionSpacing: React.FC<SectionSpacingProps> = memo(({ data }) => {
  return (
    <section className="section-spacing" aria-label="故事">
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <p className="section-text">
          {data.sectionSpacing.lines.map((line, index) => (
            <React.Fragment key={index}>
              <span className="text-line" data-index={index}>
                {index === data.sectionSpacing.highlightIndex && (
                  <span className="highlight-bg" aria-hidden="true"></span>
                )}
                {line}
              </span>
              {index < data.sectionSpacing.lines.length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>
      </div>
    </section>
  );
});

SectionSpacing.displayName = 'SectionSpacing';

export default SectionSpacing;
