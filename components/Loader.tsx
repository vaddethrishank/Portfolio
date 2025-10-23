
import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-pixel-black">
      <div className="w-16 h-16 relative mb-4">
        <div className="absolute top-0 left-0 w-4 h-4 bg-pixel-red animate-ping"></div>
        <div className="absolute top-0 right-0 w-4 h-4 bg-pixel-red animate-ping delay-100"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 bg-pixel-red animate-ping delay-200"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 bg-pixel-red animate-ping delay-300"></div>
      </div>
      <p className="text-pixel-white font-press-start text-sm tracking-widest animate-pulse">
        LOADING...
      </p>
    </div>
  );
};

export default Loader;
