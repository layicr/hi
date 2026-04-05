import React, { memo } from 'react';

const Loading: React.FC = memo(() => {
  return (
    <div
      className="loading-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: '#fafafa'
      }}
      role="status"
      aria-label="加载中"
    >
      <div
        className="loading-spinner"
        style={{
          width: '50px',
          height: '50px',
          border: '4px solid #f3f3f3',
          borderTop: '4px solid #4851ad',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }}
      />
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      <p style={{ marginTop: '20px', color: '#666', fontSize: '16px' }}>加载中...</p>
    </div>
  );
});

Loading.displayName = 'Loading';

export default Loading;
