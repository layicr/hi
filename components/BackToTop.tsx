import React from 'react';

interface BackToTopProps {
  visible: boolean;
  onClick: () => void;
  label: string;
}

const BackToTop: React.FC<BackToTopProps> = ({ visible, onClick, label }) => {
  return (
    <button
      className={`back-to-top ${visible ? 'visible' : ''}`}
      onClick={onClick}
      aria-label={label}
      title={label}
    >
      <i className="fas fa-arrow-up" aria-hidden="true"></i>
    </button>
  );
};

export default BackToTop;
