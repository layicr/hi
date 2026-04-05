import React from 'react';
import Image from 'next/image';
import { ConcertData, YearItem } from '@/types';

interface YearCitySectionProps {
  data: ConcertData;
  showMore: boolean;
  onShowMore: () => void;
}

const YearCitySection: React.FC<YearCitySectionProps> = ({ data, showMore, onShowMore }) => {
  const renderYearItem = (yearItem: YearItem, index: number) => {
    const cityCount = yearItem.details.length.toString();
    return (
      <React.Fragment key={index}>
        <div className="year-row" data-year={yearItem.year}>
          <div className="expand-icon" aria-hidden="true">▼</div>
          <div className="year">{yearItem.year}</div>
          <div className="city">{cityCount}</div>
        </div>
        <div className="race-details">
          {yearItem.details.length > 0 && (
            <div className="year-city-header race-detail-header">
              <div>{data.yearCitySection.roundHeader}</div>
              <div>{data.yearCitySection.headers.location}</div>
              <div>{data.yearCitySection.headers.date}</div>
            </div>
          )}
          {yearItem.details.map((detail, detailIndex) => (
            <div className="race-row" key={detailIndex}>
              <div className="round">{String(detailIndex + 1).padStart(2, '0')}</div>
              <div className="location">
                {detail.location}
                <Image
                  src={`https://flagcdn.com/w80/${detail.flag}.png`}
                  alt={`${detail.location} 国旗`}
                  width={30}
                  height={20}
                />
              </div>
              <div className="date">{detail.date}</div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  };

  return (
    <section className="year-city-section" id="year-city" aria-label="年份城市列表">
      <div className="year-city-container">
        <div className="year-city-header" role="row">
          <div></div>
          <div role="columnheader">{data.yearCitySection.headers.year}</div>
          <div role="columnheader">{data.yearCitySection.headers.city}</div>
        </div>

        {data.yearCitySection.yearsFirstHalf.map((yearItem, index) => renderYearItem(yearItem, index))}

        {!showMore && data.yearCitySection.yearsSecondHalf.length > 0 && (
          <div
            className="show-more-btn"
            onClick={onShowMore}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onShowMore();
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={data.yearCitySection.showMoreText}
          >
            {data.yearCitySection.showMoreText}
          </div>
        )}

        {showMore && data.yearCitySection.yearsSecondHalf.map((yearItem, index) => renderYearItem(yearItem, index))}
      </div>
    </section>
  );
};

export default YearCitySection;
