
import React, { useState } from 'react';
import { CardData, Occasion } from '../types';

interface CardFormProps {
  onSubmit: (data: CardData) => void;
  onBack: () => void;
}

const CardForm: React.FC<CardFormProps> = ({ onSubmit, onBack }) => {
  const [formData, setFormData] = useState<CardData>({
    recipient: '',
    sender: '',
    occasion: Occasion.BIRTHDAY,
    tone: 'Sangat menyentuh dan puitis',
    customContext: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <button onClick={onBack} className="mb-8 text-gray-400 hover:text-indigo-600 transition-colors flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Kembali
        </button>
        
        <h2 className="text-3xl font-serif font-bold text-gray-800 mb-2">Buat Kartu Baru</h2>
        <p className="text-gray-500 mb-10">Isi detail di bawah untuk mulai merangkai ucapan spesial.</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Untuk Siapa?</label>
              <input
                required
                type="text"
                placeholder="Nama Penerima"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                value={formData.recipient}
                onChange={e => setFormData({ ...formData, recipient: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Dari Siapa?</label>
              <input
                required
                type="text"
                placeholder="Nama Pengirim"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                value={formData.sender}
                onChange={e => setFormData({ ...formData, sender: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Momen Spesial</label>
            <select
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
              value={formData.occasion}
              onChange={e => setFormData({ ...formData, occasion: e.target.value as Occasion })}
            >
              {Object.values(Occasion).map(occ => (
                <option key={occ} value={occ}>{occ}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Gaya Bahasa / Nada</label>
            <input
              type="text"
              placeholder="Contoh: Lucu, Formal, Puitis, atau Santai"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
              value={formData.tone}
              onChange={e => setFormData({ ...formData, tone: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Pesan Tambahan (Opsional)</label>
            <textarea
              rows={3}
              placeholder="Contoh: Ceritakan sedikit tentang kenangan kalian atau hal spesifik yang ingin disampaikan..."
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
              value={formData.customContext}
              onChange={e => setFormData({ ...formData, customContext: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-indigo-200 transition-all transform hover:-translate-y-1 active:scale-95"
          >
            Hasilkan Ucapan Ajaib
          </button>
        </form>
      </div>
    </div>
  );
};

export default CardForm;
