
import React, { useState } from 'react';
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

  // Forward Navigation
  const handleStart = () => setState(AppState.SPECIAL_MESSAGE);
  const handleToMemories = () => setState(AppState.MEMORIES);
  const handleToWishes = () => setState(AppState.WISHES);
  const handleToApology = () => setState(AppState.APOLOGY);
  const handleToSurprise = () => setState(AppState.SURPRISE);
  const handleToThankYou = () => setState(AppState.THANK_YOU);
  const handleToForm = () => setState(AppState.FORM);

  // Backward Navigation
  const handleBackToLanding = () => setState(AppState.LANDING);
  const handleBackToSpecialMessage = () => setState(AppState.SPECIAL_MESSAGE);
  const handleBackToMemories = () => setState(AppState.MEMORIES);
  const handleBackToWishes = () => setState(AppState.WISHES);
  const handleBackToApology = () => setState(AppState.APOLOGY);
  const handleBackToSurprise = () => setState(AppState.SURPRISE);
  const handleBackToThankYou = () => setState(AppState.THANK_YOU);
  const handleBackToForm = () => setState(AppState.FORM);

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

  const handleRestart = () => {
    setCardData(null);
    setGeneratedContent(null);
    setState(AppState.LANDING);
  };

  return (
    <div className="min-h-screen">
      {state === AppState.LANDING && (
        <Landing onStart={handleStart} />
      )}

      {state === AppState.SPECIAL_MESSAGE && (
        <SpecialMessage onContinue={handleToMemories} onBack={handleBackToLanding} />
      )}

      {state === AppState.MEMORIES && (
        <Memories onContinue={handleToWishes} onBack={handleBackToSpecialMessage} />
      )}

      {state === AppState.WISHES && (
        <NewYearWish onContinue={handleToApology} onBack={handleBackToMemories} />
      )}

      {state === AppState.APOLOGY && (
        <Apology onContinue={handleToSurprise} onBack={handleBackToWishes} />
      )}

      {state === AppState.SURPRISE && (
        <Surprise onContinue={handleToThankYou} onBack={handleBackToApology} />
      )}

      {state === AppState.THANK_YOU && (
        <ThankYou onContinue={handleToForm} onBack={handleBackToSurprise} />
      )}

      {state === AppState.FORM && (
        <CardForm onSubmit={handleGenerate} onBack={handleBackToThankYou} />
      )}

      {state === AppState.GENERATING && (
        <div className="min-h-screen flex flex-col items-center justify-center bg-indigo-50 p-6 text-center">
          <div className="w-20 h-20 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mb-8"></div>
          <h2 className="text-3xl font-serif font-bold text-indigo-900 mb-2">Merangkai Kata...</h2>
          <p className="text-indigo-600/70 max-w-sm">
            AI kami sedang memilih kata-kata terbaik untuk menciptakan momen yang tak terlupakan.
          </p>
        </div>
      )}

      {state === AppState.RESULT && generatedContent && cardData && (
        <CardResult content={generatedContent} data={cardData} onRestart={handleRestart} onBack={handleBackToForm} />
      )}

      {error && (
        <div className="fixed bottom-4 right-4 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg shadow-lg z-50">
          <p className="font-bold">Error</p>
          <p>{error}</p>
          <button onClick={() => setError(null)} className="absolute top-2 right-2 text-red-500 hover:text-red-700">×</button>
        </div>
      )}
    </div>
  );
};

export default App;
