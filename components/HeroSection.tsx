import React from 'react';
import Image from 'next/image';
import { ConcertData } from '@/types';

interface HeroSectionProps {
  data: ConcertData;
  onRoleClick: (index: number) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ data, onRoleClick }) => {
  return (
    <section className="hero-section" aria-label="个人简介">
      <div className="profile-wrapper">
        <div className="orbit-container">
          <div className="avatar-section">
            <div className="avatar-container">
              <Image
                src="/img/logo.jpg"
                alt="layicr 头像"
                width={160}
                height={160}
                className="avatar-image"
                priority
              />
              <div className="status-dot" aria-hidden="true"></div>
            </div>
            <div className="avatar-border" aria-hidden="true"></div>
          </div>
        </div>

        <div className="profile-card">
          <div className="profile-label">{data.profileLabel}</div>
          <h1 className="profile-name">layicr</h1>
          <ul className="roles-list" role="list">
            {data.roles.map((role, index) => (
              <li
                key={index}
                className="role-item"
                onClick={() => onRoleClick(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onRoleClick(index);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={role}
              >
                {role}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
