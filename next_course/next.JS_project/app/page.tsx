"use client";

import Image from "next/image";
import { generateText } from "@/app/actions/aiActions";
import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState<string>("");
  const [output, setOutput] = useState<string>("");

  const handleSendPrompt = async () => {
    const response = await generateText(prompt);
    setOutput(response);
  };

  return (
    <main className="flex w-screen h-screen flex-col items-center justify-between">
      {
        output && (
          <div className="output-area w-full h-[90%] overflow-y-auto px-24 py-4">
            <p className="text-lg">{output}</p>
          </div>
        )
      }

      <div className="input-area fixed bottom-6 px-24 py-2 w-full">
        <input
          className="border-2 border-black rounded-md w-[80%] outline-none px-2 py-1"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        ></input>
        <button
          className="bg-black text-white px-4 py-1 rounded-md ml-2 w-[18%] hover:bg-gray-800 transition-all duration-300"
          onClick={() => {
            handleSendPrompt();
            setPrompt("");
            }}
        >
          Send
        </button>
      </div>
    </main>
  );
}
