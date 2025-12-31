
import React from 'react';
import { GeneratedContent, CardData } from '../types';

interface CardResultProps {
  content: GeneratedContent;
  data: CardData;
  onRestart: () => void;
  onBack: () => void;
}

const CardResult: React.FC<CardResultProps> = ({ content, data, onRestart, onBack }) => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 flex flex-col items-center relative">
      {/* Back Button */}
      <button 
        onClick={onBack}
        className="absolute top-6 left-6 z-20 flex items-center gap-2 text-gray-500 hover:text-indigo-600 transition-colors font-medium"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Kembali ke Form
      </button>

      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8 items-center mt-8">
        
        {/* Visual Card Side */}
        <div 
          className="aspect-[4/5] w-full rounded-2xl shadow-2xl p-8 relative overflow-hidden flex flex-col items-center justify-center text-center"
          style={{ 
            backgroundColor: content.suggestedTheme.primaryColor,
            color: '#fff' 
          }}
        >
          {/* Subtle Pattern Background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '24px 24px' }}></div>
          
          <div className="z-10 relative">
            <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
              {data.occasion}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 italic leading-tight">
              {content.headline}
            </h2>
            <div className="w-16 h-1 bg-white/40 mx-auto mb-6"></div>
            {content.poem && (
              <p className="text-lg italic font-light whitespace-pre-line leading-relaxed mb-8">
                "{content.poem}"
              </p>
            )}
            <p className="text-sm font-medium tracking-wide">
              Teruntuk: {data.recipient}
            </p>
          </div>
        </div>

        {/* Content Side */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Pesan Lengkap</h3>
          <div className="prose prose-indigo max-w-none text-gray-600 mb-10">
            {content.message.split('\n').map((para, i) => (
              <p key={i} className="mb-4 leading-relaxed">{para}</p>
            ))}
          </div>
          
          <div className="border-t pt-6 flex flex-col gap-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-400">Pengirim</span>
              <span className="font-bold text-gray-800">{data.sender}</span>
            </div>
            
            <div className="flex gap-4 mt-4">
              <button 
                onClick={() => window.print()} 
                className="flex-1 bg-gray-800 hover:bg-black text-white font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                Cetak
              </button>
              <button 
                onClick={onRestart} 
                className="flex-1 border-2 border-gray-200 hover:border-indigo-600 hover:text-indigo-600 text-gray-600 font-semibold py-3 rounded-lg transition-all"
              >
                Ke Awal
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardResult;
