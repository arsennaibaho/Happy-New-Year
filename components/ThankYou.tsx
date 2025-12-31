
import React from 'react';

interface ThankYouProps {
  onContinue: () => void;
  onBack: () => void;
}

const ThankYou: React.FC<ThankYouProps> = ({ onContinue, onBack }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-br from-pink-200 via-rose-100 to-orange-100 p-6 text-center">
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

      {/* Background Static Decorative Elements */}
      <div className="absolute top-0 right-0 p-10 text-pink-300 opacity-30">
        <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </div>
      
      <div className="z-10 flex flex-col items-center max-w-3xl px-4">
        <div className="space-y-6">
          <p className="text-rose-600 text-lg md:text-2xl font-medium leading-relaxed">
            Terima kasih sudah membaca sampai akhir.
          </p>
          <p className="text-rose-600 text-lg md:text-2xl font-medium leading-relaxed">
            Kalau kamu di sini, artinya kamu penting.
          </p>
          <div className="space-y-4">
            <p className="text-rose-700 text-xl md:text-3xl font-serif font-bold italic leading-tight">
              sayangku, cintaku, hasianku, bocilku, cantikku, manisku, imutku, manjaku, lucuku, my little princess, gula jawaku, bulanku, matahariku, duniaku, semestaku, rumahku wanitaku yang paling aku sayangi dan cintai
            </p>
            <p className="text-rose-500 text-2xl md:text-4xl font-serif font-bold italic">
              i love you so much 🤍
            </p>
          </div>
        </div>
      </div>

      {/* Subtle Flower Icon at Bottom */}
      <div className="absolute bottom-10 left-10 text-orange-300 opacity-40">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,22C12,22 10,18 10,15C10,13.9 10.9,13 12,13C13.1,13 14,13.9 14,15C14,18 12,22 12,22M12,2C12,2 14,6 14,9C14,10.1 13.1,11 12,11C10.9,11 10,10.1 10,9C10,6 12,2 12,2M22,12C22,12 18,14 15,14C13.9,14 13,13.1 13,12C13,10.9 13.9,10 15,10C18,10 22,12 22,12M2,12C2,12 6,10 9,10C10.1,10 11,10.9 11,12C11,13.1 10.1,14 9,14C6,14 2,12 2,12Z" />
        </svg>
      </div>
    </div>
  );
};

export default ThankYou;
