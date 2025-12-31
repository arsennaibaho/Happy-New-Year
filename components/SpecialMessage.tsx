
import React from 'react';

interface SpecialMessageProps {
  onContinue: () => void;
  onBack: () => void;
}

const SpecialMessage: React.FC<SpecialMessageProps> = ({ onContinue, onBack }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-pink-500 p-6 text-center">
      {/* Back Button */}
      <button 
        onClick={onBack}
        className="absolute top-6 left-6 z-20 flex items-center gap-2 text-white/80 hover:text-white transition-colors font-medium"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Kembali
      </button>

      <div className="z-10 flex flex-col items-center max-w-4xl mt-12">
        <h2 className="text-4xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-lg italic leading-tight">
          Happy New Year Cintaku
        </h2>
        
        <p className="text-white/90 text-lg md:text-xl font-medium mb-12 max-w-lg">
          Terima kasih sudah jadi bagian dari hidupku tahun ini
        </p>
        
        <button
          onClick={onContinue}
          className="group px-12 py-4 bg-white text-pink-600 font-bold rounded-2xl shadow-xl hover:bg-pink-50 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center gap-3"
        >
          <span>Lanjut</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SpecialMessage;
