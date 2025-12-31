
import React from 'react';

interface SurpriseProps {
  onContinue: () => void;
  onBack: () => void;
}

const Surprise: React.FC<SurpriseProps> = ({ onContinue, onBack }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative bg-[#ffe4e6] p-6 text-center">
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

      {/* Surprise Pink Theme Background - No Animations */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-100 to-rose-200 opacity-50"></div>
      
      {/* Decorative Static Elements */}
      <div className="absolute top-10 left-10 text-pink-300 opacity-40">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
      </div>
      <div className="absolute bottom-10 right-10 text-pink-300 opacity-40">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
      </div>

      <div className="z-10 flex flex-col items-center max-w-lg px-4">
        <p className="text-rose-600 text-base md:text-lg font-medium tracking-wide leading-relaxed mb-12">
          Aku sayang kamu, hari ini, besok, dan seterusnya.
        </p>
        
        <button
          onClick={onContinue}
          className="group px-10 py-3 bg-rose-500 text-white font-bold rounded-xl hover:bg-rose-600 transition-all duration-300 transform hover:scale-105 shadow-md active:scale-95 flex items-center gap-2"
        >
          <span>Lanjut</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Surprise;
