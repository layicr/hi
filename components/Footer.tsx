import React, { memo } from 'react';
import { ConcertData } from '@/types';

interface FooterProps {
  data: ConcertData;
}

const Footer: React.FC<FooterProps> = memo(({ data }) => {
  return (
    <footer className="footer-section" role="contentinfo">
      <div className="footer-content">© {data.siteName}</div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
