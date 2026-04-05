import React, { memo } from 'react';
import { ConcertData } from '@/types';

interface TravelerSectionProps {
  data: ConcertData;
}

const TravelerSection: React.FC<TravelerSectionProps> = memo(({ data }) => {
  return (
    <section className="traveler-section" aria-label="行者">
      <div className="traveler-intro">
        <div className="traveler-line line-1">
          <span className="word">{data.travelerSection.lines[0]}</span>
        </div>
        <div className="traveler-line line-2">
          <span className="word">{data.travelerSection.lines[1]}</span>
        </div>
        <div className="traveler-line line-3">
          <span className="word">{data.travelerSection.lines[2]}</span>
        </div>
      </div>
    </section>
  );
});

TravelerSection.displayName = 'TravelerSection';

export default TravelerSection;
