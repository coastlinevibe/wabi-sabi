import React, { useState, useEffect } from "react";
import { Send } from "lucide-react";

export default function MessageInput({
  onSend,
  initialMessage,
}: {
  onSend: (text: string) => void;
  initialMessage?: string;
}) {
  const [text, setText] = useState("");

  // Check for pre-filled message from URL on component mount
  useEffect(() => {
    // First try the prop
    if (initialMessage) {
      console.log('Using initial message prop:', initialMessage);
      setText(initialMessage);
      return;
    }

    // Fallback to URL params
    const urlParams = new URLSearchParams(window.location.search);
    const prefillMsg = urlParams.get('msg');
    console.log('URL params:', window.location.search);
    console.log('Prefill message:', prefillMsg);
    if (prefillMsg) {
      const decodedMsg = decodeURIComponent(prefillMsg);
      console.log('Decoded message:', decodedMsg);
      setText(decodedMsg);
    }
  }, [initialMessage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSend(text.trim());
    setText("");
  };

  const promptButtons = [
    "Hi! I'm interested in discovering hidden value in my business.",
    "Can you tell me about your pricing?",
    "I'd like to book a discovery session.",
    "How can you help automate my operations?",
    "What's included in your training programs?"
  ];

  const handlePromptClick = (prompt: string) => {
    setText(prompt);
  };

  return (
    <div className="border-t border-slate-200/50 bg-white/80 backdrop-blur-sm">
      <form
        onSubmit={handleSubmit}
        className="flex items-center p-3 sm:p-4"
      >
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 border-none outline-none text-xs sm:text-sm bg-transparent placeholder:text-slate-400 text-slate-800"
        />
        <button
          type="submit"
          disabled={!text.trim()}
          className="ml-2 sm:ml-3 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 disabled:from-slate-300 disabled:to-slate-400 text-white p-2 sm:p-2.5 rounded-lg sm:rounded-xl transition-all duration-200 shadow-md hover:shadow-amber-500/25 disabled:cursor-not-allowed"
        >
          <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>
      </form>
      
      {/* Prompt Buttons */}
      <div className="px-3 sm:px-4 pb-3 sm:pb-4">
        <div className="flex flex-wrap gap-2">
          {promptButtons.map((prompt, index) => (
            <button
              key={index}
              onClick={() => handlePromptClick(prompt)}
              className="text-xs sm:text-sm px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full border border-slate-200 transition-all duration-200 hover:shadow-sm"
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
