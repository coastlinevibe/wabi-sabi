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

  return (
    <div className="border-t border-slate-200/50 bg-white/80 backdrop-blur-sm">
      <form
        onSubmit={handleSubmit}
        className="flex items-center p-2 sm:p-3"
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
    </div>
  );
}
