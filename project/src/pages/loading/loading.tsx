import React from 'react';
import { Vortex } from 'react-loader-spinner';

const Loading: React.FC = () => (
  <div className="root">
    <Vortex
      visible
      height="80"
      width="80"
      ariaLabel="vortex-loading"
      wrapperStyle={{}}
      wrapperClass="vortex-wrapper"
      colors={[
        '#417485',
        '#6d7fa8',
        '#4d5582',
        '#5398b8',
        '#5387b8',
        '#536ab8',
      ]}
    />
    <span>Loading...</span>
  </div>
);

export default Loading;
