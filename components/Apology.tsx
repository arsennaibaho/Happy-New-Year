
import React from 'react';

interface ApologyProps {
  onContinue: () => void;
  onBack: () => void;
}

const Apology: React.FC<ApologyProps> = ({ onContinue, onBack }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-pink-50 p-6 text-center">
      {/* Back Button */}
      <button 
        onClick={onBack}
        className="absolute top-6 left-6 z-20 flex items-center gap-2 text-rose-600/80 hover:text-rose-600 transition-colors font-medium"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Kembali
      </button>

      {/* Soft Pink Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-rose-100 to-pink-50 opacity-60"></div>
      
      {/* Decorative Floating Circles */}
      <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-rose-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl"></div>

      <div className="z-10 flex flex-col items-center max-w-2xl px-4">
        <h2 className="text-7xl md:text-9xl font-serif font-bold text-rose-400 mb-8 drop-shadow-sm">
          Maaf
        </h2>
        
        <div className="space-y-4 mb-16 max-w-md">
          <p className="text-rose-700/80 text-lg md:text-xl font-medium tracking-wide leading-relaxed">
            Maaf kalau aku belum bisa jadi pasangan yang terbaik.
          </p>
          <p className="text-rose-700/80 text-lg md:text-xl font-medium tracking-wide leading-relaxed">
            Tapi aku selalu ingin belajar untuk kita.
          </p>
        </div>
        
        <button
          onClick={onContinue}
          className="group px-14 py-4 bg-rose-400 text-white font-bold rounded-full hover:bg-rose-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-rose-100 active:scale-95 flex items-center gap-3"
        >
          <span className="tracking-widest uppercase text-sm">KLIK INI YA</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>

      {/* Small Heart Icon at Bottom */}
      <div className="absolute bottom-12 opacity-20">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="rose-400" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>
    </div>
  );
};

export default Apology;
