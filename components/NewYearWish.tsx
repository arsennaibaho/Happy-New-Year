
import React from 'react';

interface NewYearWishProps {
  onContinue: () => void;
  onBack: () => void;
}

const NewYearWish: React.FC<NewYearWishProps> = ({ onContinue, onBack }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-[#0a0a2a] p-6 text-center">
      {/* Back Button */}
      <button 
        onClick={onBack}
        className="absolute top-6 left-6 z-20 flex items-center gap-2 text-blue-200/80 hover:text-white transition-colors font-medium"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Kembali
      </button>

      {/* Night Sky Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a2a] via-[#1a1a4a] to-[#2d1b4d]"></div>
      
      {/* Static Stars (Animation removed) */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 3 + 'px',
              height: Math.random() * 3 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
            }}
          />
        ))}
      </div>

      {/* Subtle Moon Glow */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[120px]"></div>

      {/* Content Container (Entrance animation removed) */}
      <div className="z-10 flex flex-col items-center max-w-2xl px-4">
        <h2 className="text-5xl md:text-7xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-100 to-indigo-200 mb-8 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          Harapanku di Tahun Baru
        </h2>
        
        <div className="space-y-2 mb-16">
          <p className="text-blue-100/90 text-lg md:text-xl font-light tracking-wide leading-relaxed">
            Aku tidak meminta tahun yang sempurna
          </p>
          <p className="text-blue-100/90 text-lg md:text-xl font-light tracking-wide leading-relaxed">
            Aku hanya ingin tahun yang masih ada kamu di dalamnya.
          </p>
        </div>
        
        <button
          onClick={onContinue}
          className="group px-14 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-full hover:bg-white hover:text-[#0a0a2a] transition-all duration-500 transform hover:scale-105 active:scale-95 flex items-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
        >
          <span className="tracking-widest uppercase text-sm">Lanjut</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>

      {/* Decorative Star Constellation Icon */}
      <div className="absolute bottom-12 opacity-30">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L14.85 8.15L21.5 9.15L16.75 13.9L17.9 20.5L12 17.4L6.1 20.5L7.25 13.9L2.5 9.15L9.15 8.15L12 2Z" fill="white" />
        </svg>
      </div>
    </div>
  );
};

export default NewYearWish;
