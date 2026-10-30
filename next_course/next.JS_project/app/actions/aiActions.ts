
"use server";

import { GoogleGenAI } from "@google/genai";

// Generate AI text securely on the server.
export async function generateText(prompt: string): Promise<string> {
  const apiKey = process.env.GOOGLE_GENAI_API_KEY;

  if (!apiKey) {
    throw new Error("Gemini API key is missing from .env");
  }

  const ai = new GoogleGenAI({ apiKey });

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return response.text || "No output generated.";
}
