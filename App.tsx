
import React, { useState, useEffect } from 'react';
import { AppState, CardData, GeneratedContent } from './types';
import Landing from './components/Landing';
import SpecialMessage from './components/SpecialMessage';
import Memories from './components/Memories';
import NewYearWish from './components/NewYearWish';
import Apology from './components/Apology';
import Surprise from './components/Surprise';
import ThankYou from './components/ThankYou';
import CardForm from './components/CardForm';
import CardResult from './components/CardResult';
import { generateCardContent } from './services/geminiService';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>(AppState.LANDING);
  const [cardData, setCardData] = useState<CardData | null>(null);
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Scroll to top on state change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [state]);

  const handleGenerate = async (data: CardData) => {
    setCardData(data);
    setState(AppState.GENERATING);
    setError(null);
    
    try {
      const content = await generateCardContent(data);
      setGeneratedContent(content);
      setState(AppState.RESULT);
    } catch (err) {
      console.error(err);
      setError("Maaf, terjadi kesalahan saat merangkai kata. Silakan coba lagi.");
      setState(AppState.FORM);
    }
  };

  const navigateTo = (newState: AppState) => {
    setState(newState);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-pink-200 selection:text-pink-900">
      {state === AppState.LANDING && (
        <Landing onStart={() => navigateTo(AppState.SPECIAL_MESSAGE)} />
      )}

      {state === AppState.SPECIAL_MESSAGE && (
        <SpecialMessage 
          onContinue={() => navigateTo(AppState.MEMORIES)} 
          onBack={() => navigateTo(AppState.LANDING)} 
        />
      )}

      {state === AppState.MEMORIES && (
        <Memories 
          onContinue={() => navigateTo(AppState.WISHES)} 
          onBack={() => navigateTo(AppState.SPECIAL_MESSAGE)} 
        />
      )}

      {state === AppState.WISHES && (
        <NewYearWish 
          onContinue={() => navigateTo(AppState.APOLOGY)} 
          onBack={() => navigateTo(AppState.MEMORIES)} 
        />
      )}

      {state === AppState.APOLOGY && (
        <Apology 
          onContinue={() => navigateTo(AppState.SURPRISE)} 
          onBack={() => navigateTo(AppState.WISHES)} 
        />
      )}

      {state === AppState.SURPRISE && (
        <Surprise 
          onContinue={() => navigateTo(AppState.THANK_YOU)} 
          onBack={() => navigateTo(AppState.APOLOGY)} 
        />
      )}

      {state === AppState.THANK_YOU && (
        <ThankYou 
          onBack={() => navigateTo(AppState.SURPRISE)} 
        />
      )}

      {state === AppState.FORM && (
        <CardForm 
          onSubmit={handleGenerate} 
          onBack={() => navigateTo(AppState.THANK_YOU)} 
        />
      )}

      {state === AppState.GENERATING && (
        <div className="min-h-screen flex flex-col items-center justify-center bg-indigo-50 p-6 text-center animate-in fade-in duration-500">
          <div className="relative">
            <div className="w-24 h-24 border-4 border-indigo-100 border-t-indigo-600 rounded-full animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center text-2xl">✨</div>
          </div>
          <h2 className="text-3xl font-serif font-bold text-indigo-900 mt-8 mb-2 italic">Merangkai Kata Ajaib...</h2>
          <p className="text-indigo-600/70 max-w-sm">
            AI kami sedang memilih kata-kata terbaik untuk menciptakan kartu ucapan yang tak terlupakan.
          </p>
        </div>
      )}

      {state === AppState.RESULT && generatedContent && cardData && (
        <CardResult 
          content={generatedContent} 
          data={cardData} 
          onRestart={() => navigateTo(AppState.LANDING)} 
          onBack={() => navigateTo(AppState.FORM)} 
        />
      )}

      {/* Global Error Toast */}
      {error && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-red-600 text-white px-6 py-3 rounded-full shadow-2xl z-50 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4">
          <span className="font-medium">{error}</span>
          <button onClick={() => setError(null)} className="hover:opacity-70 text-xl font-bold leading-none">&times;</button>
        </div>
      )}
    </div>
  );
};

export default App;
