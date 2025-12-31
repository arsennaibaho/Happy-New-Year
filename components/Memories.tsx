
import React from 'react';

interface MemoriesProps {
  onContinue: () => void;
  onBack: () => void;
}

const Memories: React.FC<MemoriesProps> = ({ onContinue, onBack }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-rose-50 p-6 text-center">
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

      {/* Journey-themed Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-rose-100 to-fuchsia-200 opacity-70"></div>
      
      {/* Decorative Travel Paths (SVG Curves) */}
      <svg className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0,20 Q30,5 50,25 T100,10" fill="none" stroke="#db2777" strokeWidth="0.2" strokeDasharray="1,1" />
        <path d="M0,80 Q20,95 40,75 T100,90" fill="none" stroke="#db2777" strokeWidth="0.2" strokeDasharray="1,1" />
      </svg>

      {/* Floating Hearts/Soft Blurs */}
      <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-pink-400/20 rounded-full blur-[80px] animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-fuchsia-400/20 rounded-full blur-[90px] animate-pulse delay-700"></div>

      <div className="z-10 flex flex-col items-center max-w-2xl px-4 animate-in fade-in zoom-in duration-1000">
        {/* Memory Icon */}
        <div className="mb-6 opacity-60">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>

        <h2 className="text-5xl md:text-7xl font-serif font-bold text-rose-800 mb-6 drop-shadow-sm tracking-tight">
          Kita Tahun 2024 Ini
        </h2>
        
        <p className="text-rose-700/80 text-lg md:text-xl font-medium tracking-wide mb-16 leading-relaxed max-w-md">
          Telah banyak hal kita lalui bersama-sama hingga hari ini kita masih di sini. Bersama.
        </p>
        
        <button
          onClick={onContinue}
          className="group px-14 py-4 bg-rose-600 text-white font-bold rounded-full hover:bg-rose-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-rose-200 active:scale-95 flex items-center gap-3"
        >
          <span className="tracking-widest uppercase text-sm">Lanjut Perjalanan</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
      
      {/* Small Quote at Bottom */}
      <div className="absolute bottom-8 text-rose-400/60 text-xs italic font-serif">
        Setiap langkah adalah kenangan berharga
      </div>
    </div>
  );
};

export default Memories;
