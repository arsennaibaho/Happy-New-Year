
import React from 'react';

interface LandingProps {
  onStart: () => void;
}

const Landing: React.FC<LandingProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden animate-gradient bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6 text-center">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-pink-400/20 rounded-full blur-3xl"></div>
      
      <div className="z-10 flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-12 drop-shadow-2xl">
          Kartu Ucapan untuk mu
        </h1>
        
        <button
          onClick={onStart}
          className="group relative inline-flex items-center justify-center px-10 py-5 font-semibold text-white transition-all duration-300 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full border border-white/50 hover:scale-105 active:scale-95 shadow-xl"
        >
          <span className="mr-2 text-lg">Mulai Membaca</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Landing;
