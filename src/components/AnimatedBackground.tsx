import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Light gradient orbs matching the image */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-200 via-blue-200 to-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-br from-indigo-200 via-blue-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-40 right-40 w-80 h-80 bg-gradient-to-br from-blue-300 via-cyan-200 to-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-6000"></div>
      
      {/* Additional smaller orbs */}
      <div className="absolute top-1/4 right-1/4 w-60 h-60 bg-gradient-to-br from-blue-100 via-blue-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-blob animation-delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/4 w-60 h-60 bg-gradient-to-br from-cyan-100 via-blue-100 to-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-blob animation-delay-3000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-blue-200 via-cyan-100 to-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-5000"></div>
      
      {/* Light overlay to create the soft background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white/90 to-blue-50/80"></div>
    </div>
  );
};

export default AnimatedBackground;