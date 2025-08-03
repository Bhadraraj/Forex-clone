import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Orbs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-40 right-40 w-80 h-80 bg-gradient-to-br from-green-400 via-blue-500 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-6000"></div>
      
      {/* Additional smaller orbs */}
      <div className="absolute top-1/4 right-1/4 w-60 h-60 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/4 w-60 h-60 bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-3000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-orange-400 via-pink-500 to-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-5000"></div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/80 to-gray-900/90"></div>
    </div>
  );
};

export default AnimatedBackground;