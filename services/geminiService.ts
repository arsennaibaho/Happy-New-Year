
import { GoogleGenAI, Type } from "@google/genai";
import { CardData, GeneratedContent } from "../types";

export const generateCardContent = async (data: CardData): Promise<GeneratedContent> => {
  const apiKey = process.env.API_KEY;
  
  if (!apiKey) {
    throw new Error("API_KEY tidak ditemukan. Harap atur variabel lingkungan di dashboard Vercel.");
  }

  const ai = new GoogleGenAI({ apiKey });
  
  const prompt = `Buatkan konten kartu ucapan yang indah dalam Bahasa Indonesia.
  Penerima: ${data.recipient}
  Pengirim: ${data.sender}
  Acara: ${data.occasion}
  Nada: ${data.tone}
  Konteks Tambahan: ${data.customContext}

  Berikan output dalam format JSON yang berisi:
  1. headline (Judul singkat yang menarik)
  2. message (Pesan utama yang menyentuh hati, sekitar 2-3 paragraf)
  3. poem (Opsional: sebuah puisi pendek 4 baris)
  4. suggestedTheme (Objek berisi primaryColor hex, secondaryColor hex, dan pattern deskriptif)`;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          headline: { type: Type.STRING },
          message: { type: Type.STRING },
          poem: { type: Type.STRING },
          suggestedTheme: {
            type: Type.OBJECT,
            properties: {
              primaryColor: { type: Type.STRING },
              secondaryColor: { type: Type.STRING },
              pattern: { type: Type.STRING }
            },
            required: ["primaryColor", "secondaryColor", "pattern"]
          }
        },
        required: ["headline", "message", "suggestedTheme"]
      }
    }
  });

  const text = response.text;
  if (!text) throw new Error("Respon AI kosong");
  
  return JSON.parse(text);
};
